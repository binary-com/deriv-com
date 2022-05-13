/* eslint-disable */
const { exec } = require('child_process')

let branch_name = ''

const logError = (err) => {
    console.log(`\x1b[31m${err}`)
}

exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
    if (err) {
        logError(err)
    }

    if (typeof stdout === 'string') {
        branch_name = stdout.trim()

        const action = process.argv[2]

        handleProcess({
            action,
        })
    }
})

const handleProcess = (data) => {
    const { action } = data
    const branch_name_convention = 'translation-'

    // Branch name check
    if (!branch_name.startsWith(branch_name_convention)) {
        console.log(
            `\x1b[31mInvalid branch name: \x1b[33m${branch_name}\x1b[31m \nBranch that requires translation should start with: \x1b[32m${branch_name_convention}[your-branch-name]\n `,
        )

        return false
    }

    switch (action) {
        case 'push':
            runProcess({
                process: 'extract',
                callback: () => {
                    console.log('\x1b[32m✔️ \x1b[0m Extracted texts to messages.json')
                    console.log('\x1b[32m✔️ \x1b[0m Crowdin Action')
                    console.log('------------------------------------------------------------')
                    runProcess({
                        process: 'push',
                        callback: (error, stdout) => {
                            if (error) {
                                logError(error)
                            }

                            console.log(stdout)

                            console.log(
                                `\x1b[32m Texts to be translated our now pushed to crowdin with a branch name: ${branch_name}`,
                            )
                        },
                    })
                },
            })

            break

        case 'pull':
            console.log(`\x1b[32m✔️ \x1b[0m Pulling Texts from Crowdin[${branch_name}]`)
            console.log('------------------------------------------------------------')

            runProcess({
                process: 'pull',
                callback: () => {
                    runProcess({
                        process: 'push',
                        callback: (error, stdout) => {
                            if (error) {
                                logError(error)
                            }

                            console.log(stdout)

                            console.log(
                                `\x1b[32m translated texts our now pulled to branch name: ${branch_name}`,
                            )
                        },
                    })
                },
            })

            break

        default:
            break
    }
}

const runProcess = (data) => {
    const { process, callback } = data

    switch (process) {
        case 'extract':
            exec(`npm run translate:extract`, callback)
            break
        case 'push':
            exec(`crowdin upload sources -b ${branch_name} `, callback)
            break
        case 'pull':
            exec(`crowdin download  -b ${branch_name} `, callback)
            break
        default:
            break
    }
}
