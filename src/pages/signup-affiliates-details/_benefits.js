import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../components/containers'
import { Localize, localize } from 'components/localization'
import Join from 'images/svg/signup-affiliate-details/join.svg'
import Earn from 'images/svg/signup-affiliate-details/earn.svg'
import Products from 'images/svg/signup-affiliate-details/products.svg'
import Support from 'images/svg/signup-affiliate-details/support.svg'
import device from 'themes/device.js'
import { Header, Text } from 'components/elements'

const StyledFlex = styled(Flex)`
    @media ${device.tablet} {
        display: none;
    }
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

const Benefits = () => {
    return (
        <StyledFlex width="48rem" jc="flex-start" fd="column" m="9.4rem 7.8rem 0 0">
            {benefits_content.map((item) => {
                return (
                    <Flex ai="center" height="auto" key={item.id}>
                        <Icon>{item.icon}</Icon>
                        <Description>
                            <Header mt="2.4rem" as="h4" type="subtitle-2">
                                {item.header}
                            </Header>
                            {item.text}
                        </Description>
                    </Flex>
                )
            })}
        </StyledFlex>
    )
}

export default Benefits
