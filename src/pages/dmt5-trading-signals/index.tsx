import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Hero, SmallContainer } from './_style'
import HowTo from './_how-to'
import { Signal } from './_signal'
import Subscription from './_subscription'
import { SEO, Flex, Box } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { useTabStateQuery } from 'components/hooks/use-tab-state-query'
import device from 'themes/device'

const meta_attributes = {
    og_title: localize('Deriv MetaTrader 5 trading signals | Resources | Deriv'),
    og_description: localize(
        'Subscribe to Deriv MetaTrader 5 trading signals to copy the trades of experienced traders, or become a signal provider and share your strategies.',
    ),
}
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

type ItemProps = {
    active_tab: 'signal-subscriber' | 'signal-provider'
    name: 'signal-subscriber' | 'signal-provider'
}

const Item = styled.div<ItemProps>`
    margin-top: 4rem;
    padding: 1.2rem 1.6rem;
    border-bottom: ${(props) =>
        props.name === props.active_tab ? '2px solid var(--color-red)' : ''};
    cursor: pointer;
    z-index: 10;
    white-space: nowrap;

    ${Header} {
        font-size: 2.4rem;
        width: max-content;
        text-align: center;
    }
    h4 {
        color: var(--color-black-3);
        font-weight: ${(props) => (props.name === props.active_tab ? 'bold' : 'normal')};
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
    const [active_tab, setActiveTab] = useTabStateQuery(['signal-subscriber', 'signal-provider'])
    const [is_mounted, setMounted] = useState(false) //needs to fix bug with hightlight of the 1st loading
    const [signal_subscriber, signal_provider] = [
        active_tab === 'signal-subscriber',
        active_tab === 'signal-provider',
    ]

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Layout>
            <SEO
                description={localize(
                    'Subscribe to Deriv MetaTrader 5 trading signals to copy the trades of experienced traders, or become a signal provider and share your strategies.',
                )}
                title={localize('Deriv MetaTrader 5 trading signals | Resources | Deriv')}
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Deriv MT5 signals')}
                    </Header>
                </SmallContainer>
            </Hero>
            <TabsContainer>
                {is_mounted && (
                    <Item
                        onClick={() => setActiveTab('signal-subscriber')}
                        active_tab={active_tab}
                        name="signal-subscriber"
                    >
                        <Header as="h4">{localize('Signal subscriber')}</Header>
                    </Item>
                )}
                {is_mounted && (
                    <Item
                        onClick={() => setActiveTab('signal-provider')}
                        active_tab={active_tab}
                        name="signal-provider"
                    >
                        <Header as="h4">{localize('Signal provider')}</Header>
                    </Item>
                )}
            </TabsContainer>
            <Box position="relative">
                <Separator />
                {signal_subscriber && <Signal content={signal_content_subscriber} />}
                {signal_provider && <Signal content={signal_content_provider} />}
            </Box>
            <HowTo active_tab={active_tab} />
            {signal_subscriber && <Subscription />}
        </Layout>
    )
}

export default WithIntl()(DMT5TradingSignals)
