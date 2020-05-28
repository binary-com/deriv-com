import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section, Responsive, AbsoluteWrapper, MarLeft, White } from '../_love-trading'
import { Flex } from 'components/containers'
import { Header, QueryImage, Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "affiliate.png" }) {
            ...fadeIn
        }
    }
`

const LoveTrading = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section p="3.2rem 0">
                <Responsive jc="space-between" position="relative">
                    <Flex fd="column" ai="center" max_width="28.2rem">
                        <Header as="h3" mb="2.4rem" align="center">
                            {localize('Got more questions?')}
                        </Header>
                        <Text>{localize('Email us at')}</Text>
                        <Text>
                            <LocalizedLinkText
                                color="red"
                                weight="bold"
                                external
                                to="mailto:affiliates@deriv.com"
                            >
                                affiliates@deriv.com
                            </LocalizedLinkText>
                        </Text>
                    </Flex>
                    <AbsoluteWrapper>
                        <QueryImage data={data['deriv']} width="100%" height="29.6rem" />
                    </AbsoluteWrapper>

                    <MarLeft width="auto" fd="column" ai="flex-start">
                        <White as="h3" mb="0.8rem" align="left">
                            {localize('New affiliate login URL')}
                        </White>
                        <Text color="white" size="var(--text-size-m)">
                            {localize('Your Deriv affiliate dashboard,')}
                        </Text>
                        <Text color="white" size="var(--text-size-m)">
                            <Localize
                                translate_text="live on <0>3 June 2020</0>"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </MarLeft>
                </Responsive>
            </Section>
        </>
    )
}

export default LoveTrading
