import styled from 'styled-components'
import PatternsMobile from 'images/common/trade-types/trade-patterns-mobile.png'
import Patterns from 'images/common/trade-types/trade-patterns.png'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
    background-position: center center;

    @media ${device.mobileL} {
        background-image: url(${PatternsMobile});
    }
`

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;

    & > li {
        margin-bottom: 0.8rem;
    }
    & > li:last-child {
        margin-bottom: 0;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;

    @media ${device.tablet} {
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }
`

const OptionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.3rem;
    grid-row-gap: 1.6rem;
    margin-bottom: 2.4rem;

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }
`

const OptionGridSecondary = styled(OptionGrid)`
    grid-row-gap: 2.4rem;
`

const Card = styled.article`
    position: relative;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    height: 34.6rem;
    padding: 2.4rem;
    max-width: 28.2rem;

    @media (max-width: 680px) {
        max-width: 282px;
        height: 26.4rem;
    }

    &:hover .learn-more {
        opacity: 1;
    }
`

const WhyTradeItem = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 23.7rem;
    height: auto;

    @media ${device.mobileL} {
        max-width: 100%;
    }
`

const HowItWorksItem = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: var(--color-white);
    justify-content: flex-start;
    flex-direction: column;
    padding: 2.4rem;
    min-height: 24rem;
    border-radius: 4px;
    height: auto;

    @media ${device.mobileL} {
        justify-content: flex-start;
        min-height: 123px;
    }
`

const MarketsItem = styled(Flex)`
    align-items: center;
    height: unset;
    padding: 4px 0;
    margin-bottom: 2.8rem;
    position: relative;
    z-index: 2;
`

export {
    SmallContainer,
    Hero,
    Ul,
    Grid,
    WhyTradeItem,
    HowItWorksItem,
    Card,
    OptionGrid,
    OptionGridSecondary,
    MarketsItem,
}
