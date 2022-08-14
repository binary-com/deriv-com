/* eslint-disable  */
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { str as crc32 } from 'crc-32'
import { TranslateAbleBasePath, TranslateAbleGlobPatters } from '../constants'
import { KeyValueRefsType } from '../types'

const getHashedValue = (value: string) => `${crc32(value)}`

const regex = new RegExp(/(_t_)(?<pure_text>[^)]+)(_t_)/g)
const foundFilePaths: string[] = []
const defaults: KeyValueRefsType = {}
const derivedKeys = {}
let tempHashKey = ""

function findAndReplace() {
    // Find all file types listed in `globs`
    for (let i = 0; i < TranslateAbleGlobPatters.length; i++) {
        let filesFound = glob.sync(`${TranslateAbleBasePath}${TranslateAbleGlobPatters[i]}`)
        filesFound = filesFound.filter((path) => path.indexOf('__tests__') === -1)
        foundFilePaths.push(...filesFound)
    }
    for (let i = 0; i < foundFilePaths.length; i++) {
        try {
            const file = fs.readFileSync(foundFilePaths[i], 'utf8')
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
                defaults[tempHashKey] = pureText      
                derivedKeys[result[0]] = tempHashKey          
                result = regex.exec(file)
            }
        } catch (e) {
            console.log(e)
        }
    }
    fs.writeFileSync(path.resolve('./i18n/keys/defaults.json'), JSON.stringify(defaults, null, '\t'))
    fs.writeFileSync(
        path.resolve('./i18n/keys/derived.json'),
        JSON.stringify(derivedKeys, null, '\t'),
    )
}
findAndReplace()
