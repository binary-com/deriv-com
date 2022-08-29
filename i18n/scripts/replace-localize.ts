import { find_and_replace_glob_patterns } from '../utils'

const find_localize_regex = new RegExp(/(localize)(\()(\s*?)(['`"])(\s*)(.*?)(\s*)(\4)(,?)(\s*)(\))/g)
const replace_localize_pattern = '$1$2$3$4_t_$5$6$7_t_$8$9$10$11'

find_and_replace_glob_patterns(find_localize_regex, replace_localize_pattern)
