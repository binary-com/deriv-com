import React from 'react'
import styled from 'styled-components'
import Image from 'components/elements/image'
import {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'

const steps = [
    {
        title: localize('Start with a proven strategy'),
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
        title: localize('Avoid losses and maximise your profits'),
        subtitle: localize(
            'Use analysis tools and indicators and include take-profit, stop-loss and other smart logic to avoid losses and maximise your profits.',
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

    &:not(:last-child) {
        margin-bottom: 8rem;
    }
`

const StyledDiv = styled.div`
    margin: 0;
    max-width: 41.5rem;

    div {
        margin: ${props => props.margin};
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    font-size: 2rem;
`

export const Tutorial = () => {
    return (
        <SectionContainer>
            <FlexGridContainer
                align-items="center"
                content_width="32.8rem"
                gap="1rem"
            >
                <>
                    {steps.map((step, idx) => (
                        <StyledContainer
                            key={idx}
                            flexFlow={idx % 2 === 1 ? 'row-reverse' : 'row'}
                        >
                            <StyledDiv align="flex-start">
                                <StyledHeader
                                    font_size="4.8rem"
                                    align="left"
                                    lh="5rem"
                                >
                                    {step.title}
                                </StyledHeader>
                                <StyledText>{step.subtitle}</StyledText>
                            </StyledDiv>
                            <StyledDiv margin="auto">
                                <Image
                                    img_name={step.image}
                                    alt={step.alt}
                                    width={step.width || '41.5rem'}
                                />
                            </StyledDiv>
                        </StyledContainer>
                    ))}
                </>
            </FlexGridContainer>
        </SectionContainer>
    )
}
