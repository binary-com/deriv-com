import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import styled from 'styled-components'
import { Hero } from '../components/_style'
import WhatAreAccumulators from './_what-are-accumulators'
import PageNotFound from 'features/pages/404'
import { SEO, SmallContainer, TMetaAttributes } from 'components/containers'
import Layout from 'components/layout/layout'
import Button from 'components/custom/_button'
import CommonHeaderSection from 'components/elements/common-header-section'
import OptionsNavTab from 'pages/markets/components/sections/_options-nav-tab'
import { WithIntl } from 'components/localization'
import { StepperView } from 'components/elements'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useRegion from 'components/hooks/use-region'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TString } from 'types/generics'
import { TGatsbyHead } from 'features/types'

const HowAccumulatorsWork = Loadable(() => import('./_how-accumulators-works'))
const AccumulatorsToTrade = Loadable(() => import('./_accumulators-to-trade'))

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Options trading | Trading types | Deriv_t_',
    og_description:
        '_t_Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets._t_',
}

const ButtonContainer = styled.div`
    margin-bottom: 16.4rem;
`

const Accumulators = () => {
    const { is_row } = useRegion()
    const [is_mobile] = useBrowserResize()
    const [is_loaded, setLoaded] = useState(false)
    const { is_accumulators_released } = usePlatformQueryParam()

    const handleSignup = useHandleSignup()

    useEffect(() => {
        setLoaded(true)
    }, [])

    const AccumulatorsItems: { title: TString; subtitle: TString }[] = [
        {
            title: '_t_Practise_t_',
            subtitle:
                '_t_Open a demo account on Deriv and practise with an unlimited amount of virtual funds._t_',
        },
        {
            title: '_t_Trade_t_',
            subtitle:
                '_t_Open a real account, make a deposit, and start trading accumulators for real._t_',
        },
        {
            title: '_t_Withdraw_t_',
            subtitle:
                '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        },
    ]

    if (is_loaded) {
        return is_accumulators_released && is_row ? (
            <Layout>
                <Hero jc="center" ai="center">
                    <CommonHeaderSection
                        title="_t_Options_t_"
                        title_text_color="var(--color-red)"
                        title_font_size="6.4rem"
                    />
                </Hero>
                <OptionsNavTab route_from="accumulators" />
                <WhatAreAccumulators />
                <HowAccumulatorsWork />
                <AccumulatorsToTrade />
                <SmallContainer direction="column" ai="flex-start">
                    <CommonHeaderSection
                        title="_t_Start trading accumulators on Deriv_t_"
                        title_font_size={is_mobile ? '24px' : '32px'}
                        margin_title="15rem 0 7rem 0"
                    />
                    <StepperView items={AccumulatorsItems} />
                    <ButtonContainer>
                        <Button label="Create free demo account" onClick={handleSignup} primary />
                    </ButtonContainer>
                </SmallContainer>
            </Layout>
        ) : (
            <PageNotFound />
        )
    }

    return <React.Fragment></React.Fragment>
}

export default WithIntl()(Accumulators)

export const Head = ({ pageContext }: TGatsbyHead) => {
    const { is_row } = useRegion()
    const { is_accumulators_released } = usePlatformQueryParam()
    const is_options = is_accumulators_released && is_row

    return (
        <SEO
            title={
                is_options
                    ? '_t_Options trading | Trade digital options on Deriv_t_'
                    : '_t_Options trading | Trade types | Deriv_t_'
            }
            description={
                is_options
                    ? '_t_Explore what are options on Deriv. Learn how to start trading options with forex, synthetics, stocks & indices, and baskets._t_'
                    : '_t_Learn about options trading on Deriv. Earn payouts by correctly predicting price movements in forex, synthetic indices, and other popular financial markets._t_'
            }
            meta_attributes={is_options ? meta_attributes : {}}
            pageContext={pageContext}
        />
    )
}
