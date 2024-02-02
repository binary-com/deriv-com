const fs = require('fs')
const path = require('path')
require('dotenv').config();

const fetchTrustpilotData = async () => {
    const fileDir = path.resolve(__dirname, '../src/data')
    const fileName = 'trustpilot.json'
    const filePath = path.join(fileDir, fileName)

    const startTime = Date.now()
 
    try {
        const appName = 'deriv.com'
        const apiKey = process.env.GATSBY_TRUSTPILOT_API_KEY
     
        if (!appName || !apiKey) {
            throw new Error('Trustpilot app name or API key is missing')
        }

        const url = `https://api.trustpilot.com/v1/business-units/find?name=${appName}&apikey=${apiKey}`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`)
        }

        const result = await response.json()

        const endTime = Date.now()
        const timeSpentInSeconds = (endTime - startTime) / 1000
        
        console.log(
            `\x1b[32msuccess\x1b[0m trustpilot data fetching finished - ${timeSpentInSeconds}s`,
        )

        const tpData = {
            stars: result.score?.stars || 0,
            trustScore: result.score?.trustScore || 0,
            numberOfReviews:
                result.numberOfReviews?.total.toLocaleString() || '',
        }

        const fileContent = JSON.stringify(tpData,null,2)

        fs.writeFile(filePath, fileContent, (error) => {
            if (error) {
              // Handle errors
              console.error('Error writing to the file:', error);
            }

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading the file: ${err}`);
                    return;
                }

                try {
                    const jsonData = JSON.parse(data);
                    console.log('Trust Pilot Data:', jsonData);
                } catch (error) {
                    console.error(`Error parsing JSON: ${error}`);
                }
            });
          });
       
    } catch (error) {
        console.log(error)
    }
}

fetchTrustpilotData()

