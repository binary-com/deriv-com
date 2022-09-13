/* eslint-disable */
const { exec } = require('child_process')
const cliSelect = require('cli-select')
const dotenv = require('dotenv').config({ path: '.env.development' })
const prompt = require('prompt-sync')()

const branches = ['pr', 'translation', 'stp']

const logError = (err) => {
    console.log(`\x1b[31m${err}`)
}

const isNumber = (number) => {
    return /^\d+$/.test(number)
}

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
            const msg = 'What kind of branch you need to work on?'
            const options = ['Normal PR', 'Normal Translation', 'STP']
            console.log(`\x1b[33m${msg}  \n \x1b[0m`)

            cliSelect({
                values: options,
            })
                .then(({ id }) => {
                    const branch_prefix = branches[id]

                    branchGenerator(2, { branch_prefix })
                })
                .catch(() => {})
            break
        case 2:
            {
                const { branch_prefix } = data

                const redmine_id = prompt('\x1b[33mRedmine Card #: \x1b[0m')

                if (isNumber(redmine_id)) {
                    const branch_name = `${branch_prefix}-${redmine_id}`
                    branchGenerator(3, { branch_name })
                } else {
                    if (redmine_id !== 'exit') {
                        logError('Redmine Card # should be a number')
                        branchGenerator(2, { branch_prefix })
                    }
                }
            }
            break
        case 3:
            {
                const { branch_name } = data

                const name_input = prompt('\x1b[33mBranch name: \x1b[0m')

                const clean_name_input = slugify(name_input)

                if (clean_name_input) {
                    if (branch_name.slice(0, 3) === 'stp') {
                        const final_branch_name = `${branch_name}-${clean_name_input}`
                        branchGenerator(4, { final_branch_name })
                    } else {
                        exec(`git checkout -b ${branch_name}-${clean_name_input}`, () => {})
                    }
                }
            }
            break

        case 4:
            {
                const { final_branch_name } = data

                const pr_id = prompt('\x1b[33mPR-ID: \x1b[0m')

                if (isNumber(pr_id)) {
                    exec(`git fetch upstream pull/${pr_id}/head:${final_branch_name}`, (err) => {
                        if (err) {
                            logError(err)
                            branchGenerator(4, { final_branch_name })
                        } else {
                            exec(`git checkout ${final_branch_name}`, () => {})
                        }
                    })
                } else {
                    if (pr_id !== 'exit') {
                        logError('PR id # should be a number')
                        branchGenerator(4, { final_branch_name })
                    }
                }
            }
            break

        default:
            break
    }
}

branchGenerator()
