/* eslint-disable */
const { exec } = require('child_process')
const cliSelect = require('cli-select')
const dotenv = require('dotenv').config({ path: '.env.development' })
const prompt = require('prompt-sync')()

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

const slugify = (text) =>
    text &&
    text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')

const branchGenerator = (step = 1, data = {}) => {
    switch (step) {
        case 1:
            const msg = 'What kind of translation are you gonna work on?'
            const options = ['Normal Translation', 'STP']
            console.log(`\x1b[33m${msg}  \n \x1b[0m`)

            cliSelect({
                values: options,
            })
                .then(({ id }) => {
                    const branch_prefix = translation_branches[id]
                    const unix = +new Date()

                    branchGenerator(2, { branch_prefix, unix })
                })
                .catch(() => {})
            break
        case 2:
            const { branch_prefix, unix } = data
            const branch_name = prompt('\x1b[33mFill in your branch name: \x1b[0m')

            const clean_branch_name = slugify(branch_name)

            if (clean_branch_name) {
                exec(`git checkout -b ${branch_prefix}-${clean_branch_name}-${unix}`, () => {})
            }

            break
        default:
            break
    }
}

const handleProcess = (action) => {
    if (action === 'branch') {
        branchGenerator()
        return false
    }

    // Detect Auto Translation Process

    if (action !== 'pull-master')
        console.log(
            `\x1b[33mInitialized auto translation pull for \x1b[32m[${branch_name}]\x1b[33m   \n \x1b[0m`,
        )
    else {
        console.log(
            `\x1b[32m[Main] \x1b[33mFetching translation from the master source \x1b[33m   \n \x1b[0m`,
        )
    }

    runProcess({
        process: action,
        callback: (error, stdout) => {
            if (error) {
                logError(error)
            }

            if (stdout) {
                console.log(stdout)
            }
        },
    })
}

const runProcess = (data) => {
    const { process, callback } = data

    switch (process) {
        case 'pull':
            exec(
                `git commit -m 'auto-pull-translation' --allow-empty --no-verify;git push origin ${branch_name} `,
                callback,
            )
            break
        case 'pull-master':
            exec(
                `crowdin download -b  master -T ${CROWDIN_API_KEY} && crowdin download -b master -l zh-CN -T ${CROWDIN_API_KEY} `,
                callback,
            )
            break
        default:
            break
    }
}
