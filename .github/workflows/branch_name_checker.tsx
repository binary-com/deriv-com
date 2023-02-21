const github = require('@actions/github')
const core = require('@actions/core')

const translation_flows = ['translation', 'stp']
const special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

async function run() {
    const is_proceed =
        translation_flows.includes(github?.workflow?.head_branch || github?.head_ref) &&
        !special_characters.includes(github?.workflow?.head_branch || github?.head_ref)
    core.exportVariable('is_proceed', String(is_proceed))
}

run()
