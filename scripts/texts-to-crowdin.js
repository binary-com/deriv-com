/* eslint-disable  */
const { exec } = require('child_process')
const fs = require('fs')
const open = require('open')

exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
        const target_branch = stdout.trim()

        let current_step = 0
        let text_file = ''
        const unix = +new Date()
        const crowdin_branch = 'crowdin'
        const translate_branch = `translation-${unix}`
        const file_path = `src/crowdin/${target_branch}.js`

        const steps_messages = [
            'Branch Check',
            'Generate texts to be translated',
            `Switched to ${crowdin_branch}`,
            `Fetched latest: ${crowdin_branch}`,
            `Create branch for texts to translate`,
            `Create PR to ${crowdin_branch}`,
            `Translation Branch (${translate_branch}) is now ready to get merged to crowdin, \nplease make sure you are creating the PR against the crowdin branch and check that all the changes are only the files inside src/crowdin`,
        ]

        const showMessage = (err) => {
            const status = err ? '\x1b[31mx\x1b[0m' : '\x1b[32m✓\x1b[0m'

            console.log(`[${status}]\x1b[0m${steps_messages[current_step]}`)
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
                    fs.readFile(file_path, 'utf8', (err, data) => {
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
                    exec(`git pull upstream ${crowdin_branch}`, handleProcess)
                    break
                case 4:
                    exec(`git checkout -b ${translate_branch}`, handleProcess)

                    // exec(`git checkout ${target_branch}`, handleProcess)
                    break
                case 5:
                    // Create Crowdin folder if not existing
                    const dir = 'src/crowdin/'
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir)
                    }

                    // Generate new list for crowdiwn translations
                    fs.writeFileSync(file_path, text_file, 'utf8', (err) => console.log(err))

                    // Auto Popup PR link
                    exec(
                        `git add ${file_path}; git commit -m 'chore: added new texts to be translated';git push origin ${translate_branch}`,
                        (err, stdout, stderr) => {
                            if (err) {
                                console.log(err)
                            } else {
                                exec(
                                    'git config --get remote.origin.url',
                                    (err, stdout, stderr) => {
                                        if (err) {
                                            console.log(err)
                                        } else {
                                            const remote_user = stdout.split('/')[3]

                                            if (remote_user) {
                                                const pr_url = `https://github.com/binary-com/deriv-com/compare/crowdin...${remote_user}:translation-1652007782914?expand=1`

                                                open(pr_url)
                                                current_step++
                                                runProcess()
                                            } else {
                                                console.log('Cannot fetch remote user')
                                            }
                                        }
                                    },
                                )
                            }
                        },
                    )

                    break
                case 6:
                    // Back to the Default branch
                    exec(`git checkout ${target_branch}`, handleProcess)
                    break
                default:
                    break
            }
        }

        runProcess()
    }
})
