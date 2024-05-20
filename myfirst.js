//create date ex: 14 August , 1996 --> the day, month, year will be written in url
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.day + " " + q.month + " , " + q.year;
  res.end(txt);
}).listen(8080);  

//create file and write content then save
var fs = require('fs');

fs.appendFile('CodelineFile.txt', 'Codeline by Rihal !!!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//to create empty file 
var fs = require('fs');

fs.open('newCodelineFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});