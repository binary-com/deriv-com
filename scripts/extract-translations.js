#!/usr/bin/env node
/* eslint-disable  */
const path = require('path')
const program = require('commander')
const crc32 = require('crc-32').str
const fs = require('fs')
const glob = require('glob')

program
    .version('0.1.0')
    .description('Build translation source.')
    .option('-v, --verbose', 'Displays the list of paths to be compiled')
    .parse(process.argv)

/** *********************************************
 * Common
 */
const globs = ['**/*.js']

const getKeyHash = string => crc32(string)


/** **********************************************
 * Compile
 */
extractTranslations();

function extractTranslations() {
    (async () => {
        try {
            const file_paths = [];
            const messages = [];
            /*
            (['"])                    = the capturing group of either single quotes or double quotes, at the end must be following of \_your_capturing_group_no
            (.*?)                     = is capturing group match all characters, unlimited characters
            \_your_capturing_group_no = is matching capturing group, for e.g. `\1` means that it will match exactly the first capturing group
            \s*                       = it matches any whitespace characters until unlimited times in our case it used to catch `\n` or newline
            /gs                       = `g` means it will take all of the matches, `s` means it matches even in newline
            */
            const i18n_marker = new RegExp(/translate_text=(['"])(.*?)\1|localize\(\s*?(['"])\s*(.*?)\s*\3/gs);
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
                    let result = i18n_marker.exec(file);
                    while (result != null) {
                        const extracted = result[2] || result[4]; // If it captures `text=` then it will be index 2, else its index 4 which captures `localize`
                        messages.push(extracted.replace(/\\/g, ''));
                        result = i18n_marker.exec(file);
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            // Hash the messages and set the key-value pair for json
            for (let i = 0; i < messages.length; i++) {
                messages_json[getKeyHash(messages[i])] = messages[i];
            }

            // Add to messages.json
            fs.writeFileSync(
                path.resolve(__dirname, '../crowdin/messages.json'),
                JSON.stringify(messages_json),
                'utf8',
                (err) => console.log(err)
            );
        } catch (e) {
            console.error(e);
        }
    })()
}
