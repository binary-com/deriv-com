import React from 'react'
import styled from 'styled-components'
import { BaseElement } from './typography'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

const LocalizedLinkText = styled((props) => <LocalizedLink {...props} />)`
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

export default LocalizedLinkText
