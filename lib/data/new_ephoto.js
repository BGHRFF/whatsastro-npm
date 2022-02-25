const axios = require('axios');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function link_e(query, html) {

  var data = {
    image: '',
    status: false
  }
  var encoded_q = encodeURIComponent(query)
  var sync_query = 'https://api.codebazan.ir/ephoto/writeText?output=json&effect=' + html + '&text=' + encoded_q
  var pay = await axios.get(sync_query)
  data.image = pay.data.image_url
  data.status = pay.data.success
  if (!data.status) {
    var pay2 = await axios.get(sync_query)
    data.image = pay2.data.image_url
    data.status = pay2.data.success
    if (!data.status) {
      var pay3 = await axios.get(sync_query)
      data.image = pay3.data.image_url
      data.status = pay3.data.success
      if (!data.status) {
        var pay4 = await axios.get(sync_query)
        data.image = pay4.data.image_url
        data.status = pay4.data.success
      }
    }
  }
  return data;
}
module.exports = link_e
