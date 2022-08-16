import { FindAndReplaceGlobPatterns } from '../utils'

// const regex = new RegExp(/(localize)(\()([\s\t\n]*)(['"])([^)]+)(['"])(,?)([\s\t\n]*)(\))/g)
const regex = new RegExp(/(localize)(\()(\s*?)(['`"])(\s*)(.*?)(\s*)(\4)(,?)(\s*)(\))/g)

// const replacePattern = '$1$2$3$4_t_$5_t_$6$7$8$9'
const replacePattern = '$1$2$3$4_t_$5$6$7_t_$8$9$10$11'

FindAndReplaceGlobPatterns(regex, replacePattern)
