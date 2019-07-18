import { css } from 'styled-components'

export const Margins = css`
    ${props => {
        let margins = ''
        if (props.margin) {
            Object.keys(props.margin).forEach(margin => {
                switch (margin) {
                    case 'vertical':
                        margins += `margin-top: ${props.margin[margin]};`
                        margins += `margin-bottom: ${props.margin[margin]};`
                        break
                    case 'horizontal':
                        margins += `margin-left: ${props.margin[margin]};`
                        margins += `margin-right: ${props.margin[margin]};`
                        break
                    default:
                        margins += `margin-${margin}: ${props.margin[margin]};`
                }
            })
        }

        return margins
    }}
`

export const Paddings = css`
    ${props => {
        let paddings = ''
        if (props.padding) {
            Object.keys(props.padding).forEach(padding => {
                switch (padding) {
                    case 'vertical':
                        paddings += `padding-top: ${props.padding[padding]};`
                        paddings += `padding-bottom: ${props.padding[padding]};`
                        break
                    case 'horizontal':
                        paddings += `padding-left: ${props.padding[padding]};`
                        paddings += `padding-right: ${props.padding[padding]};`
                        break
                    default:
                        paddings += `padding-${padding}: ${props.padding[padding]};`
                }
            })
        }

        return paddings
    }}
`
