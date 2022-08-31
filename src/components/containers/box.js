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

const baseStyles = ({
    m,
    mt,
    ml,
    mr,
    mb,
    p,
    pt,
    pl,
    pr,
    pb,
    min_width,
    max_width,
    min_height,
    max_height,
    width,
    height,
}) => css`
    min-inline-size: ${min_width};
    max-inline-size: ${max_width};
    min-block-size: ${min_height};
    max-block-size: ${max_height};
    inline-size: ${width};
    block-size: ${height};
    ${Margins({ m, mt, ml, mr, mb })}
    ${Paddings({ p, pt, pl, pr, pb })}
`

const responsiveStyles = generateResponsiveStyles(baseStyles)

const Box = styled.div`
    inline-size: ${(props) => (props.width ? props.width : '')};
    block-size: ${(props) => (props.height ? props.height : '')};
    min-block-size: ${(props) => (props.min_height ? props.min_height : '')};
    max-inline-size: ${(props) => (props.max_width ? props.max_width : '')};
    position: ${(props) => (props.position ? props.position : '')};
    background: ${(props) => (props.background || props.bg ? props.background || props.bg : '')};
    ${baseStyles}
    ${responsiveStyles}
`
export default Box
