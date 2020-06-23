import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { OurStory } from './_our-story'
import Leaders from './_leaders'
import { Container, SEO, SectionContainer } from 'components/containers'
import { getLocationHash, isBrowser } from 'common/utility'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Header, Text } from 'components/elements'
import Background from 'images/common/aboutus-bg.png'
import BackgroundMobile from 'images/common/aboutus-bg-mobile.png'
import device, { size } from 'themes/device'

const StyledSection = styled(SectionContainer)`
    padding: 20rem 0;
    position: relative;
    background: black;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;

    @media ${device.tabletL} {
        padding: 15.25rem 0 14.75rem;
        background-image: url(${BackgroundMobile});
    }
`
const StyledContainer = styled(Container)``

const Title = styled(Header)`
    line-height: 1.25;
    z-index: 1;

    @media ${device.tabletL} {
        font-size: var(--text-size-header-4);
        line-height: 1.5;
    }
`
const Subtitle = styled(Text)`
    max-width: 83.6rem;
    text-align: center;
    margin-top: 1.6rem;
    color: var(--color-white);
    z-index: 1;

    @media ${device.tabletL} {
        font-size: 2.25rem;
    }
`

const useTabState = (tab) => {
    const [active_tab, setActiveTab] = useState(tab)
    const setTab = (tab) => {
        if (tab === active_tab) return
        setActiveTab(tab)
        navigate(`#${tab}`)
    }
    return [active_tab, setTab]
}
// Test notification netlify
const About = () => {
    const [is_mobile, setMobile] = useState(false)
    const [active_tab, setTab] = useTabState('story')
    const is_story = active_tab === 'story'
    const is_leadership = active_tab === 'leadership'
    useEffect(() => {
        const new_tab = getLocationHash() || 'story'
        setTab(new_tab)
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    })

    return (
        <Layout>
            <SEO
                title={localize('About Us | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv.com - A Binary.com brand, is a pioneer and award-winning online trading platform in the trading market.',
                )}
            />
            <StyledSection>
                <StyledContainer direction="column">
                    <Title as="h1" color="white" align="center">
                        {localize('About us')}
                    </Title>
                    <Subtitle>
                        {localize(
                            'The story of Deriv.com starts in 1999. Regent Markets Group, the founding company, was established with a mission to make online trading accessible to the masses. The Group has since rebranded and evolved, but its founding mission remains unchanged.',
                        )}
                    </Subtitle>
                    <Subtitle>
                        {localize(
                            'Our evolution is powered by over 20 years of customer focus and innovation.',
                        )}
                    </Subtitle>
                </StyledContainer>
            </StyledSection>
            {is_story && <OurStory is_mobile_menu={is_mobile} />}
            {is_leadership && <Leaders />}
        </Layout>
    )
}

export default WithIntl()(About)
