import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

type ArticleWrapperProps = {
    margin_left?: string
}

export const ArticleWrapper = styled.div<ArticleWrapperProps>`
    max-width: 71.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    margin-left: 12.6rem;
    margin-top: 1.6rem;

    @media ${device.laptopL} {
        margin-left: ${({ margin_left }) => margin_left ?? '12.6rem'};
    }

    @media ${device.tabletL} {
        margin-left: 0;
    }
`

export const ExternalLink = styled(LocalizedLink)`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);

    :hover {
        text-decoration: underline;
    }

    @media ${device.tabletL} {
        font-size: 16px;
    }
`

export const StyledHeader = styled(Header)`
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
`

export const StyledText = styled(Text)`
    margin-top: 1.7rem;
`
