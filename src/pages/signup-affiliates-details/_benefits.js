import React from 'react'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
import Join from 'images/svg/signup-affiliate-details/join.svg'
import Earn from 'images/svg/signup-affiliate-details/earn.svg'
import Products from 'images/svg/signup-affiliate-details/products.svg'
import Support from 'images/svg/signup-affiliate-details/support.svg'
import device from 'themes/device.js'
import { Header, Text } from 'components/elements'

const Benefit = styled.section`
    display: flex;
    align-items: center;
`
const Icon = styled.section`
    width: 48px;
    height: 64px;
`
const Description = styled.section`
    padding-left: 3rem;
`

const benefits_content = [
    {
        id: 'benefit_join',
        header: <Localize translate_text="Join for free" />,
        text: (
            <Text>
                {localize(
                    'There are no fees to join our partnership programme, only opportunities to earn!',
                )}
            </Text>
        ),
        icon: <img src={Join} alt="join" />,
    },
    {
        id: 'benefit_earn',
        header: <Localize translate_text="Earn daily" />,
        text: (
            <Text>
                {localize(
                    "Whenever your clients trade, you earn a commission: daily if you're an IB and monthly if you're an affiliate.",
                )}
            </Text>
        ),
        icon: <img src={Earn} alt="earn" />,
    },
    {
        id: 'benefit_products',
        header: <Localize translate_text="A variety of products for your clients" />,
        text: (
            <Text>
                {localize(
                    'Promote our diverse products to your clients and enhance your income. Our platforms are designed to fit any trading style.',
                )}
            </Text>
        ),
        icon: <img src={Products} alt="products" />,
    },
    {
        id: 'benefit_support',
        header: <Localize translate_text="Get the support you need" />,
        text: (
            <Text>
                {localize(
                    'New to the world of affiliate marketing? We’ll support you with exclusive marketing tools, training videos, and more.',
                )}
            </Text>
        ),
        icon: <img src={Support} alt="support" width="48" height="64" />,
    },
]

const Content = styled.div`
    width: 48.4rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 4.7rem;
    margin-top: 9.4rem;

    @media ${device.tablet} {
        display: none;
    }
`
const Benefits = () => {
    return (
        <Content>
            {benefits_content.map((item) => {
                return (
                    <Benefit key={item.id}>
                        <Icon>{item.icon}</Icon>
                        <Description>
                            <Header mt="2.4rem" as="h4" type="subtitle-2">
                                {item.header}
                            </Header>
                            {item.text}
                        </Description>
                    </Benefit>
                )
            })}
        </Content>
    )
}

export default Benefits
