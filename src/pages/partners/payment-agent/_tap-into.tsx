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
    margin: 0 7.2rem;

    @media (max-width: 1310px) {
        justify-content: center;

        ${Flex} {
            margin-right: 0;
            margin-bottom: 2.4rem;
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 280px;
    max-width: 48.6rem;
`

const TapInto = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <WrapContainer justify="flex-end">
                <Flex direction="column" mr="2.4rem" max_width="48.6rem">
                    <Header as="h3" type="page-title" mb="1.6rem">
                        {localize('Tap into an established and growing market')}
                    </Header>
                    <Header as="h4" type="subtitle-2" weight="normal">
                        {localize(
                            'Reach hundreds of traders on our platform looking for ways to fund their accounts through local bank wires and e-payment methods.',
                        )}
                    </Header>
                </Flex>
                <Wrapper>
                    <QueryImage
                        data={data['payment_agent']}
                        alt={localize('Girl talking to a group of people')}
                        width="100%"
                        height="28rem"
                    />
                </Wrapper>
            </WrapContainer>
        </SectionContainer>
    )
}

export default TapInto
