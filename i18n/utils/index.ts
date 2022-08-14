import fs from 'fs'
import glob from 'glob'
import { FILE_ENCODING, TranslateAbleBasePath, TranslateAbleGlobPatters } from '../constants'

/**
 * @description finds and replaces regex pattern with the provided substitution pattern
 * @param filePath {string} the filepath
 * @param regex {RegExp} the Regular Expression you wanna test against
 * @param replacePattern {string} the Substitution Pattern you wanna use based on the provided RegEx
 */
export const ReplaceFileContent = (filePath: string, regex: RegExp, replacePattern: string) => {
    const file = fs.readFileSync(filePath, FILE_ENCODING)
    const result = file.replace(regex, replacePattern)
    fs.writeFileSync(filePath, result)
}

/**
 * @description finds all the occurences of the provided RegEx in all files ( TranslateAbleGlobPatterns ) and replaces them with the provided Substitution pattern
 * @param regex {RegExp} the Regular Expression you wanna test against
 * @param replacePattern {string} the Substitution Pattern you wanna use based on the provided RegEx
 */
export const FindAndReplaceGlobPatterns = (regex: RegExp, replacePattern: string) => {
    const foundFiles: string[] = []
    // Find all file listed in `TranslateAbleGlobPatters`
    for (const globPattern of TranslateAbleGlobPatters) {
        let currentGlobFoundFiles = glob.sync(`${TranslateAbleBasePath}${globPattern}`)
        currentGlobFoundFiles = currentGlobFoundFiles.filter(
            (path) => path.indexOf('__tests__') === -1,
        )
        foundFiles.push(...currentGlobFoundFiles)
    }
    // Iterate over files and replace the old translatable strings with the new generic translatable string pattern
    for (const filePath of foundFiles) {
        try {
            ReplaceFileContent(filePath, regex, replacePattern)
        } catch (e) {
            throw new Error(e)
        }
    }
}
