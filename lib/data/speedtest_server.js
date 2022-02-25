const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

async function speedy_server() {

  var data = {
    bps: '',
    kbps: '',
    mbps: '',
    gbps: ''
  }
  var baseUrl = 'https://eu.httpbin.org/stream-bytes/100000000';
  const fileSizeInBytes = 50000000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  data.bps = speed.bps
  data.kbps = speed.kbps
  data.mbps = speed.mbps
  var GBPS = Number(speed.mbps) / 1000
  var onceGBPS = GBPS.toString().split('')
  var finalGBPS = onceGBPS[0] + onceGBPS[1] + onceGBPS[2]
  data.gbps = finalGBPS
  return data;
}
module.exports = speedy_server
