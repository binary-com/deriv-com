import styled from 'styled-components'
import { Header } from 'components/elements'
import device from 'themes/device'

export const SectionHeader = styled.div`
    text-align: center;
`

export const StyledSubHeader = styled(Header)`
    margin: 0.8rem auto;
    max-width: ${props => props.maxWidth || ''};
`

export const StyledHeader = styled(Header)`
    margin-top: 2rem;
`

export const HeroHeader = styled(Header)`
    margin-top: ${props => (props.secondary ? '2rem' : '')};

    @media ${device.laptop} {
        text-align: center;
    }
`
