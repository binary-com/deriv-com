import React from 'react'
import styled, { css } from 'styled-components'
import { LocalizedLink } from 'components/localization'
import { Margins, Paddings } from 'themes/function'
import device from 'themes/device'

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
export const Text = styled.p`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.size || '1.6rem'};
    width: ${(props) => props.width || 'auto'};

    @media ${device.tabletL} {
        font-size: ${(props) => props.size || '16px'};
    }
`

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
    }};
    line-height: ${(props) => {
        if (props.type === 'main-landing-title') return '8rem'
        if (props.type === 'display-title') return '8rem'
        if (props.type === 'page-title') return '6rem'
        if (props.type === 'section-title') return '4rem'
        if (props.type === 'sub-section-title') return '3rem'
        if (props.type === 'main-paragraph') return '2.4rem'
        if (props.type === 'sub-paragraph') return '2rem'
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
        }};
        line-height: ${(props) => {
            if (props.type === 'main-landing-title') return '50px'
            if (props.type === 'display-title') return '50px'
            if (props.type === 'page-title') return '40px'
            if (props.type === 'section-title') return '30px'
            if (props.type === 'sub-section-title') return '25px'
            if (props.type === 'main-paragraph') return '24px'
            if (props.type === 'sub-paragraph') return '21px'
        }};
    }
`

export const LinkText = styled(Text).attrs({ as: 'a' })`
    ${BaseLink}
`

export const SpanLinkText = styled(Text).attrs({ as: 'span' })`
    ${BaseLink}
`

export const LocalizedLinkText = styled((props) => <LocalizedLink {...props} />)`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.size || '1.6rem'};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
    }

    @media ${device.tabletL} {
        font-size: ${(props) => props.size || '16px'};
    }
`
