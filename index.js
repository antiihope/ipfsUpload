function Upload_ipfs(path, callback = function () {}) {
  const request = require('request');
  const fs = require('fs');
  const file = fs.createReadStream(path);
  const options = {
    url: 'https://ipfs.infura.io:5001/api/v0/add?stream-channels=true',
    method: 'POST',
    headers: {
      'Content-Type':
        'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    },
    formData: {
      file: file,
    },
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(body);
      var res = JSON.parse(body);
      res.url = 'https://ipfs.infura.io/ipfs/' + res.Hash;
      console.log(res);
      callback(res);
    }
  });
}
