const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_start_u(language) {
  data = ''
  await axios.get('https://gist.githubusercontent.com/Ber4tBey/5c0988f4beedc62b4e0d2e5e320d2e97/raw/').then(async (ann) => {
    const { infotr, infoen, infoes, infopt, infoid, infoaz, infohi, infoml, inforu, infolk } = ann.data.announcements
    if (language == 'TR') {
      data = infotr
    }
    else if (language == 'AZ') {
      data = infoaz
    }
    else if (language == 'EN') {
      data = infoen
    }
    else if (language == 'HI') {
      data = infohi
    }
    else if (language == 'ES') {
      data = infoes
    }
    else if (language == 'ML') {
      data = infoml
    }
    else if (language == 'RU') {
      data = inforu
    }
    else if (language == 'PT') {
      data = infopt
    }
    else if (language == 'ID') {
      data = infoid
    }
    else if (language == 'LK') {
      data = infolk
    }
  })
  return data;
}
module.exports = announcement_start_u
