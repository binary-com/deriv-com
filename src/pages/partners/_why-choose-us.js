import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
// SVG
import Hand from 'images/svg/hand-icon.svg'
import Lamp from 'images/svg/lamp-icon.svg'
import HiddenFee from 'images/svg/hidden-fee-icon.svg'

const Wrapper = styled(Flex)`
    flex-wrap: wrap;
`

const Card = styled(Flex)`
    padding: 2.4rem;
    max-width: 38.4rem;
    margin: 0 1.2rem;
    justify-content: flex-start;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    & > svg {
        margin-bottom: 1.6rem;
        width: 64px;
        height: 64px;
    }
    @media (max-width: 1351px) {
        margin: 1.2rem;
    }
`
const WhyChooseUs = () => {
    return (
        <SectionContainer background="grey-4">
            <Container direction="column">
                <Header as="h2" align="center" mb="4rem">
                    Why choose us?
                </Header>
                <Wrapper>
                    <Card direction="column">
                        <Hand />
                        <Header as="h4" mb="0.8rem">
                            Partnership with a trusted pioneer
                        </Header>
                        <Text>
                            Benefit from our extensive experience of more than 20 years and our
                            internationally acclaimed reputation.
                        </Text>
                    </Card>
                    <Card direction="column">
                        <Lamp />
                        <Header as="h4" mb="0.8rem">
                            Diverse opportunities
                        </Header>
                        <Text>
                            All Deriv partnership programmes are free to join. There are absolutely
                            no charges or hidden fees to worry about.
                        </Text>
                    </Card>
                    <Card direction="column">
                        <HiddenFee />
                        <Header as="h4" mb="0.8rem">
                            No charges or hidden fees
                        </Header>
                        <Text>
                            All Deriv partnership programmes are free to join. There are absolutely
                            no charges or hidden fees to worry about.
                        </Text>
                    </Card>
                </Wrapper>
            </Container>
        </SectionContainer>
    )
}

export default WhyChooseUs
