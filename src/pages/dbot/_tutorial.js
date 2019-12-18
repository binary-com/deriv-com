import React from 'react'
import styled from 'styled-components'
import { SectionContainer, FlexGridContainer } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const steps = [
    {
        title: localize('Start with a popular strategy'),
        subtitle: localize(
            'Martingale, D’Alembert, Oscar’s Grid, Cuttler’s RSI, Bollinger Bands, and SMA Crossover - load and customise proven strategies or create your own from scratch.',
        ),
        image: 'dbot-strategy.png',
        alt: 'Strategy',
    },
    {
        title: localize('Build your strategy visually'),
        subtitle: localize(
            'Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed.',
        ),
        image: 'dbot-build-strategy.png',
        alt: 'Build bot strategy',
    },
    {
        title: localize('Maximise profits, limit losses'),
        subtitle: localize(
            'Use analysis tools and indicators and include take-profit, stop-loss and other smart logic to maximise your profits, and limit losses.',
        ),
        image: 'dbot-analysis-tool.png',
        alt: 'Analysis tool',
    },
    {
        title: localize('Track your performance'),
        subtitle: localize(
            'See how your bot is performing as it executes each trade and receive notifications via Telegram.',
        ),
        image: 'dbot-track-performance.png',
        alt: 'Track performace',
    },
    {
        title: localize('Get integrated help'),
        subtitle: localize(
            'Access tutorials, guides, and reference information as you build your bot.',
        ),
        image: 'dbot-integrated-help.png',
        alt: 'Integrated help',
        width: '29rem',
    },
    {
        title: localize('Save your strategies'),
        subtitle: localize(
            'Enjoy the convenience and security of storing your strategies on your Google Drive.',
        ),
        image: 'dbot-save-strategy.png',
        alt: 'Save bot strategy',
        width: '32rem',
    },
]

const StyledContainer = styled(FlexGridContainer)`
    flex-flow: ${props => props.flexFlow};
    flex-wrap: ${props => props.flexWrap};
    justify-content: space-around;

    &:not(:last-child) {
        margin-bottom: 8rem;
    }
    @media ${device.tabletL} {
        margin-right: 0;
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems};
    margin: 0;
    width: 100%;
    max-width: 41.5rem;
    justify-content: center;
    
    @media ${device.tabletL} {
        max-width: 100%;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        text-align: center;
    }
    @media ${device.tabletS} {
        font-size: 3.6rem;
    }
`
const StyledText = styled(Text)`
    font-size: 2rem;

    @media ${device.tabletL} {
        text-align: center;
    }
    @media ${device.tabletS} {
        font-size: 1.6rem;
    }
`

export const Tutorial = () => {
    return (
        <SectionContainer>
            <FlexGridContainer
                align-items="center"
                justify="center"
                content_width="32.8rem"
                gap="1rem"
            >
                <>
                    {steps.map((step, idx) => (
                        <StyledContainer
                            key={idx}
                            flexFlow={idx % 2 === 1 ? 'row-reverse' : 'row'}
                            flexWrap="wrap-reverse"
                        >
                            <StyledDiv align="flex-start">
                                <StyledHeader font_size="4.8rem" align="left" lh="5rem">
                                    {step.title}
                                </StyledHeader>
                                <StyledText>{step.subtitle}</StyledText>
                            </StyledDiv>
                            <StyledDiv alignItems="center">
                                <Image
                                    img_name={step.image}
                                    alt={step.alt}
                                    width={step.width || '100%'}
                                />
                            </StyledDiv>
                        </StyledContainer>
                    ))}
                </>
            </FlexGridContainer>
        </SectionContainer>
    )
}
