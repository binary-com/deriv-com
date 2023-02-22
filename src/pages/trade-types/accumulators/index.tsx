import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import { Hero } from '../components/_style'
import PageNotFound from '../../404'
import WhatAreAccumulators from './_what-are-accumulators'
import { SEO, SmallContainer } from 'components/containers'
import Layout from 'components/layout/layout'
import Button from 'components/custom/_button'
import CommonHeaderSection from 'components/elements/common-header-section'
import OptionsNavTab from 'pages/markets/components/sections/_options-nav-tab'
import { localize, WithIntl } from 'components/localization'
import { StepperView } from 'components/elements'
import useRegion from 'components/hooks/use-region'
const HowAccumulatorsWork = Loadable(() => import('./_how-accumulators-works'))
const AccumulatorsToTrade = Loadable(() => import('./_accumulators-to-trade'))

const meta_attributes = {
    og_title: localize('Options trading | Trading types | Deriv'),
    og_description: localize(
        'Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets.',
    ),
}

const ButtonContainer = styled.div`
    margin-bottom: 16.4rem;
`

const Accumulators = () => {
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
                <OptionsNavTab route_from={'accumulators'} route_offset={650} />
                <WhatAreAccumulators />
                <HowAccumulatorsWork />
                <AccumulatorsToTrade />
                <SmallContainer direction="column" ai="flex-start">
                    <CommonHeaderSection
                        title="_t_Start trading options on Deriv_t_"
                        title_font_size="3.2rem"
                        margin_title="15rem 0 7rem 0"
                    />
                    <StepperView
                        first_step_title="_t_Practise_t_"
                        first_step_subtitle="_t_Open a demo account on Deriv and practise with an unlimited amount of virtual funds._t_"
                        second_step_title="_t_Trade_t_"
                        second_step_subtitle="_t_Open a real account, make a deposit, and start trading accumulators for real._t_"
                        third_step_title="_t_Withdraw_t_"
                        third_step_subtitle="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_"
                    />
                    <ButtonContainer>
                        <Button label="Create free demo account" primary />
                    </ButtonContainer>
                </SmallContainer>
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

export default WithIntl()(Accumulators)
