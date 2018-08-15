const { exec } = require('child_process')

const start = "npm run proxy"
const stop = "npm run stop:proxy"
const startT = "npm run sc -- -<username> -<accesskey> -plocalhost:12345 -T -i turner_tunnel"

// TODO: how should we end the tunnel connection? 

const startTunnel = () => {
	setTimeout(() => {
		console.log('Running starttunnel')
		exec(startT, (err, stdout, stderr) => {
		  if (err) {
		    // node couldn't execute the command
		    return;
		  }

		  // the *entire* stdout and stderr (buffered)
		  console.log(`stdout: ${stdout}`)
		  console.log(`stderr: ${stderr}`)
		})
	})
}

const startProxy = () => {
	console.log('Running starttproxy')

	setTimeout(() => {
		startTunnel()
	  exec(start, (err, stdout, stderr) => {
		  if (err) {
		    // node couldn't execute the command
		    return;
		  }

		  // the *entire* stdout and stderr (buffered)
		  console.log(`stdout: ${stdout}`)
		  console.log(`stderr: ${stderr}`)
		});
	}, 15000);	

}

const stopProxy = () => {
	console.log('Running stop proxy')

  exec(stop, (err, stdout, stderr) => {
	  if (err) {
	    // node couldn't execute the command
	    return;
	  }

	  // the *entire* stdout and stderr (buffered)
	  console.log(`stdout: ${stdout}`);
	  console.log(`stderr: ${stderr}`);
	});
}

module.exports = { startProxy, stopProxy, startTunnel }