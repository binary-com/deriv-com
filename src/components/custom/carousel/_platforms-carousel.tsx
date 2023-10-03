import React from 'react'
import styled from 'styled-components'
import LearnMore from './_learn-more'
import MarketsCarousel from './_markets-carousel'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'

export type TRenderableData = {
    icon: string
    heading: string
    paragraph: TString
    link: string
}

type TGenericCarousel = {
    renderableData: TRenderableData[]
    mainHeading: TString
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tablet} {
        padding-block-end: 4.5rem;
    }
`
const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        > img {
            width: 48px;
            height: 48px;
            margin: 0 0 16px;
        }
    }
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;
    font-family: Ubuntu, sans-serif;
    color: var(--color-black-9);

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`
const StyledPara = styled(Text)`
    margin-top: 1.6rem;
    font-size: 16px;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`
const StyledHeading = styled(Header)`
    font-family: Ubuntu, sans-serif;
    font-size: 48px;
    color: var(--color-black-9);
    @media ${device.tablet} {
        font-size: 24px;
        max-width: 213px;
        margin: 0 auto;
    }
`
const Card = styled.article`
    position: relative;
    border-radius: 16px;
    box-shadow: 0px 12px 16px -4px rgba(14, 14, 14, 0.08), 0px 4px 6px -2px rgba(14, 14, 14, 0.03);
    background-color: var(--color-white);
    height: 100%;
    padding: 24px 24px 0;
    max-width: 315px;

    @media (max-width: 680px) {
        padding: 16px 16px 36px;
        max-width: 328px;
        min-height: unset;
        margin: 0 15px;
    }

    &:hover .learn-more {
        opacity: 1;
    }
`
const MarketsItem = styled(Flex)`
    align-items: center;
    height: 100%;
    padding: 4px 0;
    margin-bottom: 2.8rem;
    position: relative;
    z-index: 2;
`
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

const GenericCarousel = ({ renderableData, mainHeading }: TGenericCarousel) => {
    return (
        <StyledSection background="white" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <StyledHeading as="h3" type="section-title" mb="2.4rem" align="center">
                    <Localize translate_text={mainHeading} />
                </StyledHeading>
            </SmallContainer>
            <MarketsCarousel>
                {renderableData.map(({ heading, icon, link, paragraph }) => (
                    <MarketsCarousel.Item key={paragraph}>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={icon} width="48" height="48" alt={heading} />
                                    <StyledText weight="bold">{heading}</StyledText>
                                </MobileCardHeader>
                                <StyledPara>
                                    <Localize translate_text={paragraph} />
                                </StyledPara>
                                <LearnMore text="_t_Learn more_t_" to={link} in_trading_platforms />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                ))}
            </MarketsCarousel>
        </StyledSection>
    )
}

export default GenericCarousel
