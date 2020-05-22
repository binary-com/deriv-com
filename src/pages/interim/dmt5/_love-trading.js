import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Section, Responsive, AbsoluteWrapper, MarLeft, FitButton, White } from '../_love-trading'
import CtaBinary from '../_cta-binary'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { deriv_app_url } from 'common/utility'
import PlatformMt5 from 'images/common/interim-bg-dmt5.png'

const Mt5Section = styled(Section)`
    background-image: url(${PlatformMt5});
`

const Mt5MarLeft = styled(MarLeft)`
    margin-left: 1.2rem;
`

const query = graphql`
    query {
        dmt5: file(relativePath: { eq: "interim-dmt5.png" }) {
            ...fadeIn
        }
    }
`

const LoveTrading = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Mt5Section p="3.2rem 0">
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
                    <AbsoluteWrapper>
                        <QueryImage data={data['dmt5']} width="100%" height="29.6rem" />
                    </AbsoluteWrapper>

                    <Mt5MarLeft width="auto" fd="column" ai="center">
                        <White as="h3" mb="3rem" align="center">
                            {localize('Love MT5 on Binary.com?')}
                        </White>
                        <FitButton
                            external
                            white
                            to={deriv_app_url + '/mt5'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {localize('Try MT5 on Deriv.com')}
                        </FitButton>
                    </Mt5MarLeft>
                </Responsive>
            </Mt5Section>
        </>
    )
}

export default LoveTrading
