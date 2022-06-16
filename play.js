const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

const conn = connect();

conn.on('data', data => {
  console.log(data);
});

console.log("Connecting ...");
connect();