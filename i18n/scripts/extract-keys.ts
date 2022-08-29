/* eslint-disable  */
// disable-translation
import fs from 'fs'
import glob from 'glob'
import path from 'path'
import { str as crc32 } from 'crc-32'
import { DISABLE_TRANSLATION, IGNORE_GLOB_PATTERNS, TRANSLATABLE_BASE_PATH, TRANSLATABLE_GLOB_PATTERNS } from '../constants'
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


const key_extraction_regex = new RegExp(/(_t_)(?<pure_text>.*?)(_t_)/g)
const found_files_path: string[] = []
const messages: KeyValueRefsType = {}
const derived_keys = {}
let temp_hash_key = ""


const special_chars_regex = /[`~!@#$^&*()_|+\-=?;:'",‘’.<>\{\}\[\]\\\/””–]/g;

function extractTranslations() {
    // Find all file types listed in `globs`
    try {
        for (let i = 0; i < TRANSLATABLE_GLOB_PATTERNS.length; i++) {
            const files_found = glob.sync(`${TRANSLATABLE_BASE_PATH}${TRANSLATABLE_GLOB_PATTERNS[i]}`, { ignore: IGNORE_GLOB_PATTERNS })
            found_files_path.push(...files_found)
        }
        for (let i = 0; i < found_files_path.length; i++) {
            const file = fs.readFileSync(found_files_path[i], 'utf8')
            if (!file.includes(DISABLE_TRANSLATION)) {
                let result = key_extraction_regex.exec(file)
                while (result != null) {
                    const pure_text = result.groups.pure_text
                    // remove all special characters
                    let key = pure_text.replace(special_chars_regex, '')
                    // replace one or many spaces with _
                    key = key.replace(/ \s+/g, '_')
                    temp_hash_key = getHashedValue(pure_text);
                    messages[temp_hash_key] = pure_text
                    derived_keys[result[0]] = temp_hash_key
                    result = key_extraction_regex.exec(file)
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
            JSON.stringify(derived_keys, null, 2),
        )
    } catch (error) {
        console.error(error);
    }
}
extractTranslations()
