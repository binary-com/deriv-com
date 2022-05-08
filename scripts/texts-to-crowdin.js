/* eslint-disable  */
const { exec } = require('child_process')

let current_step = 0
const crowdin_branch = 'my-crowdin'
const target_branch = process.argv[2]

const steps_messages = [
    `Generate texts to be translated`,
    `Switched to ${crowdin_branch}`,
    `Fetched latest: ${crowdin_branch}`,
    `Back to ${target_branch}`,
]

const showMessage = (err) => {
    const status = err ? 'x' : '✓'

    console.log(`[${status}] ${steps_messages[current_step]}`)
}

const handleProcess = (err, stdout, stderr) => {
    if (stdout && current_step === 0) {
        console.log(stdout)
        console.log('Crowdin Extractor Script: Please commit/stash unstaged files')
    } else {
        if (err) {
            showMessage(err)
            console.log(err)
        } else {
            showMessage()
            current_step++
            runProcess()
        }
    }
}

const runProcess = () => {
    switch (current_step) {
        case 0:
            exec(`git update-index --refresh`, handleProcess)
            break
        case 1:
            exec(`npm run translate:generate`, handleProcess)
            break
        case 2:
            exec(`git checkout ${crowdin_branch}`, handleProcess)
            break
        case 3:
            exec(`git pull origin ${crowdin_branch}`, handleProcess)
            break
        case 4:
            exec(`git checkout ${target_branch}`, handleProcess)
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
