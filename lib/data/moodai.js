const exec = require('child_process').exec;
const os = require("os");
async function moodai(message, config) {

  if (!message) { throw new Error ('Missing Text') }
  if (!config) { throw new Error ('Missing API Key') }
  var data = message 
  return data;
}
module.exports = moodai
