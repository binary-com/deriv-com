#!/usr/bin/env node
/* eslint-disable  */
/* disable-translation */
const path = require('path')
const program = require('commander')
const crc32 = require('crc-32').str
const fs = require('fs')
const glob = require('glob')
const translated_keys = require('../src/translations/ach.json')
const DISABLE_TRANSLATION = 'disable-translation'



/*
(_t_)                     = the capturing group for prefix "_t_"
(?<pure_text>.*?)         = the capturing group for the actual string ( this is what we use to create the key )
(_t_)                     = the capturing group for postfix "_t_"
*/
const new_i18n_marker = new RegExp(/(_t_)(?<pure_text>.*?)(_t_)/g)
/*
(['"])                    = the capturing group of either single quotes or double quotes, at the end must be following of \_your_capturing_group_no
(.*?)                     = is capturing group match all characters, unlimited characters
\_your_capturing_group_no = is matching capturing group, for e.g. `\1` means that it will match exactly the first capturing group
\s*                       = it matches any whitespace characters until unlimited times in our case it used to catch `\n` or newline
/gs                       = `g` means it will take all of the matches, `s` means it matches even in newline
*/
const old_i18n_marker = new RegExp(/translate_text=(['"])(.*?)\1|localize\(\s*?(['"])\s*(.*?)\s*\3/gs);

program
    .version('0.1.0')
    .description('Build translation source.')
    .option('-v, --verbose', 'Displays the list of paths to be compiled')
    .parse(process.argv)

/** *********************************************
 * Common
 */
const globs = ['**/*.js', '**/*.ts', '**/*.tsx']

const getKeyHash = string => crc32(string)

const action = process.argv[2]


const old_find_keys = (file) => {
    const keys = [];
    let result = old_i18n_marker.exec(file);
    while (result != null) {
        const extracted = result[2] || result[4]; // If it captures `text=` then it will be index 2, else its index 4 which captures `localize`
        keys.push(extracted.replace(/\\/g, ''));
        result = old_i18n_marker.exec(file);
    }
    return keys;
}

const new_find_keys = (file) => {
    const keys = []
    let result = new_i18n_marker.exec(file)
    while (result != null) {
        const pure_text = result.groups.pure_text
        keys.push(pure_text.replace(/\\/g, ''))
        result = new_i18n_marker.exec(file)
    }
    return keys;
}

/** **********************************************
 * Compile
 */
extractTranslations();

function extractTranslations() {
    (async () => {
        try {
            const file_paths = [];
            const messages = [];
            const messages_json = {};

            // Find all file types listed in `globs`
            for (let i = 0; i < globs.length; i++) {
                let filesFound = glob.sync(`../src/${globs[i]}`);
                filesFound = filesFound.filter(path => path.indexOf('__tests__') === -1);
                file_paths.push(...filesFound);
            }
            // Iterate over files and extract all strings from the i18n marker
            for (let i = 0; i < file_paths.length; i++) {
                if (program.verbose) {
                    console.log(file_paths[i]);
                }

                try {
                    const file = fs.readFileSync(file_paths[i], 'utf8');
                    if (!file.includes(DISABLE_TRANSLATION)) {
                        messages.push(...old_find_keys(file));
                        messages.push(...new_find_keys(file))
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            const untranslated = []
            // Hash the messages and set the key-value pair for json
            for (let i = 0; i < messages.length; i++) {

                const key = getKeyHash(messages[i])
                messages_json[key] = messages[i];

                if (!translated_keys[key]) {
                    untranslated.push({
                        key,
                        string: messages[i]
                    })
                }
            }


            if (action === "show-untranslated") {
                console.log(`Untranslated: ${untranslated.length}`)
                console.log(untranslated)
                return false
            }

            // Add to messages.json
            fs.writeFileSync(
                path.resolve(__dirname, '../crowdin/messages.json'),
                JSON.stringify(messages_json, null, 2),
                'utf8',
                (err) => console.log(err)
            );
        } catch (e) {
            console.error(e);
        }
    })()
}
