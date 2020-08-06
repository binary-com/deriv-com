import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Section,
    Responsive,
    AbsoluteWrapper,
    MarLeft,
    White,
    MobileWrapper,
} from '../_love-trading'
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

const Height = styled(Section)`
    min-height: 306px;
    display: flex;
    align-items: center;

    @media (max-width: 1390px) {
        min-height: auto;
    }
`

const LoveTrading = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Height p="3.2rem 0">
                <AbsoluteWrapper>
                    <QueryImage data={data['deriv']} width="54rem" />
                </AbsoluteWrapper>
                <Responsive jc="space-between" position="relative" height="100%">
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
                                to="mailto:partners@deriv.com"
                            >
                                partners@deriv.com
                            </LocalizedLinkText>
                        </Text>
                    </Flex>
                    <MobileWrapper>
                        <QueryImage data={data['deriv']} width="30rem" />
                    </MobileWrapper>

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
            </Height>
        </>
    )
}

export default LoveTrading
