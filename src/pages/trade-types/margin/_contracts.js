import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        margin_numbers: file(relativePath: { eq: "trade-types/margin-numbers.png" }) {
            ...fadeIn
        }
        margin_rate_numbers: file(relativePath: { eq: "trade-types/margin-rate-numbers.png" }) {
            ...fadeIn
        }
    }
`
const Ul = styled.ul`
    list-style: disc;
    font-size: var(--text-size-s);
`

const Li = styled.li`
    font-size: var(--text-size-s);
`
const ImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 3.2rem;
`
const Contracts = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('How margin contracts work')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'When dealing with a traditional broker, one lot (100,000 units) of EUR/USD pair with a unit price of 1.10 USD will cost you 110,000 USD',
                        )}
                    </Text>
                    <Text mb="4rem">
                        {localize(
                            'However, if your broker allows you a 1% margin, you will be able to open a position worth 110,000 USD by paying only 1,100 USD. A leverage of 100:1 will also give you the same level of market exposure as trading on 1% margin. ',
                        )}
                    </Text>
                    <Header as="h3" mb="1.2rem">
                        {localize('How to calculate margin for products on Deriv')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'When trading on Deriv, you can calculate the margin allowed for a contract by using one of the formulas below:',
                        )}
                    </Text>
                    <Ul jc="center" ai="center">
                        <Li>
                            <Text mb="4rem">
                                {localize(
                                    'The leverage formula: This formula calculates margin as Volume in lots x lot size x asset price / leverage = margin. The leverage formula is used in determining the margin for forex currency pairs and commodity pairs.',
                                )}
                            </Text>
                            <ImageWrapper>
                                <QueryImage
                                    data={data['margin_numbers']}
                                    alt="Trade types margin numbers"
                                />
                            </ImageWrapper>
                        </Li>
                        <Li>
                            <Text mb="4rem">
                                {localize(
                                    'The margin rate formula: This formula calculates margin as Volume in lots x lot size x asset price x margin rate = margin. The margin rate formula is used in determining the margin for cryptocurrency contracts.',
                                )}
                            </Text>
                            <ImageWrapper>
                                <QueryImage
                                    data={data['margin_rate_numbers']}
                                    alt="Trade types margin rate numbers"
                                />
                            </ImageWrapper>
                        </Li>
                    </Ul>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default Contracts
