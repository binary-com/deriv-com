import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Container, SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text, QueryImage } from 'components/elements'

const query = graphql`
    query {
        payment_agent: file(relativePath: { eq: "payment-agent.png" }) {
            ...fadeIn
        }
    }
`
const WrapContainer = styled(Container)`
    flex-wrap: wrap;

    @media (max-width: 1310px) {
        justify-content: center;

        ${Flex} {
            margin-right: 0;
            margin-bottom: 2.4rem;
        }
        ${Header} {
            text-align: center;
        }
        ${Text} {
            text-align: center;
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 48.6rem;
`

const TapInto = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <WrapContainer justify="flex-end">
                <Flex direction="column" mr="2.4rem" max_width="58.8rem">
                    <Header as="h3" size="var(--text-size-header-1)" mb="1.6rem">
                        {localize('Tap into an established and growing market')}
                    </Header>
                    <Text size="var(--text-size-m)">
                        {localize(
                            'Reach hundreds of traders on our platform looking for ways to fund their accounts through local bank wires and e-payment methods.',
                        )}
                    </Text>
                </Flex>
                <Wrapper>
                    <QueryImage
                        data={data['payment_agent']}
                        alt={localize('Payment agent')}
                        width="100%"
                    />
                </Wrapper>
            </WrapContainer>
        </SectionContainer>
    )
}

export default TapInto
