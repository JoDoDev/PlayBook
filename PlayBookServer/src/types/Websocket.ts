/**
 * Created by Donato Wolfisberg on 15.03.2017.
 */


export interface WebsocketRequest {
  origin: string;
  requestedProtocols: string[];


  reject(): void;
  accept(protocol: string, origin: string): WebsocketConnection;
}

export interface WebsocketConnection {
  remoteAddress: string;

  on(event: string, callback: (...args: any[]) => void): void;
  sendUTF(content: string): void;
  sendBytes(content: number[]): void;
}

export interface WebsocketMessage {
  type: string;

  utf8Data?: string;
  binaryData?: number[];
}
