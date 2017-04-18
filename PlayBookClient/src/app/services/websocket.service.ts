import {Injectable} from '@angular/core';
import {EventEmitter} from 'events';

@Injectable()
export class WebsocketService {
  private client: WebSocket;
  public messageEmitter: EventEmitter = new EventEmitter();

  constructor() {
    this.client = new WebSocket("ws://localhost:6283/", "echo-protocol");
    this.client.onmessage = this.onMessage;
    this.client.onclose  = this.onClose;
    this.client.onopen = this.onOpen;
    this.client.onerror = this.onError;
  }

  private onOpen(connection: Event) {
    console.log("Connected with server");
  }

  private onError(error : Event) {
    console.error(error);
  }

  private onClose(closeEvent: CloseEvent) {
    console.log(closeEvent)
  }

  private onMessage(message: MessageEvent) {
    try {
      let data = JSON.parse(message.data);
      console.log('Received Data', data);
      this.messageEmitter.emit(data.type, data);
    } catch (e) {
      console.log("failed to Parse JSON", e);
    }
  }

  public send(data: any) {
    if (typeof data !== 'string'){
      data = JSON.stringify(data);
    }
    this.client.send(data);
  }



}
