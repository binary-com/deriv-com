import { FindAndReplaceGlobPatterns } from '../utils'

const regex = new RegExp(/translate_text=(['"])(.*?)(\1)/gm)
const replacePattern = 'translate_text=$1_t_$2_t_$3'

FindAndReplaceGlobPatterns(regex, replacePattern)
