import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
// SVG
import Hand from 'images/svg/partners/hand-icon.svg'
import Lamp from 'images/svg/partners/lamp-icon.svg'
import HiddenFee from 'images/svg/partners/hidden-fee-icon.svg'

const Wrapper = styled(Flex)`
    flex-wrap: wrap;
`

const ImageWrapper = styled.img`
    margin-bottom: 1.6rem;
    width: 64px;
    height: 64px;
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
    & > img {
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
                <Header as="h2" type="page-title" align="center" mb="4rem">
                    <Localize translate_text="_t_Why choose us_t_" />
                </Header>
                <Wrapper>
                    <Card direction="column">
                        <ImageWrapper src={Hand} alt="Partners" />
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            <Localize translate_text="_t_Partnership with a trusted pioneer_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_Benefit from our extensive experience of more than 20 years and our internationally acclaimed reputation._t_" />
                        </Text>
                    </Card>
                    <Card direction="column">
                        <ImageWrapper src={Lamp} alt="Expert support" />
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            <Localize translate_text="_t_Expert support_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_Experienced affiliate managers answer all your queries and provide you with excellent promotional and educational materials._t_" />
                        </Text>
                    </Card>
                    <Card direction="column">
                        <ImageWrapper src={HiddenFee} alt="No hidden fees" />
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            <Localize translate_text="_t_No charges or hidden fees_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_All Deriv partnership programmes are free to join. There are absolutely no charges or hidden fees to worry about._t_" />
                        </Text>
                    </Card>
                </Wrapper>
            </Container>
        </SectionContainer>
    )
}

export default WhyChooseUs
