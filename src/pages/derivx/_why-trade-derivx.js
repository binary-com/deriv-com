import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import Icon24_7 from 'images/svg/derivx/24-7.svg'
import IconMultipleMarketing from 'images/svg/derivx/multiple-marketing.svg'
import IconNewPromising from 'images/svg/derivx/new-promising.svg'

const Card = styled(Flex)`
    flex-direction: column;
    min-width: 200px;
    max-width: 384px;
    height: auto;
    padding: 24px;
    border-radius: 8px;
    border: solid 1px var(--color-grey-21);
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }
`

const card_data = [
    {
        icon: IconNewPromising,
        title: 'New and promising',
        subtitle: 'Deriv X is our second CFD platform, after MT5. It’s packed with features and built to fit your trading style.',
    },
    {
        icon: IconMultipleMarketing,
        title: 'Multiple markets on a single platform',
        subtitle: 'Trade various assets in multiple markets simultaneously.',
    },
    {
        icon: Icon24_7,
        title: '24/7 trading',
        subtitle: 'Trade cryptocurrencies and synthetic indices anytime, even on weekends and holidays.',
    },
]

const WhyTradeDerivX = () => {
    return (
        <SectionContainer>
            <Container fd='column'>
                <Header type='page-title' align="center">
                    {localize('Why trade with Deriv X')}
                </Header>
                <Flex ai='flex-start' mt="40px">
                    {card_data.map((index) => {
                        return (
                            <Card key={index}>
                                <div>
                                    <img src={index.icon} alt={index.title} />
                                </div>
                                <Header width='240px' type='sub-section-title' mt='7px' mb='8px'>
                                    {localize(index.title)}
                                </Header>
                                <Text>
                                    {localize(index.subtitle)}
                                </Text>
                            </Card>
                        )
                    })}
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default WhyTradeDerivX