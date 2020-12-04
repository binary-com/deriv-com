import React from 'react'
import styled from 'styled-components'
import { Hero, SmallContainer, StyledHeader } from './_style'
import HowTo from './_how-to'
import { Signal } from './_signal'
import SignalSteps from './_signal-steps'
import Subscription from './_subscription'
import { SEO, Flex, Box } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { Header } from 'components/elements'
import { useTabState } from 'components/hooks/use-tab-state'
import device from 'themes/device'

const signal_content_subscriber = {
    header: (
        <Localize
            translate_text="Benefits of subscribing to MT5 signals"
            components={[<br key={0} />]}
        />
    ),
    text: localize(
        'The MT5 trading signals service allows you to copy the trades of more experienced traders to your MT5 account. Once you’ve subscribed to a signal, the provider’s deals will be automatically replicated on your Deriv MT5 trading account each time they place a trade.',
    ),
    list: [
        localize('Minimise trading risk by copying from expert traders.'),
        localize('Save time – no need to open, monitor, and close trades.'),
        localize('Easy to set up – no installation required.'),
        localize('Full disclosure of each providers’ performances.'),
        localize('No hidden fees or commissions.'),
    ],
}

const signal_content_provider = {
    header: (
        <Localize
            translate_text="Benefits of being an MT5<0 /> signals provider"
            components={[<br key={0} />]}
        />
    ),
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
        padding: 12px 8px 12px 7px;
        margin-top: 24px;

        ${Header} {
            font-size: 20px;
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
    const [active_tab, setActiveTab] = useTabState(['signal-subscriber', 'signal-provider'])

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
                    onClick={() => setActiveTab('signal-subscriber')}
                    active_tab={active_tab}
                    name="signal-subscriber"
                >
                    <Header as="h4">{localize('Signal subscriber')}</Header>
                </Item>
                <Item
                    onClick={() => setActiveTab('signal-provider')}
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

export default WithIntl()(DMT5TradingSignals)
