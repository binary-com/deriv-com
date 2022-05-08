/* eslint-disable  */
const { exec } = require('child_process')
const fs = require('fs')

exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
        const target_branch = stdout.trim()

        let current_step = 0
        let text_file = ''
        const unix = +new Date()
        const crowdin_branch = 'my-crowdin'

        const steps_messages = [
            'Branch Check',
            'Generate texts to be translated',
            `Switched to ${crowdin_branch}`,
            `Fetched latest: ${crowdin_branch}`,
            `Create branch for texts to translate`,
            `Create PR to ${crowdin_branch}`,
            `Back to ${target_branch}`,
        ]

        const showMessage = (err) => {
            const status = err ? 'x' : '✓'

            console.log(`[${status}] ${steps_messages[current_step]}`)
        }

        const handleProcess = (err, stdout, stderr) => {
            if (stdout && current_step === 0) {
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
                    fs.readFile(`src/crowdin/${target_branch}.js`, 'utf8', (err, data) => {
                        if (err) {
                            console.error(err)
                            return
                        }

                        text_file = data

                        exec(`git stash && git clean -df`, () => {
                            exec(`git checkout ${crowdin_branch}`, handleProcess)
                        })
                    })

                    break
                case 3:
                    exec(`git pull origin ${crowdin_branch}`, handleProcess)
                    break
                case 4:
                    exec(`git checkout -b translation-${unix}`, handleProcess)
                    console.log('file copy?')
                    console.log(text_file)
                    // exec(`git checkout ${target_branch}`, handleProcess)
                    break

                default:
                    break
            }
        }

        runProcess()
    }
})
