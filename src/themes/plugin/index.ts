import { transformBorderRadius } from './border-radius'
import { transformMargin } from './margin'
import { transformPadding } from './padding'

const STYLIS_PROPERTY_CONTEXT = 1

const transformCSSProperties = (content: string) => {
    const [prop, value] = content.split(':')
    if (!value) {
        return
    }
    switch (prop) {
        case 'padding':
            return transformPadding(String(value))
        case 'padding-left':
            return transformProperty('padding-inline-start', value)
        case 'padding-right':
            return transformProperty('padding-inline-end', value)
        case 'padding-top':
            return transformProperty('padding-block-start', value)
        case 'padding-bottom':
            return transformProperty('padding-block-end', value)
        case 'margin':
            return transformMargin(String(value))
        case 'margin-left':
            return transformProperty('margin-inline-start', value)
        case 'margin-right':
            return transformProperty('margin-inline-end', value)
        case 'margin-top':
            return transformProperty('margin-block-start', value)
        case 'margin-bottom':
            return transformProperty('margin-block-end', value)
        case 'height':
            return transformProperty('block-size', value)
        case 'min-height':
            return transformProperty('min-block-size', value)
        case 'max-height':
            return transformProperty('max-block-size', value)
        case 'width':
            return transformProperty('inline-size', value)
        case 'min-width':
            return transformProperty('min-inline-size', value)
        case 'max-width':
            return transformProperty('max-inline-size', value)
        case 'top':
            return transformProperty('inset-block-start', value)
        case 'right':
            return transformProperty('inset-inline-end', value)
        case 'left':
            return transformProperty('inset-inline-start', value)
        case 'border-radius':
            return transformBorderRadius(String(value))
        case 'bottom':
            return transformProperty('inset-block-end', value)
        case 'border-left':
            return transformProperty('border-inline-start', value)
        case 'border-right':
            return transformProperty('border-inline-end', value)
        case 'border-top':
            return transformProperty('border-block-start', value)
        case 'border-bottom':
            return transformProperty('border-block-end', value)
        case 'border-bottom-left-radius':
            return transformProperty('border-end-start-radius', value)
        case 'border-bottom-right-radius':
            return transformProperty('border-end-end-radius', value)
        case 'border-top-left-radius':
            return transformProperty('border-start-start-radius', value)
        case 'border-top-right-radius':
            return transformProperty('border-start-end-radius', value)

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
export const plugin = (context, content) => {
    // -2 post-process context :  post processed context, before the compiled css output is returned
    // -1 preparation context : preparation context, before the compiler starts
    // 0 newline context : after every newline
    // 1 property context :  on a property declaration ex. color: red;
    // 2 selector block context : after a selector block of css has been processed ex. .foo {color:red;}
    // 3 @at-rule block context :  after a @at-rule block of css has been processed ex. @media {h1{color:red;}}
    if (context === STYLIS_PROPERTY_CONTEXT) {
        return transformCSSProperties(content)
    }
}

const transformProperty = (logicalName: string, value: string) => {
    if (value) {
        return `${logicalName}:${value}`
    }
}
