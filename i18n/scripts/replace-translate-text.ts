import { find_and_replace_glob_patterns } from '../utils'

const find_translate_text_regex = new RegExp(/translate_text=(['`"])(.*?)(\1)/gm)
const translate_text_replace_pattern = 'translate_text=$1_t_$2_t_$3'

find_and_replace_glob_patterns(find_translate_text_regex, translate_text_replace_pattern)
