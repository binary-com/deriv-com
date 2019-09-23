import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import MakeSmarterImage from 'images/svg/make-smarter.svg'
import TradeWhatYouWant from 'images/svg/trade-what-you-want.svg'
import HowYouWant from 'images/svg/how-you-want.svg'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    box-shadow: inset 0 1px 0 0 var(--color-grey-2);
`
const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: ${props => (props.no_margin ? '0' : '8rem')};
`
const ContentContainer = styled.div`
    max-width: 41.5rem;

    ${Text} {
        margin-top: 0.8rem;
    }
`
const Trading = () => {
    return (
        <StyledSection>
            <Container direction="column">
                <Row no_margin>
                    <ContentContainer>
                        <Header as="h2">Make smarter trading decisions</Header>
                        <Text>
                            Customise your chart with technical indicators and
                            widgets — everything you need to make smarter
                            trading decisions.
                        </Text>
                    </ContentContainer>
                    <MakeSmarterImage />
                </Row>
                <Row>
                    <TradeWhatYouWant />
                    <ContentContainer>
                        <Header as="h2">
                            Trade what you want, when you want...
                        </Header>
                        <Text>
                            Forex, indices, commodities and volatility indices —
                            whether it’s the world markets or synthetic markets
                            that excite you, you’ll find them here.
                        </Text>
                    </ContentContainer>
                </Row>
                <Row>
                    <ContentContainer>
                        <Header as="h2">...And how you want</Header>
                        <Text>
                            Choose from a variety of customisable trade types
                            with stakes as low as $0.35 and durations as short
                            as a second.
                        </Text>
                    </ContentContainer>
                    <HowYouWant />
                </Row>
            </Container>
        </StyledSection>
    )
}

export default Trading
