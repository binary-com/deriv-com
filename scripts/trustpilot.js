const { exec } = require('child_process')
const { fetchTrustpilotData } = require('./data/trustpilot-generator');

fetchTrustpilotData(() => {
    exec(`git add src/data/trustpilot.ts`)
})