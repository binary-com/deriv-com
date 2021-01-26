import styled from 'styled-components'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const AccordionWrapper = styled.div`
    max-width: 996px;
    width: fit-content;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`

export const ContentContainer = styled(Container)`
    padding: 80px 0 40px 0;

    @media ${device.tablet} {
        padding: 40px 0 70px 0;
    }
`

export const ImageWrapper = styled.img`
    position: absolute;
`

export const Section = styled(SectionContainer)`
    background-color: var(--color-white);
    box-shadow: inset 0 1px 0 #e7e7e7;
    padding-bottom: 130px;
    padding-top: 0;
`

export const TextContainer = styled.div`
    display: grid;
    grid-row-gap: 16px;
`

export const TextWrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
`

export const Title = styled(Header)`
    width: fit-content;
    text-align: center;
    font-size: 48px;
    line-height: 60px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`

export const StyledText = styled(Text)`
    max-width: 948px;
    width: fit-content;
    font-size: 16px;
    line-height: 24px;

    @media ${device.tablet} {
        max-width: 290px;
        font-size: 14px;
        line-height: 20px;
    }
`

export const Link = styled(StyledText).attrs({ as: 'a' })`
    color: var(--color-red);
`
