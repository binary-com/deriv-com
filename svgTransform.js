// this file helps jest to load svg assets

module.exports = {
    process() {
        return {
            code: `module.exports = {};`,
        }
    },
    getCacheKey() {
        return 'svgTransform'
    },
}
