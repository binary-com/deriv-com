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
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const meta_attributes = {
    og_title: localize('_t_Deriv MetaTrader 5 trading signals | Resources | Deriv_t_'),
    og_description: localize(
        '_t_Subscribe to Deriv MetaTrader 5 trading signals to copy the trades of experienced traders, or become a signal provider and share your strategies._t_',
    ),
}
const signal_content_subscriber = {
    header: (
        <Localize
            translate_text="_t_Benefits of subscribing to MT5 signals_t_"
            components={[<br key={0} />]}
        />
    ),
    text: (
        <Localize translate_text="_t_The MT5 trading signals service allows you to copy the trades of more experienced traders to your MT5 account. Once you’ve subscribed to a signal, the provider’s deals will be automatically replicated on your Deriv MT5 trading account each time they place a trade._t_" />
    ),
    list: [
        <Localize
            translate_text="_t_Minimise trading risk by copying from expert traders._t_"
            key={0}
        />,
        <Localize
            translate_text="_t_Save time – no need to open, monitor, and close trades._t_"
            key={1}
        />,
        <Localize translate_text="_t_Easy to set up – no installation required._t_" key={2} />,
        <Localize
            translate_text="_t_Full disclosure of each providers’ performances._t_"
            key={3}
        />,
        <Localize translate_text="_t_No hidden fees or commissions._t_" key={4} />,
    ],
}

const signal_content_provider = {
    header: (
        <Localize
            translate_text="_t_Benefits of being an MT5<0 /> signals provider_t_"
            components={[<br key={0} />]}
        />
    ),
    text: (
        <Localize translate_text="_t_If you are a professional trader, the MT5 trading signals service allows you to share your strategies with other traders for free or a subscription fee that you determine. When traders subscribe to your signal, your deals are automatically replicated on their accounts each time you place a trade._t_" />
    ),
    list: [
        <Localize translate_text="_t_Easy to set up – no installation required._t_" key={0} />,
        <Localize
            translate_text="_t_Additional income stream from monthly subscriptions._t_"
            key={1}
        />,
        <Localize translate_text="_t_Automated copying – no extra work from you._t_" key={2} />,
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
    const [is_mounted] = usePageLoaded() //needs to fix bug with hightlight of the 1st loading
    const [signal_subscriber, signal_provider] = [
        active_tab === 'signal-subscriber',
        active_tab === 'signal-provider',
    ]

    return (
        <Layout>
            <SEO
                description={localize(
                    '_t_Subscribe to Deriv MetaTrader 5 trading signals to copy the trades of experienced traders, or become a signal provider and share your strategies._t_',
                )}
                title={localize('_t_Deriv MetaTrader 5 trading signals | Resources | Deriv_t_')}
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Deriv MT5 signals_t_" />
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
                        <Header as="h4">
                            <Localize translate_text="_t_Signal subscriber_t_" />
                        </Header>
                    </Item>
                )}
                {is_mounted && (
                    <Item
                        onClick={() => setActiveTab('signal-provider')}
                        active_tab={active_tab}
                        name="signal-provider"
                    >
                        <Header as="h4">
                            <Localize translate_text="_t_Signal provider_t_" />
                        </Header>
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
