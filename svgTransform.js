// this file helps jest to load svg assets

module.exports = {
    process() {
        return 'module.exports = {};'
    },
    getCacheKey() {
        return 'svgTransform'
    },
}
