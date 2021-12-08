import styled, { css } from 'styled-components'
import { Paddings } from '../../themes/function'
import Box, { generateResponsiveStyles } from './box'
import device from 'themes/device'

const baseStyles = ({ p, pt, pl, pr, pb }) => css`
    ${Paddings({ p, pt, pl, pr, pb })}
`

const responsiveStyles = generateResponsiveStyles(baseStyles)

const SectionContainer = styled(Box).attrs({
    as: 'section',
})`
    width: 100%;
    padding: ${(props) => props.padding || props.p || '8rem 0'};
    position: ${(props) => props.position || 'static'};

    /* prettier-ignore */
    background-color: var(--color-${(props) => props.background || 'white'});

    @media ${device.tablet} {
        padding: ${(props) => props.p || '8rem 0'};
    }
    @media ${device.tabletL} {
        height: ${(props) => props.height};
        padding: ${(props) => props.p};
        padding-top: ${(props) => props.pt};
    }

    ${responsiveStyles}
`

export default SectionContainer
