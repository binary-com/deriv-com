import styled from 'styled-components'
import { Container } from 'components/containers'
import device from 'themes/device'

export const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 13%;
    background-color: var(--color-black);
    justify-content: center;

    @media ${device.laptop} {
        grid-template-columns: auto;
    }

    @media ${device.tablet} {
        height: 370px;
    }
`

export const HeaderContainer = styled(Container)`
    flex-direction: column;
    padding: 120px 0 80px 120px;
    align-items: flex-start;

    @media ${device.laptop} {
        padding: 40px 0 0;
    }
`

export const ImageWrapper = styled.img`
    max-width: 722px;
    width: 100%;
    position: relative;
    top: 90px;

    @media ${device.tablet} {
        max-width: 298px;
        margin: 0 auto;
        overflow: unset;
        top: 24px;
    }
`
