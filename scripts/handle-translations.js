/* eslint-disable */
const { exec } = require('child_process')
const dotenv = require('dotenv').config({ path: '.env.development' })

let branch_name = ''
let action = ''
const CROWDIN_API_KEY = dotenv.parsed.CROWDIN_API_KEY

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

const handleProcess = (action) => {
    const branch_name_convention = 'translation-'
    const strings_path = 'crowdin/messages.json'

    // Detect Auto Translation Process
    if (branch_name.startsWith(branch_name_convention)) {
        if(action !=="pull-master")
        console.log(
            `\x1b[33mFetching translation data for \x1b[32m[${branch_name}]\x1b[33m   \n \x1b[0m`,
        )
        else{
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
        console.log(`\x1b[32m[${branch_name}]\x1b[31m is not a valid translation branch \n \x1b[0m`)
    }
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
