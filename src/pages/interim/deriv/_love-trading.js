import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Section,
    Responsive,
    AbsoluteWrapper,
    MarLeft,
    FitButton,
    White,
    MobileWrapper,
} from '../_love-trading'
import CtaBinary from '../_cta-binary'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "smarttrader.png" }) {
            ...fadeIn
        }
    }
`

const LoveTrading = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section p="3.2rem 0">
                <AbsoluteWrapper>
                    <QueryImage data={data['deriv']} width="54rem" />
                </AbsoluteWrapper>
                <Responsive jc="space-between" position="relative">
                    <Flex fd="column" ai="center" max_width="28.2rem">
                        <Header as="h3" mb="4rem" align="center">
                            {localize('Be among the first to try Deriv.com')}
                        </Header>
                        <FitButton secondary to="/">
                            {localize('Visit Deriv.com now')}
                        </FitButton>
                        <CtaBinary />
                    </Flex>

                    <MobileWrapper>
                        <QueryImage data={data['deriv']} width="30rem" />
                    </MobileWrapper>

                    <MarLeft width="auto" fd="column" ai="center">
                        <White as="h3" mb="3rem" align="center">
                            {localize('Love trading on Binary.com’s signature platform?')}
                        </White>
                        <FitButton
                            external
                            white
                            to="trading"
                            is_smarttrader_link
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {localize('Try SmartTrader on Deriv.com')}
                        </FitButton>
                        <CtaBinary is_white />
                    </MarLeft>
                </Responsive>
            </Section>
        </>
    )
}

export default LoveTrading
