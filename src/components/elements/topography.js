import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const base = css`
    line-height: 1.25;
`
const H1 = styled.h1`
    ${base}
    font-size: var(--text-size-xxl);
    font-weight: bold;
`

const H2 = styled.h2`
    ${base}
    font-size: var(--text-size-xl);
    font-weight: bold;
`

const H3 = styled.h3`
    ${base}
    font-size: var(--text-size-l);
    font-weight: bold;
`

const H4 = styled.h4`
    ${base}
    font-size: var(--text-size-m);
    font-weight: bold;
`

const H5 = styled.h5`
    ${base}
    font-size: var(--text-size-s);
    font-weight: bold;
`

export const Text = styled.p`
    ${base}
    font-size: var(--text-size-s);
`

export const Header = ({ children, as, ...props }) => (
    <>
        {as === 'h1' && <H1 {...props}>{children}</H1>}
        {as === 'h2' && <H2 {...props}>{children}</H2>}
        {as === 'h3' && <H3 {...props}>{children}</H3>}
        {as === 'h4' && <H4 {...props}>{children}</H4>}
        {as === 'h5' && <H5 {...props}>{children}</H5>}
    </>
)

Header.propTypes = {
    as: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}
