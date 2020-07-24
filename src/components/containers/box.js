import styled, { css } from 'styled-components'
import { Margins, Paddings } from '../../themes/function'
import { size } from 'themes/device'

export const mediaqueries = Object.keys(size)
    .sort(function (a, b) {
        return size[b] - size[a]
    })
    .reduce((accumulator, label) => {
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

const baseStyles = ({ m, mt, ml, mr, mb, p, pt, pl, pr, pb }) => css`
    ${Margins({ m, mt, ml, mr, mb })}
    ${Paddings({ p, pt, pl, pr, pb })}
`

const responsiveStyles = generateResponsiveStyles(baseStyles)

const Box = styled.div`
    width: ${(props) => (props.width ? props.width : '')};
    height: ${(props) => (props.height ? props.height : '')};
    min-height: ${(props) => (props.min_height ? props.min_height : '')};
    max-width: ${(props) => (props.max_width ? props.max_width : '')};
    position: ${(props) => (props.position ? props.position : '')};
    background: ${(props) => (props.background || props.bg ? props.background || props.bg : '')};
    ${baseStyles}
    ${responsiveStyles}
`
export default Box
