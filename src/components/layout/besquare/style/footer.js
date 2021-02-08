import styled from 'styled-components'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

export const ButtonWrapper = styled(LinkButton)`
    max-width: 102px;
    white-space: nowrap;
`

export const Section = styled(SectionContainer)`
    background-color: ${({ color }) => `var(--color-${color})`};
    padding: 0;
`

export const StyledLineBreak = styled.br`
    margin-top: 20px;
`

export const ContentContainer = styled(Container)`
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
        flex-direction: column;
    }
`

export const FollowUsContainer = styled.div`
    display: grid;
    grid-template-columns: 68px repeat(4, 26.67px);
    grid-column-gap: 21px;

    @media ${device.tablet} {
        grid-template-columns: repeat(4, 26.67px);
        grid-template-areas: 'follow-us follow-us follow-us follow-us' 'icon icon icon icon';
        grid-template-rows: auto auto;
    }
`

export const IconWrapper = styled.img`
    width: 32px;
    height: 32px;
    grid-area: icon;
    margin-top: 10px;
`

export const ImageWrapper = styled(QueryImage)`
    max-height: 402px;
    max-width: 588px;
    width: 100%;
    overflow: hidden;
    position: relative;
    bottom: 60px;

    @media ${device.tablet} {
        max-width: 326px;
        max-height: 224px;
        margin: 0 auto;
        bottom: 40px;
    }
`

export const TextContainer = styled.div`
    display: grid;
    justify-content: start;
    padding: 80px 0 72px 0;
    grid-row-gap: 24px;
    margin-right: 104px;

    @media ${device.laptop} {
        padding: 0 0 28px 0;
        margin: 0;
        justify-content: center;
    }
`

export const Title = styled(Header)`
    max-width: 508px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: var(--color-white);

    @media ${device.tablet} {
        max-width: 328px;
        font-size: 28px;
        line-height: 34px;
    }
`

export const TextWrapper = styled(Text)`
    display: ${({ display }) => display};
    max-width: ${({ max_width }) => (max_width ? max_width[0] : 'unset')};
    width: fit-content;
    font-size: ${({ font_size }) => font_size[0] ?? 'unset'};
    font-weight: 400;
    line-height: ${({ line_height }) => line_height[0] ?? 'unset'};
    color: var(--color-white);
    padding: ${({ padding }) => (padding ? padding[0] : 0)};
    margin: ${({ margin }) => margin};

    @media ${device.laptopM} {
        grid-area: ${({ grid_area }) => grid_area};
        margin: ${({ margin }) => margin ?? '0 auto'};
    }

    @media ${device.mobileL} {
        max-width: ${({ max_width }) => (max_width ? max_width[1] ?? max_width[0] : 'unset')};
        font-size: ${({ font_size }) => font_size[1] ?? font_size[0] ?? 'unset'};
        line-height: ${({ line_height }) => line_height[1] ?? line_height[0] ?? 'unset'};
        padding: ${({ padding }) => (padding ? padding[1] ?? padding[0] : 0)};
        margin: 0;
    }
`

export const Link = styled(TextWrapper).attrs({ as: 'a' })`
    color: var(--color-red);
    text-decoration: none;
`
