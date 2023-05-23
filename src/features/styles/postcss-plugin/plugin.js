const postcss = require('postcss')
const ClassNameCollector = require('./class-name-collector')

function getSingleton() {
    const key = 'ts-classname-collector'
    const anyGlobal = global

    let instance = anyGlobal[key]

    if (!instance) {
        instance = anyGlobal[key] = new ClassNameCollector({
            dest: 'src/classnames.d.ts',
        })
    }

    return instance
}

function createPlugin(collector) {
    return postcss.plugin('postcss-ts-classnames', (_userOptions) => {
        const userOptions = _userOptions

        if (userOptions && userOptions.dest) {
            collector.dest = userOptions.dest
        }
        if (userOptions && userOptions.isModule) {
            collector.isModule = userOptions.isModule
        }
        if (userOptions && userOptions.exportAsDefault) {
            collector.exportAsDefault = userOptions.exportAsDefault
        }

        return (root) => {
            collector.process(root)
        }
    })
}
module.exports = createPlugin(getSingleton())
