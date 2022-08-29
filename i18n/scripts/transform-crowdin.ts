import fs from 'fs'
import path from 'path'
import glob from 'glob'
import { KeyValueRefsType } from '../types'
import { FILE_ENCODING, TRANSLATIONS_GLOB_PATTERN } from '../constants'

type translationType = {
    filename: string
    translation: KeyValueRefsType
}

const translations: translationType[] = []

const messages_keys_path = path.resolve(__dirname, '../../crowdin/messages.json');
const derived_keys_path = path.resolve(__dirname, '../../crowdin/derived.json');

// default lang ( EN ) translations
const default_translation_file = fs.readFileSync(messages_keys_path, FILE_ENCODING)
const default_translation_object = JSON.parse(default_translation_file)

const derived_keys_file = fs.readFileSync(derived_keys_path, FILE_ENCODING);
const derived_keys_object = JSON.parse(derived_keys_file);
const derived_keys = Object.keys(derived_keys_object);

let foundFiles = glob.sync(TRANSLATIONS_GLOB_PATTERN)
foundFiles = foundFiles.filter((path) => path.indexOf('ach.json') === -1)

for (let index = 0; index < foundFiles.length; index++) {
    const current_lang_file_path = foundFiles[index]
    const current_lang_file_name = path.parse(foundFiles[index]).base
    const current_file = fs.readFileSync(current_lang_file_path, FILE_ENCODING)
    const current_lang_translation_object = JSON.parse(current_file)
    const current_translation: translationType = { filename: current_lang_file_name, translation: {} }

    for (const translationKey of derived_keys) {
        current_translation.translation[translationKey] =
            current_lang_translation_object[derived_keys_object[translationKey]] ||
            default_translation_object[derived_keys_object[translationKey]]
    }

    translations.push(current_translation)
}

for (const lang_translation of translations) {
    fs.writeFileSync(
        `./i18n/translations/${lang_translation.filename}`,
        JSON.stringify(lang_translation.translation, null, '\t'),
    )
}
