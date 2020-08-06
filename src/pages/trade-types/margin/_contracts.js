import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer, Ul } from '../components/_style'
import { SectionContainer, Show } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { size } from 'themes/device'

const container_style = css`
    flex: 1;
    width: 100%;
`

const Desktop = styled(Show.Desktop)`
    ${container_style}
`

const Mobile = styled(Show.Mobile)`
    ${container_style}
`

const query = graphql`
    query {
        margin_numbers: file(relativePath: { eq: "trade-types/margin-numbers.png" }) {
            ...fadeIn
        }
        margin_mobile_numbers: file(relativePath: { eq: "trade-types/margin-mobile-numbers.png" }) {
            ...fadeIn
        }
        margin_rate_numbers: file(relativePath: { eq: "trade-types/margin-rate-numbers.png" }) {
            ...fadeIn
        }
        margin_mobile_rate_numbers: file(
            relativePath: { eq: "trade-types/margin-mobile-rate-numbers.png" }
        ) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 3.2rem;
`
const Contracts = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <SectionContainer background="white" padding="10.4rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('How margin contracts work')}
                    </Header>
                    <Text mb="4rem">
                        <Localize
                            translate_text="If we take an example, one lot (100,000 EUR) of EUR/USD pair with a unit price of 1.10 USD will cost you <0>110,000 USD</0>. However, a 1% margin will enable you to open a position worth 110,000 USD by paying only <0>1,100 USD</0>. A leverage of 100:1 will also give you the same level of market exposure as trading on 1% margin."
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <Header as="h3" mb="0.8rem">
                        {localize('How to calculate margin for products on Deriv')}
                    </Header>
                    <Text mb="0.8rem">
                        {localize(
                            'When trading on Deriv, you can calculate the margin allowed for a contract by using one of the formulas below:',
                        )}
                    </Text>
                    <Ul>
                        <li>
                            <Text mb="2.4rem">
                                <Localize
                                    translate_text="<0>The leverage formula:</0> This formula calculates margin as <0>Volume in lots x lot size x asset price / leverage = margin.</0> The leverage formula is used in determining the margin for forex currency pairs and commodity pairs."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                    </Ul>
                    <Desktop max_width={size.tabletS}>
                        <ImageWrapper>
                            <QueryImage
                                data={data['margin_numbers']}
                                alt="Trade types margin numbers"
                            />
                        </ImageWrapper>
                    </Desktop>
                </SmallContainer>
                <Mobile min_width={size.tabletS}>
                    <ImageWrapper>
                        <QueryImage
                            data={data['margin_mobile_numbers']}
                            alt="Trade types margin numbers"
                        />
                    </ImageWrapper>
                </Mobile>
                <SmallContainer direction="column" ai="flex-start">
                    <Ul>
                        <li>
                            <Text mt="2.4rem" mb="2.4rem">
                                <Localize
                                    translate_text="<0>The margin rate formula:</0> This formula calculates margin as <0>Volume in lots x lot size x asset price x margin rate = margin.</0> The margin rate formula is used in determining the margin for cryptocurrency contracts."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                    </Ul>
                    <Desktop max_width={size.tabletS}>
                        <ImageWrapper>
                            <QueryImage
                                data={data['margin_rate_numbers']}
                                alt="Trade types margin rate numbers"
                            />
                        </ImageWrapper>
                    </Desktop>
                </SmallContainer>
                <Mobile min_width={size.tabletS}>
                    <ImageWrapper>
                        <QueryImage
                            data={data['margin_mobile_rate_numbers']}
                            alt="Trade types margin numbers"
                        />
                    </ImageWrapper>
                </Mobile>
            </SectionContainer>
        </>
    )
}

export default Contracts
