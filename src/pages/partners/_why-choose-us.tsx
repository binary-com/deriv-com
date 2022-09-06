import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
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
                    {localize('Why choose us')}
                </Header>
                <Wrapper>
                    <Card direction="column">
                        <ImageWrapper src={Hand} alt="" />
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            {localize('Partnership with a trusted pioneer')}
                        </Header>
                        <Text>
                            {localize(
                                'Benefit from our extensive experience of more than 20 years and our internationally acclaimed reputation.',
                            )}
                        </Text>
                    </Card>
                    <Card direction="column">
                        <ImageWrapper src={Lamp} alt="" />
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            {localize('Expert support')}
                        </Header>
                        <Text>
                            {localize(
                                'Experienced affiliate managers answer all your queries and provide you with excellent promotional and educational materials.',
                            )}
                        </Text>
                    </Card>
                    <Card direction="column">
                        <ImageWrapper src={HiddenFee} alt="" />
                        <Header as="h4" type="sub-section-title" mb="0.8rem">
                            {localize('No charges or hidden fees')}
                        </Header>
                        <Text>
                            {localize(
                                'All Deriv partnership programmes are free to join. There are absolutely no charges or hidden fees to worry about.',
                            )}
                        </Text>
                    </Card>
                </Wrapper>
            </Container>
        </SectionContainer>
    )
}

export default WhyChooseUs
