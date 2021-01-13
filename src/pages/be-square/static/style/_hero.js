import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import device from 'themes/device'

export const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 15%;
    background-color: var(--color-black);
    justify-content: center;

    @media ${device.laptop} {
        grid-template-columns: auto;
    }
`

export const HeaderContainer = styled(Flex)`
    flex-direction: column;
    padding: 120px 0 80px 120px;

    @media ${device.laptop} {
        align-items: center;
        padding: 40px 0 0;
    }
`

export const SubTitle = styled(Text)`
    color: var(--color-white);
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    max-width: 384px;
    max-height: 72px;

    @media ${device.tablet} {
        font-size: 18px;
        line-height: 22px;
        max-width: 328px;
        max-height: 100px;
    }
`

export const Title = styled(Header)`
    color: var(--color-white);
    font-size: 80px;
    font-weight: 700;
    line-height: 100px;
    max-width: 384px;
    max-height: 200px;

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
        max-width: 328px;
        max-height: 100px;
    }
`

export const ImageWrapper = styled.img`
    max-width: 722px;
    width: 100%;
    position: relative;
    top: 90px;

    @media ${device.tablet} {
        max-width: 328px;
        margin-right: 15px;
        overflow: unset;
        top: 40px;
    }
`
