const net = require('net');
const { IP, PORT } = require('./constants');

// creates the server for clients to connect to
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  // confirms which client has connected to server
  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: JAS");
    // setInterval( func = () => {
    //   conn.write("Move: up");
    // }, 50);
  });

  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };