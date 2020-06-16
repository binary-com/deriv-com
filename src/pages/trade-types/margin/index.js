import React from 'react'
import { SmallContainer, Hero } from '../components/_style'
import Timeline from '../components/_timeline'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Options = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Margin')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" color="white" align="center">
                        {localize('Margin')}
                    </Header>
                </SmallContainer>
            </Hero>
            <Timeline>
                <Timeline.Item title="Practise">
                    {localize(
                        'Open a demo MetaTrader 5 account on Deriv and practise with an unlimited amount of virtual funds.',
                    )}
                </Timeline.Item>
                <Timeline.Item title="Trade">
                    {localize(
                        'Trade with a real Deriv MT5 (DMT5) account and get access to high leverage to trade positions larger than your existing capital.',
                    )}
                </Timeline.Item>
                <Timeline.Item title="Withdraw">
                    {localize(
                        'Conveniently withdraw your funds through any of our supported withdrawal methods.',
                    )}
                </Timeline.Item>
            </Timeline>
        </Layout>
    )
}

export default WithIntl()(Options)
