import React from 'react'
import styled from 'styled-components'
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
import { deriv_app_url } from 'common/utility'

const query = graphql`
    query {
        dbot: file(relativePath: { eq: "interim-dbot.png" }) {
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
                    <QueryImage data={data['dbot']} width="54rem" />
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
                        <QueryImage data={data['dbot']} width="30rem" />
                    </MobileWrapper>

                    <MarLeft width="auto" fd="column" ai="center">
                        <White as="h3" mb="3rem" align="center">
                            {localize('Love Binary Bot?')}
                        </White>
                        <FitButton
                            external="true"
                            white
                            to={deriv_app_url + '/bot'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {localize('Try DBot on Deriv.com')}
                        </FitButton>
                    </MarLeft>
                </Responsive>
            </Height>
        </>
    )
}

export default LoveTrading
