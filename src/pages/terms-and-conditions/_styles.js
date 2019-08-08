import styled from 'styled-components'
import { Header, Text } from 'components/elements/typography'
import { StyledLink } from 'components/elements/link'

export const StyledSection = styled.section`
    padding-left: 8rem;
`

export const TncText = styled(Text)`
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
`

export const TncListText = styled(Text)`
    margin: 0.8rem 0;
`

export const StyledHeader = styled(Header)`
    margin-top: 3.2rem;
`

export const StyledOrder = styled.ol`
    list-style: ${props => props.type || ''};
    font-size: var(--text-size-s);
    padding-left: 1.8rem;

    & > li {
        padding-left: 0.5rem;
    }
`

export const TncLink = styled(StyledLink)`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
`