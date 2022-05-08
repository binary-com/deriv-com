/* eslint-disable  */
const { exec } = require('child_process')

let current_step = 0
const crowdin_branch = 'my-crowdin'
const target_branch = process.argv[2]

const steps_messages = [
    `[1] Switched to ${crowdin_branch}`,
    `[2] Fetched latest: ${crowdin_branch}`,
]

const showMessage = (err) => {
    const status = err ? 'x' : '✓'

    console.log(`${steps_messages[current_step]} ${status}`)
}

const handleProcess = (err, stdout, stderr) => {
    if (err) {
        showMessage(err)
        console.log(err)
    } else {
        showMessage()
        current_step++
        runProcess()
    }
}

const runProcess = () => {
    switch (current_step) {
        case 0:
            exec(`git checkout ${crowdin_branch}`, handleProcess)
            break
        case 1:
            exec(`git pull origin ${crowdin_branch}`, handleProcess)
            break

        default:
            break
    }
}

if (target_branch) {
    runProcess()
} else {
    console.log('Target branch is required!')
}
