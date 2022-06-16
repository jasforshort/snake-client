const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });
  conn.setEncoding('utf8');

  return conn;
};

const conn = connect();

conn.on('data', data => {
  console.log(data);
});

module.exports = { connect };