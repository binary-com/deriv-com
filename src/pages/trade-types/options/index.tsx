import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import { Hero } from '../components/_style'
import PageNotFound from '../../404'
import WhatAreTheOptions from './_what-are-options'
import { SEO, SmallContainer } from 'components/containers'
import Layout from 'components/layout/layout'
import CommonHeaderSection from 'components/elements/common-header-section'
import Button from 'components/custom/_button'
import { localize, WithIntl } from 'components/localization'
import { StepperView } from 'components/elements'
import useRegion from 'components/hooks/use-region'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
const HowOptionsWorks = Loadable(() => import('./_how-options-works'))
const OptionsToTrade = Loadable(() => import('./_options-to-trade'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))

const meta_attributes = {
    og_title: localize('Options trading | Trading types | Deriv'),
    og_description: localize(
        'Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets.',
    ),
}

const ButtonContainer = styled.div`
    margin-bottom: 16.4rem;

    @media ${device.tablet} {
        margin-bottom: 0;
    }
`

const OptionsItems = [
    {
        title: 'Practise',
        subtitle:
            'Open a demo account and get unlimited virtual funds to practise on our platforms — Deriv Trader, SmartTrader, and Deriv Bot.',
    },
    {
        title: 'Trade',
        subtitle: 'Open a real account, make a deposit, and start trading options for real.',
    },
    {
        title: 'Withdraw',
        subtitle:
            'Conveniently withdraw your funds through any of our supported withdrawal methods.',
    },
]

const Options = () => {
    const handleSignup = useHandleSignup()
    const { is_row } = useRegion()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (is_loaded) {
        return is_row ? (
            <Layout>
                <SEO
                    title={localize('Options trading | Trade digital options on Deriv')}
                    description={localize(
                        'Explore what are options on Deriv. Learn how to start trading options with forex, synthetics, stocks & indices, and baskets.',
                    )}
                    meta_attributes={meta_attributes}
                />
                <Hero jc="center" ai="center">
                    <CommonHeaderSection
                        title="_t_Options_t_"
                        title_text_color="var(--color-red)"
                        title_font_size="6.4rem"
                    />
                </Hero>
                <WhatAreTheOptions />
                <HowOptionsWorks />
                <OptionsToTrade />
                <SmallContainer direction="column" ai="flex-start">
                    <CommonHeaderSection
                        title="_t_Start trading options on Deriv_t_"
                        title_font_size="3.2rem"
                        margin_title="15rem 0 7rem 0"
                    />
                    <StepperView items={OptionsItems} />
                    <ButtonContainer>
                        <Button label="Create free demo account" primary onClick={handleSignup} />
                    </ButtonContainer>
                </SmallContainer>
                <MarketsAvailable />
            </Layout>
        ) : (
            <PageNotFound />
        )
    }

    return (
        <>
            <SEO
                title={localize('Options trading | Trade types | Deriv')}
                description={localize(
                    'Learn about options trading on Deriv. Earn payouts by correctly predicting price movements in forex, synthetic indices, and other popular financial markets.',
                )}
            />
        </>
    )
}

export default WithIntl()(Options)
