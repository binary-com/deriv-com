import { FindAndReplaceGlobPatterns } from '../utils'

const regex = new RegExp(/(localize)(\()([\s\t\n]*)(['"])([^)]+)(['"])(,?)([\s\t\n]*)(\))/g)
const replacePattern = '$1$2$3$4_t_$5_t_$6$7$8$9'

FindAndReplaceGlobPatterns(regex, replacePattern)
