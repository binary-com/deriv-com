/* eslint-disable  */
const { exec } = require('child_process')

let current_step = 0
const crowdin_branch = 'my-crowdin'
const target_branch = process.argv[2]

const steps_messages = [`[1] Switched to ${crowdin_branch}`]

const showMessage = (err) => {
    const status = err ? 'x' : '✓'

    console.log(`${steps_messages[current_step]} ${status}`)
}

if (target_branch) {
    exec(`git checkout ${crowdin_branch}`, (err, stdout, stderr) => {
        // handle err, stdout & stderr
        if (err) {
            showMessage(err)
            console.log(err)
        } else {
            showMessage()
            current_step++
        }
    })
} else {
    console.log('Target branch is required!')
}
