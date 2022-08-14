import { FindAndReplaceGlobPatterns } from '../utils'

const regex = new RegExp(/translate_text=(['"])(.*?)(['"])/g)
const replacePattern = 'translate_text=$1__translate__$2__translate__$3'

FindAndReplaceGlobPatterns(regex, replacePattern)
