let connection;

// canned messages
const msg = "Say: ";
const glhf = "glhf!";
const gg = "gg!";

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};
// user inputs to move and communicate
const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Snake game has been closed.\n");
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === "q") {
    connection.write(msg + glhf);
  }
  if (key === 'e') {
    connection.write(msg + gg);
  }
};

module.exports = { setupInput };