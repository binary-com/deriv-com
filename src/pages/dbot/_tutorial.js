import React from 'react'
import styled from 'styled-components'
// import Button from 'components/form/button.js'
import Image from 'components/elements/image'
import Container, {
    SectionContainer,
    FlexGridContainer,
    GridContainer,
} from 'components/containers/container'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import device from 'themes/device'
// const StyledSection = styled.section`
//     background-color: var(--color-grey-1);
//     width: 100%;
//     padding: 2.4rem 0;
// `

const StyledDiv = styled.div`
    margin: 0;
    max-width: 41.5rem;
`
const steps = [
    {
        title: localize('Start with a proven strategy'),
        subtitle: localize(
            'Martingale, D’Alembert, Oscar’s Grid, Cuttler’s RSI, Bollinger Bands, and SMA Crossover - load and customise proven strategies or create your own from scratch.',
        ),
        image: 'dbot-strategy.png',
    },
    {
        title: localize('Build your strategy visually'),
        subtitle: localize(
            'Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed.',
        ),
        image: 'dbot-build-strategy.png',
    },
    {
        title: localize('Avoid losses and maximise your profits'),
        subtitle: localize(
            'Use analysis tools and indicators and include take-profit, stop-loss and other smart logic to avoid losses and maximise your profits.',
        ),
        image: 'dbot-analysis-tool.png',
    },
    {
        title: localize('Track your performance'),
        subtitle: localize(
            'See how your bot is performing as it executes each trade and receive notifications via Telegram.',
        ),
        image: 'dbot-track-performance.png',
    },
    {
        title: localize('Get integrated help'),
        subtitle: localize(
            'Access tutorials, guides, and reference information as you build your bot.',
        ),
        image: 'dbot-integrated-help.png',
    },
    {
        title: localize('Save your strategies'),
        subtitle: localize(
            'Enjoy the convenience and security of storing your strategies on your Google Drive.',
        ),
        image: 'dbot-save-strategy.png',
    },
]

const StyledContainer = styled(FlexGridContainer)`
    flex-flow: ${props => props.flexFlow};
    margin: 0;
`

export const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        font-weight: bold;
        font-size: var(--text-size-sm);
    }
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
                                <StyledHeader font_size="4rem" align="left" lh="5rem">
                                    {step.title}
                                </StyledHeader>
                                <Text>{step.subtitle}</Text>
                            </StyledDiv>
                            <Image img_name={step.image} width="40%" />
                        </StyledContainer>
                    ))}
                </>
            </FlexGridContainer>
        </SectionContainer>
    )
}
