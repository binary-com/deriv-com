import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { generateResponsiveStyles } from '../containers/box'
import { Margins, Paddings } from 'themes/function'
import device from 'themes/device'

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
    align,
    lh,
    min_width,
    max_width,
    min_height,
    max_height,
    width,
    height,
}) => css`
    min-width: ${min_width};
    max-width: ${max_width};
    min-height: ${min_height};
    max-height: ${max_height};
    width: ${width};
    height: ${height};
    text-align: ${align};
    line-height: ${lh};
    ${Margins({ m, mt, ml, mr, mb })}
    ${Paddings({ p, pt, pl, pr, pb })}
`

const responsiveStyles = generateResponsiveStyles(baseStyles)

const createElement = React.createElement

export const BaseLink = css`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`

export const BaseElement = css`
    text-align: ${(props) => props.align || 'left'};
    padding: ${(props) => props.padding || ''};

    /* prettier-ignore */
    color: var(--color-${(props) => props.color || 'black-3'});
    line-height: ${(props) => props.lh || '1.5'};
    max-width: ${(props) => props.max_width || ''};
    min-width: ${(props) => props.min_width || ''};
    ${Margins}
    ${Paddings}

    @media ${device.tablet} {
        max-width: ${(props) => props.mobile_max_width || ''};
    }
`

//////////////////////////////////////////////////////////////////////////////
/////////////////// TEXT IS DEPRICATED. PLEASE USE HEADER. ///////////////////
//////////////////////////////////////////////////////////////////////////////
export const Text = styled.p`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.size || '1.6rem'};
    width: ${(props) => props.width || 'auto'};

    @media ${device.tabletL} {
        font-size: ${(props) => props.size || '16px'};
    }

    ${responsiveStyles}
`
//////////////////////////////////////////////////////////////////////////////
/////////////////// TEXT IS DEPRICATED. PLEASE USE HEADER. ///////////////////
//////////////////////////////////////////////////////////////////////////////

export const Header = styled(({ as = 'h1', children, ...props }) =>
    createElement(as, props, children),
)`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'bold'};
    font-size: ${(props) => {
        if (props.size) return props.size
        if (props.type === 'main-landing-title') return '8.0rem'
        if (props.type === 'display-title') return '6.4rem'
        if (props.type === 'page-title') return '4.8rem'
        if (props.type === 'section-title') return '3.2rem'
        if (props.type === 'sub-section-title') return '2.4rem'
        if (props.type === 'main-paragraph') return '1.6rem'
        if (props.type === 'sub-paragraph') return '1.4rem'
        // The above is deprecated and should not be used for any new designs on Figma
        if (props.type === 'hero') return '8.0rem'
        if (props.type === 'heading-1') return '6.4rem'
        if (props.type === 'heading-2') return '4.8rem'
        if (props.type === 'heading-3') return '3.2rem'
        if (props.type === 'subtitle-1') return '2.4rem'
        if (props.type === 'subtitle-2') return '2.0rem'
        if (props.type === 'paragraph-1') return '1.6rem'
        if (props.type === 'paragraph-2') return '1.4rem'
        if (props.type === 'small') return '1.2rem'
        if (props.type === 'extra-small') return '1.0rem'
    }};
    line-height: ${(props) => {
        if (props.type === 'main-landing-title') return '8rem'
        if (props.type === 'display-title') return '8rem'
        if (props.type === 'page-title') return '6rem'
        if (props.type === 'section-title') return '4rem'
        if (props.type === 'sub-section-title') return '3rem'
        if (props.type === 'main-paragraph') return '2.4rem'
        if (props.type === 'sub-paragraph') return '2rem'
        // The above is deprecated and should not be used for any new designs on Figma
        if (props.type === 'hero') return '10rem'
        if (props.type === 'heading-1') return '8rem'
        if (props.type === 'heading-2') return '6rem'
        if (props.type === 'heading-3') return '4rem'
        if (props.type === 'subtitle-1') return '3.6rem'
        if (props.type === 'subtitle-2') return '3rem'
        if (props.type === 'paragraph-1') return '2.4rem'
        if (props.type === 'paragraph-2') return '2rem'
        if (props.type === 'small') return '1.8rem'
        if (props.type === 'extra-small') return '1.4 rem'
    }};
    width: ${(props) => props.width || '100%'};

    @media ${device.tabletL} {
        font-size: ${(props) => {
            if (props.type === 'main-landing-title') return '40px'
            if (props.type === 'display-title') return '40px'
            if (props.type === 'page-title') return '32px'
            if (props.type === 'section-title') return '24px'
            if (props.type === 'sub-section-title') return '20px'
            if (props.type === 'main-paragraph') return '16px'
            if (props.type === 'sub-paragraph') return '14px'
            // The above is deprecated and should not be used for any new designs on Figma
            if (props.type === 'hero') return '40px'
            if (props.type === 'heading-1') return '32px'
            if (props.type === 'heading-2') return '28px'
            if (props.type === 'heading-3') return '24px'
            if (props.type === 'subtitle-1') return '18px'
            if (props.type === 'subtitle-2') return '16px'
            if (props.type === 'paragraph-1') return '14px'
            if (props.type === 'paragraph-2') return '12px'
            if (props.type === 'small') return '10px'
            if (props.type === 'extra-small') return '8px'
        }};
        line-height: ${(props) => {
            if (props.type === 'main-landing-title') return '50px'
            if (props.type === 'display-title') return '50px'
            if (props.type === 'page-title') return '40px'
            if (props.type === 'section-title') return '30px'
            if (props.type === 'sub-section-title') return '25px'
            if (props.type === 'main-paragraph') return '24px'
            if (props.type === 'sub-paragraph') return '21px'
            // The above is deprecated and should not be used for any new designs on Figma
            if (props.type === 'hero') return '50px'
            if (props.type === 'heading-1') return '40px'
            if (props.type === 'heading-2') return '34px'
            if (props.type === 'heading-3') return '30px'
            if (props.type === 'subtitle-1') return '26px'
            if (props.type === 'subtitle-2') return '24px'
            if (props.type === 'paragraph-1') return '20px'
            if (props.type === 'paragraph-2') return '18px'
            if (props.type === 'small') return '14px'
            if (props.type === 'extra-small') return '12px'
        }};
    }

    ${responsiveStyles}
`

export const LinkText = styled(Text).attrs({ as: 'a' })`
    ${BaseLink}
`

export const SpanLinkText = styled(Text).attrs({ as: 'span' })`
    ${BaseLink}
`

Header.propTypes = {
    as: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
}
