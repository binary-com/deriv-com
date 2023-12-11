const fs = require('fs')
const path = require('path')

const fetchTrustpilotData = async () => {
    const fileDir = path.resolve(__dirname, '../src/data')
    const fileName = 'trustpilot.ts'
    const filePath = path.join(fileDir, fileName)

    const decodeKey = (key) => atob(key)
    const keys = [
        'MXI4ekpSen','BHaFdLV2g','2VnVpQWplNEh','XUFZoRWczSGo'
    ]

    try {
        const appName = 'deriv.com'
        const apiKey = decodeKey(keys.join(''))

        console.log(apiKey)
        if (!appName || !apiKey) {
            throw new Error('Trustpilot app name or API key is missing')
        }

        const url = `https://api.trustpilot.com/v1/business-units/find?name=${appName}&apikey=${apiKey}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`)
        }

        const result = await response.json()
        const tpData = {
            stars: result.score?.stars || 0,
            trustScore: result.score?.trustScore || 0,
            numberOfReviews:
                result.numberOfReviews?.usedForTrustScoreCalculation.toLocaleString() || '',
        }

        console.log(`\x1b[33m[Trustpilot Data]\x1b[32m: ${JSON.stringify(tpData)}`)

        const fileContent = `
        import { TPilotDataProps } from '@deriv-com/components'
        
        export const truspilotData: TPilotDataProps = {
            trustScore: ${tpData.trustScore},
            stars: ${tpData.stars},
            numberOfReviews: "${tpData.numberOfReviews}",
        }
        `

        fs.writeFileSync(filePath, fileContent, 'utf8', (err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

fetchTrustpilotData()
