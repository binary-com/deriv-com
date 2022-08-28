/* eslint-disable  */
// disable-translation
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { str as crc32 } from 'crc-32'
import { TranslateAbleBasePath, TranslateAbleGlobPatters } from '../constants'
import { KeyValueRefsType } from '../types'
import { program } from "commander";
import translated_keys from "../../src/translations/ach.json"

program
    .version('0.1.0')
    .description('Build translation source.')
    .option('-v, --verbose', 'Displays the list of paths to be compiled')
    .parse(process.argv)


const getHashedValue = (value: string) => `${crc32(value)}`
const action = process.argv[2]


const regex = new RegExp(/(_t_)(?<pure_text>.*?)(_t_)/g)
const foundFilePaths: string[] = []
const messages: KeyValueRefsType = {}
const derivedKeys = {}
let tempHashKey = ""

function extractTranslations() {
    // Find all file types listed in `globs`
    try {
        for (let i = 0; i < TranslateAbleGlobPatters.length; i++) {
            let filesFound = glob.sync(`${TranslateAbleBasePath}${TranslateAbleGlobPatters[i]}`)
            filesFound = filesFound.filter((path) => path.indexOf('__tests__') === -1)
            foundFilePaths.push(...filesFound)
        }
        for (let i = 0; i < foundFilePaths.length; i++) {
            const file = fs.readFileSync(foundFilePaths[i], 'utf8')
            if (!file.includes("disable-translation")) {
                let result = regex.exec(file)
                while (result != null) {
                    const pureText = result.groups.pure_text
                    // remove all special characters
                    let key = pureText.replace(/[`~!@#$^&*()_|+\-=?;:'",‘’.<>\{\}\[\]\\\/””–]/g, '')
                    // replace multiple spaces with single space
                    key = key.replace(/  +/g, ' ')
                    // replace space with _
                    key = key.replace(/ /g, '_')
                    tempHashKey = getHashedValue(pureText);
                    messages[tempHashKey] = pureText
                    derivedKeys[result[0]] = tempHashKey
                    result = regex.exec(file)
                }
            }
        }
        if (action === "show-untranslated") {
            const untranslated = []
            const messages_keys = Object.keys(messages);
            for (let i = 0; i < messages_keys.length; i++) {
                const key = messages_keys[i];
                if (!translated_keys[key]) {
                    untranslated.push({
                        key,
                        string: messages[i]
                    })
                }
            }
            console.log(`Untranslated: ${untranslated.length}`)
            console.log(untranslated)
            return false;
        }
        fs.writeFileSync(path.resolve(__dirname, '../../crowdin/messages.json'), JSON.stringify(messages, null, 2))
        fs.writeFileSync(
            path.resolve(__dirname, '../../crowdin/derived.json'),
            JSON.stringify(derivedKeys, null, 2),
        )
    } catch (error) {
        console.error(error);
    }
}
extractTranslations()
