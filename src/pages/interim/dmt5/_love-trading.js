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
import PlatformMt5 from 'images/common/interim-bg-dmt5.png'

const Mt5Section = styled(Section)`
    background-image: url(${PlatformMt5});
    background-size: 80% 100%;
`

const Mt5Wrapper = styled(AbsoluteWrapper)`
    left: 30%;
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
                <Mt5Wrapper>
                    <QueryImage data={data['dmt5']} width="54rem" />
                </Mt5Wrapper>
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
                        <QueryImage data={data['dmt5']} width="30rem" />
                    </MobileWrapper>

                    <MarLeft width="auto" fd="column" ai="center">
                        <White as="h3" mb="3rem" align="center">
                            {localize('Love MT5 on Binary.com?')}
                        </White>
                        <FitButton
                            external="true"
                            white
                            to={deriv_app_url + '/mt5'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {localize('Try MT5 on Deriv.com')}
                        </FitButton>
                    </MarLeft>
                </Responsive>
            </Mt5Section>
        </>
    )
}

export default LoveTrading
