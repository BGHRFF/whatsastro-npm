const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function datebiog(Language) {

  if (!Language) { throw new Error ('Missing Language!!') }
  const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  var data = new Date().toLocaleDateString(Language, get_localized_date)
  return data;
}
module.exports = datebiog
