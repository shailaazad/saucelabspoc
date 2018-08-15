var _ = require('lodash');

var http = require("http");

var options = {
  host: "127.0.0.1",
  port: 12345,
  path: "http://control.charles/session/export-json",
  headers: {
    Host: "control.charles"
  }
};

http.get(options, function(res) {
  res.setEncoding('binary')
  var data = '';

	res.on('data', function(chunk) {
	    data += chunk;
	});

	res.on('end', function() {
		const json = JSON.parse(data)
		console.log(json)
    // const match = _.find(json, { host: "analytics.tbs.com" })
    // if (match.path.match('/b/ss/tcm-tbs-adbp-resp').length > 0) { console.log('test passed') }
    // console.log('match', match)
	});
	res.on('error', function(err) {
    console.log("Error during HTTP request");
    console.log(err.message);
	});

});