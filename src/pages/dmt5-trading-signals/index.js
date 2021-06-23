import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Hero, SmallContainer } from './_style'
import HowTo from './_how-to'
import { Signal } from './_signal'
import SignalSteps from './_signal-steps'
import Subscription from './_subscription'
import { SEO, Flex, Box } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
import {
    checkElemInArray,
    getLocationHash,
    isBrowser,
    routeBack,
    setLocationHash,
} from 'common/utility'

const signal_content_subscriber = {
    header: (
        <Localize
            translate_text="Benefits of subscribing to MT5 signals"
            components={[<br key={0} />]}
        />
    ),
    text: (
        <Localize translate_text="The MT5 trading signals service allows you to copy the trades of more experienced traders to your MT5 account. Once you’ve subscribed to a signal, the provider’s deals will be automatically replicated on your Deriv MT5 trading account each time they place a trade." />
    ),
    list: [
        <Localize translate_text="Minimise trading risk by copying from expert traders." key={0} />,
        <Localize
            translate_text="Save time – no need to open, monitor, and close trades."
            key={1}
        />,
        <Localize translate_text="Easy to set up – no installation required." key={2} />,
        <Localize translate_text="Full disclosure of each providers’ performances." key={3} />,
        <Localize translate_text="No hidden fees or commissions." key={4} />,
    ],
}

const signal_content_provider = {
    header: (
        <Localize
            translate_text="Benefits of being an MT5<0 /> signals provider"
            components={[<br key={0} />]}
        />
    ),
    text: (
        <Localize translate_text="If you are a professional trader, the MT5 trading signals service allows you to share your strategies with other traders for free or a subscription fee that you determine. When traders subscribe to your signal, your deals are automatically replicated on their accounts each time you place a trade." />
    ),
    list: [
        <Localize translate_text="Easy to set up – no installation required." key={0} />,
        <Localize translate_text="Additional income stream from monthly subscriptions." key={1} />,
        <Localize translate_text="Automated copying – no extra work from you." key={2} />,
    ],
}

const TabsContainer = styled(Flex)`
    display: flex;
    overflow: auto;

    @media ${device.mobileL} {
        justify-content: space-between;
    }
`

const Item = styled.div`
    margin-top: 4rem;
    padding: 1.2rem 1.6rem;
    border-bottom: ${(props) => props.active ? '2px solid var(--color-red)' : ''};
    cursor: pointer;
    z-index: 10;
    white-space: nowrap;

    ${Header} {
        font-size: 2.4rem;
        width: max-content;
        text-align: center;
        color: var(--color-black-3);
        font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    }
   
    @media ${device.tabletL} {
        padding: 12px 8px 12px 7px;
        margin-top: 24px;

        ${Header} {
            font-size: 20px;
            width: 100%;
        }
    }
    @media ${device.mobileL} {
        width: 100%;
        text-align: center;
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
    const tab_list = ['signal-subscriber', 'signal-provider']
    const location_hash = getLocationHash()
    const [active_tab, setActiveTab] = useState(
        getLocationHash() && checkElemInArray(tab_list, location_hash)
            ? location_hash
            : tab_list[0],
    )

    const [state, setstate] = useState(1)
    useEffect(() => {
        if (!location_hash || !checkElemInArray(tab_list, location_hash)) {
            setLocationHash(active_tab)
        } else {
            setActiveTab(location_hash)
            setstate((x) => x + 1)
            // eslint-disable-next-line
            console.log(" setActiveTab(location_hash)");
            // eslint-disable-next-line
            console.log(state);
        }

    }, [])

    useEffect(() => {
        if (location_hash !== active_tab && isBrowser()) {
            setLocationHash(active_tab)
        }
    }, [active_tab])

    useEffect(() => {
        if (getLocationHash() !== active_tab && checkElemInArray(tab_list, getLocationHash())) {
            setActiveTab(getLocationHash())
        } else if (!checkElemInArray(tab_list, getLocationHash())) {
            routeBack()
        }
    }, [getLocationHash()])
    // eslint-disable-next-line
    console.log("rerender of  the parent component");

    return (
        <Layout>
            <SEO description={localize('Subscribe to Deriv MetaTrader 5 trading signals to copy the trades of experienced traders, or become a signal provider and share your strategies.')} title={localize('Deriv MetaTrader 5 trading signals | Resources | Deriv')} />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Deriv MT5 signals')}
                    </Header>
                </SmallContainer>
            </Hero>
            <TabsContainer>
                {active_tab === 'signal-subscriber'
                    ?
                    <Item
                        onClick={() => setActiveTab('signal-subscriber')}
                        active={true}
                    >
                        <Header>{localize('Signal subscriber')}</Header>
                    </Item>
                    :
                    <Item
                        onClick={() => setActiveTab('signal-subscriber')}
                        active={false}
                    >
                        <Header>{localize('Signal subscriber')}</Header>
                    </Item>}

                {active_tab === 'signal-provider'
                    ?
                    <Item
                        onClick={() => setActiveTab('signal-provider')}
                        active={true}
                    >
                        <Header >{localize('Signal provider')}</Header>
                    </Item> :
                    <Item
                        onClick={() => setActiveTab('signal-provider')}
                        active={false}
                    >
                        <Header >{localize('Signal provider')}</Header>
                    </Item>
                }
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

export default WithIntl()(DMT5TradingSignals)
