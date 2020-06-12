import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import Patterns from 'images/common/trade-types/trade-patterns.png'

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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
`

const Notes = styled(Flex)`
    padding: 1.6rem 4rem 1.6rem 6.4rem;
    border-radius: 60px;
    position: relative;
    background: var(--color-grey-25);
    max-width: 66rem;
    justify-content: flex-start;

    &::before {
        content: 'i';
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: var(--color-black);
        color: var(--color-white);
        position: absolute;
        left: 24px;
        top: 35%;
        text-align: center;
        font-size: var(--text-size-xs);
    }
`
export { SmallContainer, Hero, Ul, Grid, Notes }
