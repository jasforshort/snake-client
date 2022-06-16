// starts the game and connects to the server
const { connect } = require("./client");
const { setupInput } = require("./input");

// logs connecting on client screen and sets up required inputs for client
const connection = connect();
console.log("Connecting ...");
setupInput(connection);

module.exports = { connect };