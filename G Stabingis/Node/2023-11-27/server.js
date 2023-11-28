let http = require('http');
let serverTime = require('./data');
let port = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Tekstas didziosiomis raidemis');
    res.end('Laikas ir data serveryje: ' + serverTime.serverDateTime());
    
  }).listen(port);

  console.log('server running on port: ' + port);