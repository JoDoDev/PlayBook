import {Injectable} from '@angular/core';
import {EventEmitter} from 'events';

@Injectable()
export class WebsocketService {
  private client: WebSocket;
  public messageEmitter: EventEmitter = new EventEmitter();

  constructor() {
    this.client = new WebSocket("ws://localhost:6283/", "echo-protocol");
    //noinspection SpellCheckingInspection
    this.client.onmessage = (message: MessageEvent) => this.onMessage(message);
    //noinspection SpellCheckingInspection
    this.client.onclose  = (closeEvent: CloseEvent) => this.onClose(closeEvent);
    //noinspection SpellCheckingInspection
    this.client.onopen = (connection: Event) => this.onOpen(connection);
    //noinspection SpellCheckingInspection
    this.client.onerror = (error : Event) => this.onError(error);
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
    if (this.client.readyState !== 1) {
      this.sendOnLoad(data);
    } else {
      this.client.send(data);
    }
  }

  private sendOnLoad (message) {
    this.waitForConnection(() => {
      this.client.send(message);
    }, 100);
  };

  private waitForConnection (callback, interval) {
    if (this.client.readyState === 1) {
      callback();
    } else {
      setTimeout(() => {
        this.waitForConnection(callback, interval);
      }, interval);
    }
  };
}
