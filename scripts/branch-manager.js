/* eslint-disable */
const { exec } = require('child_process')
const cliSelect = require('cli-select')
const dotenv = require('dotenv').config({ path: '.env.development' })
const prompt = require('prompt-sync')()

let branch_name = ''
let action = ''

const logError = (err) => {
    console.log(`\x1b[31m${err}`)
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
            const options = [
                'Normal PR',
                'Normal Translation',
                'Special Translation Procedure (STP)',
            ]
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

branchGenerator()
