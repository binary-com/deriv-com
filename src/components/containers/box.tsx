import styled, { css } from 'styled-components'
import { Margins, MarginsType, Paddings, PaddingsType } from '../../themes/function'
import device, { size } from 'themes/device'

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

export type BaseStyleType = {
    m?: string
    mt?: string
    ml?: string
    mr?: string
    mb?: string
    p?: string
    pt?: string
    pl?: string
    pr?: string
    pb?: string
    jc?: string
    fd?: string
    ai?: string
    min_width?: string
    max_width?: string
    min_height?: string
    max_height?: string
    width?: string
    height?: string
} & MarginsType &
    PaddingsType

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
}: BaseStyleType) => css`
    min-width: ${min_width};
    max-width: ${max_width};
    min-height: ${min_height};
    max-height: ${max_height};
    width: ${width};
    height: ${height};
    ${Margins({ m, mt, ml, mr, mb })}
    ${Paddings({ p, pt, pl, pr, pb })}
`

const responsiveStyles = generateResponsiveStyles(baseStyles)

export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T
    //based on common typescript Record<>, but make everything optional
}

export type ResponseDeviceProps = PartialRecord<keyof typeof device, BaseStyleType>

export type BoxType = {
    width?: string
    height?: string
    max_width?: string
    min_height?: string
    position?: string
    background?: string
    bg?: string
    direction?: string
} & ResponseDeviceProps &
    BaseStyleType

const Box = styled.div<BoxType & BaseStyleType>`
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
