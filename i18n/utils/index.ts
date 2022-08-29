import fs from 'fs'
import glob from 'glob'
import { FILE_ENCODING, TRANSLATABLE_BASE_PATH, TRANSLATABLE_GLOB_PATTERNS } from '../constants'

/**
 * @description finds and replaces regex pattern with the provided substitution pattern
 * @param file_path {string} the file_path
 * @param regex {RegExp} the Regular Expression you wanna test against
 * @param replace_pattern {string} the Substitution Pattern you wanna use based on the provided RegEx
 */
export const replace_file_content = (file_path: string, regex: RegExp, replace_pattern: string) => {
    const file = fs.readFileSync(file_path, FILE_ENCODING)
    const result = file.replace(regex, replace_pattern)
    fs.writeFileSync(file_path, result)
}

/**
 * @description finds all the occurences of the provided RegEx in all files ( TranslateAbleGlobPatterns ) and replaces them with the provided Substitution pattern
 * @param regex {RegExp} the Regular Expression you wanna test against
 * @param replace_pattern {string} the Substitution Pattern you wanna use based on the provided RegEx
 */
export const find_and_replace_glob_patterns = (regex: RegExp, replace_pattern: string) => {
    const found_files: string[] = []
    // Find all file listed in `TRANSLATABLE_GLOB_PATTERNS`
    for (const globPattern of TRANSLATABLE_GLOB_PATTERNS) {
        let current_glob_found_files = glob.sync(`${TRANSLATABLE_BASE_PATH}${globPattern}`)
        current_glob_found_files = current_glob_found_files.filter(
            (path) => path.indexOf('__tests__') === -1,
        )
        found_files.push(...current_glob_found_files)
    }
    // Iterate over files and replace the old translatable strings with the new generic translatable string pattern
    for (const filePath of found_files) {
        try {
            replace_file_content(filePath, regex, replace_pattern)
        } catch (e) {
            throw new Error(e)
        }
    }
}
