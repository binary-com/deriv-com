import React from 'react'
import styled from 'styled-components'
import MarginCalculator from './_margin-calculator'
import SwapCalculator from './_swap-calculator'
import device from 'themes/device'
import { Box, Flex, Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { getLocationHash, isBrowser, scrollTop } from 'common/utility'
import Patterns from 'images/common/trade-tools/trade-tools-bg.png'
import Signup, { Appearances } from 'components/custom/signup'

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
`
const Separator = styled.div`
    position: absolute;
    width: 100%;
    top: -2px;
    height: 2px;
    background-color: var(--color-grey-21);
`

const Item = styled.div`
    padding: 1.2rem 2.4rem;
    border-bottom: ${(props) => props.name === props.active_tab && '2px solid var(--color-red)'};
    cursor: pointer;
    z-index: 10;

    h4 {
        color: var(--color-black);
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
    @media (max-width: 468px) {
        ${Header} {
            font-size: 16px;
        }
    }
`

const TraderTools = () => {
    const [active_tab, setTab] = useTabState()
    React.useEffect(() => {
        if (getLocationHash() === active_tab) return
        if (getLocationHash().length === 0) {
            setTab('marginCalculator')
            isBrowser() && window.history.pushState(null, null, '#marginCalculator')
        } else {
            setTab(getLocationHash())
        }
        scrollTop()
    }, [getLocationHash()])

    const handleTabChange = (tab_name) => {
        setTab(tab_name)
        isBrowser() && window.history.pushState(null, null, `#${tab_name}`)
    }

    return (
        <Layout>
            <SEO
                title={localize('Trade tools')}
                description={localize('Swap calculator and Margin calculator')}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" color="white" align="center">
                        {localize('Traders’ tools')}
                    </Header>
                </Container>
            </Hero>
            <Flex pt="4rem" background="var(--color-grey-23)">
                <Item
                    onClick={() => handleTabChange('marginCalculator')}
                    active_tab={active_tab}
                    name="marginCalculator"
                >
                    <Header as="h4">{localize('Margin calculator')}</Header>
                </Item>
                <Item
                    onClick={() => handleTabChange('swapCalculator')}
                    active_tab={active_tab}
                    name="swapCalculator"
                >
                    <Header as="h4">{localize('Swap calculator')}</Header>
                </Item>
            </Flex>
            <Box position="relative">
                <Separator />
                {active_tab === 'marginCalculator' && <MarginCalculator />}
                {active_tab === 'swapCalculator' && <SwapCalculator />}
            </Box>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

const useTabState = () => {
    const [active_tab, setActiveTab] = React.useState('marginCalculator')
    const setTab = (tab) => {
        if (tab === active_tab) return
        setActiveTab(tab)
    }
    return [active_tab, setTab]
}

export default WithIntl()(TraderTools)
