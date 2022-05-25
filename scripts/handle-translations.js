/* eslint-disable */
const { exec } = require('child_process')
const cliSelect = require('cli-select')
const dotenv = require('dotenv').config({ path: '.env.development' })
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let branch_name = ''
let action = ''
const CROWDIN_API_KEY = dotenv.parsed.CROWDIN_API_KEY
const translation_branches = ['translation', 'stp']
const logError = (err) => {
    console.log(`\x1b[31m${err}`)
}

exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
    if (err) {
        logError(err)
    }

    if (typeof stdout === 'string') {
        branch_name = stdout.trim()
        action = process.argv[2]

        handleProcess(action)
    }
})

const branchGenerator = (step = 1, data = {}) => {
    let msg = ''
    let options = []
    switch (step) {
        case 1:
            msg = 'What kind of translation are you gonna work on?'
            options = ['Normal Translation', 'STP']
            break
        case 2:
            msg = 'Fill your branch name:'
            break
        default:
            break
    }

    console.log(`\x1b[33m${msg}  \n \x1b[0m`)

    if (step === 1) {
        cliSelect({
            values: options,
        })
            .then(({ id }) => {
                const branch_prefix = translation_branches[id]
                const unix = +new Date()

                branchGenerator(2, { branch_prefix, unix })
            })
            .catch(() => {})
    } else {
        readline.question(msg, (branch_name) => {
            exec(`git checkout -b ${branch_prefix}-${branch_name}-${unix}`, () => {})
            readline.close()
        })
    }
}

const handleProcess = (action) => {
    if (action === 'branch') {
        branchGenerator()
        return false
    }

    translation_branches.forEach((b) => {
        // Detect Auto Translation Process
        const branch_prefix = branch_name.split('-')[0]

        if (translation_branches.includes(branch_prefix)) {
            if (action !== 'pull-master')
                console.log(
                    `\x1b[33mFetching translation data for \x1b[32m[${branch_name}]\x1b[33m   \n \x1b[0m`,
                )
            else {
                console.log(
                    `\x1b[32m[STP Process] \x1b[33mFetching translation from master source \x1b[33m   \n \x1b[0m`,
                )
            }

            runProcess({
                process: action,
                callback: (error, stdout, stderr) => {
                    if (error) {
                        logError(error)
                    }

                    if (stdout) {
                        console.log(stdout)
                    }
                },
            })
        } else {
            console.log(
                `\x1b[32m[${branch_name}]\x1b[31m is not a valid translation branch \n \x1b[0m`,
            )
        }
    })
}

const runProcess = (data) => {
    const { process, callback } = data

    switch (process) {
        case 'pull':
            exec(`crowdin download -b ${branch_name} -T ${CROWDIN_API_KEY}`, callback)
            break
        case 'pull-master':
            exec(`crowdin download -b master -T ${CROWDIN_API_KEY}`, callback)
            break
        default:
            break
    }
}
