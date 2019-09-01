import styled from 'styled-components'
import { Header } from 'components/elements/typography.js'
import device from 'themes/device'

export const SectionHeader = styled.div`
    text-align: center;
`

export const StyledSubHeader = styled(Header)`
    margin-top: 0.8rem;
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
