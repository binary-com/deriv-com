#!/usr/bin/env node
/* eslint-disable  */
const path = require("path");
const program = require("commander");
const crc32 = require("crc-32").str;
const fs = require("fs");
const glob = require("glob");
const { exec } = require("child_process");
const data = fs.readFileSync("./../src/translations/ach.json");
const langs = JSON.parse(data);

exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
  if (err) {
    // handle your error
  }

  if (typeof stdout === "string") {
    const branch_name = stdout.trim()

    /** *********************************************
     * Common
     */
    const globs = ["**/*.js", "**/*.ts", "**/*.tsx"];

    const getKeyHash = (string) => crc32(string);

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
          const i18n_marker = new RegExp(
            /translate_text=(['"])(.*?)\1|localize\(\s*?(['"])\s*(.*?)\s*\3/gs
          );
         

          // Find all file types listed in `globs`
          for (let i = 0; i < globs.length; i++) {
            let filesFound = glob.sync(`../src/${globs[i]}`);
            filesFound = filesFound.filter(
              (path) => path.indexOf("__tests__") === -1
            );
            file_paths.push(...filesFound);
          }
          // Iterate over files and extract all strings from the i18n marker
          for (let i = 0; i < file_paths.length; i++) {
            if (program.verbose) {
              console.log(file_paths[i]);
            }

            try {
              const file = fs.readFileSync(file_paths[i], "utf8");
              let result = i18n_marker.exec(file);
              while (result != null) {
                const extracted = result[2] || result[4]; // If it captures `text=` then it will be index 2, else its index 4 which captures `localize`
                messages.push(extracted.replace(/\\/g, ""));
                result = i18n_marker.exec(file);
              }
            } catch (e) {
              console.log(e);
            }
          }

          // Localization File Content Generator
          let locale_content = `/* eslint-disable  */ \n  new_texts = [\n`

          // Hash the messages and set the key-value pair for json
          for (let i = 0; i < messages.length; i++) {
            const hashed_value = getKeyHash(messages[i]);
            const message = messages[i];

            // Newly added texts are included in a new json file to be pushed to crowdin branch
            if (!langs[hashed_value]) {
                locale_content += `<Localize translate_text="${message}"/>,\n`
            }
          }

          locale_content += '\n]'

          // Create Crowdin folder if not existing
          const dir = '../src/crowdin/';
          if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
          }

          // Generate new list for crowdiwn translations 
          fs.writeFileSync(
              path.resolve(__dirname, `${dir}${branch_name}.js`),
              locale_content,
              'utf8',
              (err) => console.log(err)
          );
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }
});
