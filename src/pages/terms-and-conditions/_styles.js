import styled from 'styled-components'
import { Header, Text, Link } from 'components/elements'
import device from 'themes/device'

export const StyledSection = styled.section`
    padding-left: 8rem;
    @media ${device.tabletL} {
        padding-left: 0;
    }
`
export const StyledTitle = styled(Header)`
    @media ${device.tabletL} {
        font-size: 3rem;
        margin-top: 2.6rem;
    }
`
export const TncText = styled(Text)`
    margin-top: 0.8rem;
    margin-bottom: 1.6rem;
`

export const TncListText = styled(Text)`
    margin: 0.8rem 0;

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`

export const StyledHeader = styled(Header)`
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        font-weight: bold;
        font-size: var(--text-size-sm);
    }
`

export const StyledOrder = styled.ol`
    list-style: ${props => props.type || ''};
    font-size: var(--text-size-s);
    padding-left: 2rem;

    & > li {
        padding-left: 0.5rem;
    }
`

export const TncLink = styled(Link)`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
`

export const TncExternalLink = styled.a`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
