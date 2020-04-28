import styled, { css } from 'styled-components'
import { Margins, Paddings } from 'themes/function'
import { size } from 'themes/device'

export const mediaqueries = Object.keys(size).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)};
        }
    `
    return accumulator
}, {})

export const generateResponsiveStyles = (stylesGenerator) => (props) => {
    return Object.keys(mediaqueries).reduce((rules, mq) => {
        if (!props[mq]) return rules
        const styles = mediaqueries[mq]`        
        ${stylesGenerator(props[mq])}
        `
        return [...rules, styles]
    }, [])
}

const baseStyles = ({ top, left, right, bottom }) => css`
    margin-top: ${top ? top + 'px' : null};
    margin-right: ${right ? right + 'px' : null};
    margin-bottom: ${bottom ? bottom + 'px' : null};
    margin-left: ${left ? left + 'px' : null};
`
const responsiveStyles = generateResponsiveStyles(baseStyles)

const Box = styled.div`
    width: ${(props) => (props.width ? props.width : '')};
    height: ${(props) => (props.height ? props.height : '')};
    max-width: ${(props) => (props.max_width ? props.max_width : '')};
    position: ${(props) => (props.position ? props.position : '')};
    background: ${(props) => (props.background || props.bg ? props.background || props.bg : '')};
    ${Margins}
    ${Paddings}
    ${baseStyles}
    ${responsiveStyles}
`

export default Box
