const fs = require('fs')
const path = require('path')
require('dotenv').config();

const fetchTrustpilotData = async () => {
    const fileDir = path.resolve(__dirname, '../src/data')
    const fileName = 'trustpilot.json'
    const filePath = path.join(fileDir, fileName)

    console.log('Fetching TRUSTPILOT!!')
 
    try {
        const appName = 'deriv.com'
        const apiKey = process.env.GATSBY_TRUSTPILOT_API_KEY
     
        if (!appName || !apiKey) {
            throw new Error('Trustpilot app name or API key is missing')
        }

        const url = `https://api.trustpilot.com/v1/business-units/find?name=${appName}&apikey=${apiKey}`
        const response = await fetch(url)

        console.log('TRYING!!')

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

        console.log(tpData)

        const fileContent = JSON.stringify(tpData,null,2)

        fs.writeFile(filePath, fileContent, (error) => {
            if (error) {
              // Handle errors
              console.error('Error writing to the file:', error);
            }
          });
       
    } catch (error) {
        console.log(error)
    }
}

fetchTrustpilotData()

