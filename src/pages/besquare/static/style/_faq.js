import styled from 'styled-components'
import { TextWrapper } from './_common'
import { getWindowWidth } from 'common/utility'
import { SectionContainer, Container } from 'components/containers'
import device from 'themes/device'

export const AccordionWrapper = styled.div`
    max-width: 996px;
    width: fit-content;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`

export const ContentContainer = styled(Container)`
    padding: 80px 0 40px;

    @media ${device.tablet} {
        padding: 0 0 24px;
    }
`

export const ImageWrapper = styled.img`
    position: absolute;
    bottom: ${({ bottom }) => bottom ?? 'unset'};
    left: ${({ left }) =>
        left ? `calc(${getWindowWidth()}px - ${getWindowWidth() - 1440}px)` : 'unset'};

    @media ${device.desktop} {
        left: ${({ left }) => left ?? 'unset'};
    }
`

export const QuestionAnswerContainer = styled.div`
    display: grid;
    grid-row-gap: 8px;
`

export const Section = styled(SectionContainer)`
    max-width: 1440px;
    background-color: var(--color-white);
    box-shadow: inset 0 1px 0 #e7e7e7;
    padding-bottom: 130px;
    padding-top: 0;
    margin: 0 auto;

    @media ${device.tablet} {
        box-shadow: unset;
    }
`

export const TextContainer = styled.div`
    display: grid;
    grid-row-gap: 16px;
`

export const Link = styled(TextWrapper).attrs({ as: 'a' })`
    color: var(--color-red);
`
