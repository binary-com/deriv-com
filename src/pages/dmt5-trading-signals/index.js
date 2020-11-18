import React from 'react'
import styled from 'styled-components'
import { Hero, SmallContainer, StyledHeader } from './components/_style'
import HowTo from './components/_how-to'
import { Signal } from './_signal'
import SignalSteps from './_signal-steps'
import Subscription from './_subscription'
import { SEO, Flex, Box } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { getLocationHash, isBrowser, scrollTop } from 'common/utility'
import device from 'themes/device'

const signal_content_subscriber = {
    header: 'Benefits of subscribing to MT5 signals',
    text:
        'The MT5 trading signals service allows you to copy the trades of more experienced traders to your MT5 account. Once you’ve subscribed to a signal, the provider’s deals will be automatically replicated on your Deriv MT5 trading account each time they place a trade.',
    list: [
        'Minimise trading risk by copying from expert traders.',
        'Save time – no need to open, monitor, and close trades.',
        'Easy to set up – no installation required.',
        'Full disclosure of each providers’ performances.',
        'No hidden fees or commissions.',
    ],
}

const signal_content_provider = {
    header: 'Benefits of being an MT5 signals provider',
    text:
        'If you are a professional trader, the MT5 trading signals service allows you to share your strategies with other traders for free or a subscription fee that you determine. When traders subscribe to your signal, your deals are automatically replicated on their accounts each time you place a trade.',
    list: [
        'Easy to set up – no installation required',
        'Additional income stream from monthly subscriptions',
        'Automated copying – no extra work from you',
    ],
}

const TabsContainer = styled(Flex)`
    display: flex;
`

const Item = styled.div`
    margin-top: 4rem;
    padding: 1.2rem 1.6rem;
    border-bottom: ${(props) =>
        props.name === props.active_tab ? '2px solid var(--color-red)' : ''};
    cursor: pointer;
    z-index: 10;

    ${Header} {
        font-size: 2.4rem;
        width: max-content;
    }
    h4 {
        color: var(--color-black-3);
        font-weight: ${(props) => (props.name === props.active_tab ? 'bold' : 'normal')};
    }
    @media ${device.tabletL} {
        padding: 1.5rem 3rem;
        margin-top: 24px;

        ${Header} {
            font-size: 16px;
        }
    }
`
const Separator = styled.div`
    position: absolute;
    width: 100%;
    top: -2px;
    height: 2px;
    background-color: var(--color-grey-21);
`

const DMT5TradingSignals = () => {
    const [active_tab, setTab] = useTabState()

    React.useEffect(() => {
        if (getLocationHash() === active_tab) return
        if (getLocationHash().length === 0) {
            setTab('signal-subscriber')
            isBrowser() && window.history.pushState(null, null, '#signal-subscriber')
        } else {
            setTab(getLocationHash())
        }
        scrollTop()
    }, [getLocationHash()])

    React.useEffect(() => {}, [active_tab])

    const handleTabChange = (tab_name) => {
        setTab(tab_name)
        isBrowser() && window.history.pushState(null, null, `#${tab_name}`)
    }

    return (
        <Layout>
            <SEO description={localize('Deriv MT5 signals')} title={localize('DMT5 Signals')} />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <StyledHeader as="h1" color="white" align="center">
                        {localize('Deriv MT5 signals')}
                    </StyledHeader>
                </SmallContainer>
            </Hero>
            <TabsContainer>
                <Item
                    onClick={() => handleTabChange('signal-subscriber')}
                    active_tab={active_tab}
                    name="signal-subscriber"
                >
                    <Header as="h4">{localize('Signal subscriber')}</Header>
                </Item>
                <Item
                    onClick={() => handleTabChange('signal-provider')}
                    active_tab={active_tab}
                    name="signal-provider"
                >
                    <Header as="h4">{localize('Signal provider')}</Header>
                </Item>
            </TabsContainer>
            <Box position="relative">
                <Separator />
                {active_tab === 'signal-subscriber' && (
                    <Signal content={signal_content_subscriber} />
                )}
                {active_tab === 'signal-provider' && <Signal content={signal_content_provider} />}
            </Box>
            <HowTo Steps={SignalSteps} active_tab={active_tab} />
            {active_tab === 'signal-subscriber' && <Subscription />}
        </Layout>
    )
}

const useTabState = () => {
    const [active_tab, setActiveTab] = React.useState('signal-subscriber')
    const setTab = (tab) => {
        if (tab === active_tab) return
        setActiveTab(tab)
    }
    return [active_tab, setTab]
}

export default WithIntl()(DMT5TradingSignals)
