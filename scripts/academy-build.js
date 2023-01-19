const { exec } = require('child_process')
const fs = require('fs')
const glob = require('glob')

const relative_path = 'academy'
const existing_path = 'https://derivacademyofficial.wpcomstaging.com'

const logError = (err) => {
    console.log(`\x1b[31m${err}`)
}

const getDirectories = function (src, callback) {
    glob(src + '/**/*', callback)
}

exec('cpx "web/academy/**/*" public/academy', (err) => {
    if (err) {
        logError(err)
    }

    getDirectories('public/academy', function (err, res) {
        if (err) {
            logError(err)
        } else {
            const files = res

            try {
                files.forEach((file) => {
                    console.log(`handling: ${file}`)

                    fs.readFile(file, 'utf8', function (err, data) {
                        if (err) {
                            return logError(err)
                        }

                        const result = data.replace(new RegExp(existing_path, 'g'), relative_path)

                        fs.writeFile(file, result, 'utf8', function (err) {
                            if (err) return logError(err)
                        })
                    })
                })
            } catch (error) {
                logError(error)
            }
        }
    })
})
