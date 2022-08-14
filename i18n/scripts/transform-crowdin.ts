import fs from 'fs'
import path from 'path'
import glob from 'glob'

type keyRefType = {
    [key: string]: string
}
type translationType = {
    filename: string
    translation: keyRefType
}
const FILE_ENCODING = 'utf-8'
const TRANSLATIONS_GLOB_PATTERN = './src/translations/*.json'
const translations: translationType[] = []

// default lang ( EN ) translations
// fs.copyFileSync('./keyRefs/defaults.json', 'pocTranslations/en.json')
const defaultTranslationFile = fs.readFileSync('keyRefs/defaults.json', FILE_ENCODING)
const defaultTranslationObject = JSON.parse(defaultTranslationFile)

// wrap it in try / catch later
const baseKeyRefsFile = fs.readFileSync('keyRefs/base.json', FILE_ENCODING)
const baseKeyRefsObject = JSON.parse(baseKeyRefsFile)
const hashedKeys: string[] = Object.keys(baseKeyRefsObject)

let foundFiles = glob.sync(TRANSLATIONS_GLOB_PATTERN)
foundFiles = foundFiles.filter((path) => path.indexOf('ach.json') === -1)

for (let index = 0; index < foundFiles.length; index++) {
    const currentLangFilePath = foundFiles[index]
    const currentLangFileName = path.parse(foundFiles[index]).base

    const currentFile = fs.readFileSync(currentLangFilePath, FILE_ENCODING)
    const currentLangTranslationObject = JSON.parse(currentFile)

    const currentTranslation: translationType = { filename: currentLangFileName, translation: {} }
    for (const translationKey of hashedKeys) {
        currentTranslation.translation[baseKeyRefsObject[translationKey]] =
            currentLangTranslationObject[translationKey] ||
            defaultTranslationObject[baseKeyRefsObject[translationKey]]
    }
    translations.push(currentTranslation)
}

for (const langTranslation of translations) {
    fs.writeFileSync(
        `./i18n/translations/${langTranslation.filename}`,
        JSON.stringify(langTranslation.translation, null, '\t'),
    )
}
