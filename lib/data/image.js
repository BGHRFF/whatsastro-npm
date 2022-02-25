const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_start_im(language) {

  var data = ''
  await axios.get('https://gist.githubusercontent.com/phaticusthiccy/d0d1855bd0098d773759b4f3345bd292/raw/').then(async (ann) => {
    data = ann.data.image
  })
  return data;
}
module.exports = announcement_start_im
