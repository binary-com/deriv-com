const { exec } = require('child_process');

exec('git checkout my-crowdin', (err, stdout, stderr) => {
 // handle err, stdout & stderr
    if(err) {
        console.log(err)
    }

    else {
        console.log('Switched to Crowdin')
    }
});