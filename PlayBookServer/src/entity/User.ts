import {WebsocketConnection, WebsocketMessage} from "../types/Websocket";

export class User{
  private sessionKey: string;
  private username: string;
  private email: string;
  private admin: boolean;
  private connection: WebsocketConnection;
  private userIndex: string;


  constructor(connection: WebsocketConnection, userIndex: string){
    this.connection = connection;
    this.userIndex = userIndex;


    connection.on('message', function(message: WebsocketMessage) {
      if (message.type === 'utf8') {
        console.log('Received Message: ' + message.utf8Data);
        connection.sendUTF(message.utf8Data);
      }
      else if (message.type === 'binary') {
        console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        connection.sendBytes(message.binaryData);
      }
    });
  }
}
