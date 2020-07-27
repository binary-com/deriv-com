import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { OurStory } from './_our-story'
import Leaders from './_leaders'
import { Container, Flex, SEO, SectionContainer } from 'components/containers'
import { getLocationHash, isBrowser, scrollTop } from 'common/utility'
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
const TabsContainer = styled(Flex)`
    padding-top: 3.6rem;
    position: relative;

    @media ${device.tabletL} {
        justify-content: center;
        padding: 0;
    }
`
const Item = styled.div`
    padding: 1.2rem 2.4rem;
    border-bottom: ${(props) =>
        props.name === props.active_tab ? '2px solid var(--color-red)' : ''};
    cursor: pointer;
    z-index: 10;

    h4 {
        color: var(--color-red);
        opacity: ${(props) => (props.name === props.active_tab ? '1' : '0.32')};
        font-weight: ${(props) => (props.name === props.active_tab ? 'bold' : 'normal')};
    }
    @media ${device.tabletL} {
        padding: 1.5rem 3rem;

        ${Header} {
            font-size: 3rem;
            width: max-content;
        }
    }
`
const Separator = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 2px;
    background-color: var(--color-grey-21);
`
// Test notification netlify
const About = () => {
    const [is_mobile, setMobile] = useState(false)
    const [active_tab, setTab] = useState()
    const handleTabChange = (tab_name) => {
        setTab(tab_name)
        isBrowser() && window.history.pushState(null, null, `#${tab_name}`)
    }
    useEffect(() => {
        if (getLocationHash() === active_tab) return
        if (getLocationHash().length === 0) {
            setTab('story')
            isBrowser() && window.history.pushState(null, null, '#story')
        } else {
            setTab(getLocationHash())
        }
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
        scrollTop()
    }, [getLocationHash()])

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
            <TabsContainer>
                <Item onClick={() => handleTabChange('story')} active_tab={active_tab} name="story">
                    <Header as="h4">{localize('Our story')}</Header>
                </Item>
                <Item
                    onClick={() => handleTabChange('leadership')}
                    active_tab={active_tab}
                    name="leadership"
                >
                    <Header as="h4">{localize('Our leadership')}</Header>
                </Item>
                <Separator />
            </TabsContainer>
            {active_tab === 'story' && <OurStory is_mobile_menu={is_mobile} />}
            {active_tab === 'leadership' && <Leaders />}
        </Layout>
    )
}

export default WithIntl()(About)
