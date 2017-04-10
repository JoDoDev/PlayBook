
module.exports = class User {
  constructor(connection, userIndex) {
    this.connection = connection;
    this.userIndex = userIndex;
    this.sessionKey;
    this.username;
    this.email;
    this.admin;
    this.connection;
    this.userIndex;


    connection.on('message', function (message) {
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
};
