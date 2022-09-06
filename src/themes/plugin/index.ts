/* eslint-disable no-case-declarations */
import { handleMargin } from './margin'
import { handlePadding } from './padding'

const handle = (content: string) => {
    const [prop, value] = content.split(':')
    if (!value) {
        return
    }
    switch (prop) {
        case 'padding-left':
            return transformProperty('padding-inline-start', value, content)
        case 'padding-right':
            return transformProperty('padding-inline-end', value, content)
        case 'padding-top':
            return transformProperty('padding-block-start', value, content)
        case 'padding-bottom':
            return transformProperty('padding-block-end', value, content)
        case 'margin-left':
            return transformProperty('margin-inline-start', value, content)
        case 'margin-right':
            return transformProperty('margin-inline-end', value, content)
        case 'margin-top':
            return transformProperty('margin-block-start', value, content)
        case 'margin-bottom':
            return transformProperty('margin-block-end', value, content)
        case 'padding':
            const paddings = handlePadding(String(value))
            return paddings
        case 'margin':
            const margins = handleMargin(String(value))
            return margins
        case 'height':
            return transformProperty('block-size', value, content)
        case 'min-height':
            return transformProperty('min-block-size', value, content)
        case 'max-height':
            return transformProperty('max-block-size', value, content)
        case 'width':
            return transformProperty('inline-size', value, content)
        case 'min-width':
            return transformProperty('min-inline-size', value, content)
        case 'max-width':
            return transformProperty('max-inline-size', value, content)
        case 'top':
            return transformProperty('inset-block-start', value, content)
        case 'right':
            return transformProperty('inset-inline-end', value, content)
        case 'left':
            return transformProperty('inset-inline-start', value, content)
        case 'bottom':
            return transformProperty('inset-block-end', value, content)
        case 'border-left':
            return transformProperty('border-inline-start', value, content)
        case 'border-right':
            return transformProperty('border-inline-end', value, content)
        case 'border-top':
            return transformProperty('border-block-start', value, content)
        case 'border-bottom':
            return transformProperty('border-block-end', value, content)
        default:
            return content
    }
}
/**
 * plugin
 *
 * @param  {number} context
 * @param  {Array<string>} selector
 * @param  {Array<string>} parent
 * @param  {string} content
 * @param  {number} line
 * @param  {number} column
 * @param  {number} length
 * @return {(string|void)?}
 */
export const plugin = (context, content, selectors, parent, line, column, length) => {
    switch (context) {
        case 1:
            console.log(context)
            console.log('content: ')
            console.log(content)
            return handle(content)

        default:
            break
    }
}

const transformProperty = (logicalName: string, value: string, content: string) => {
    if (value) {
        const result = `${logicalName}:${value}`
        return result
    }

    // if (!value) {
    //     return content
    // }
    // const result = `${logicalName}:${value}`
    // return result
}
