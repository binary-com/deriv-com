import React from 'react'
import Loadable from '@loadable/component'
import PageNotFound from '../../../404'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import { basket_indices_content, basket_indices_content_eu } from '../../static/content/_basket'
import type { BasketIndicesContent, SimpleStepContentElement } from '../../static/content/_basket'
import { basket_cfds } from '../../static/content/_cfds'
import { basket_multiplier } from '../../static/content/_multipliers'
import { basket_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { Localize, localize } from 'components/localization'
import { DerivStore } from 'store'
import { useCountryRule } from 'components/hooks/use-country-rule'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type BasketIndicesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const BasketIndices = ({ simple_step_content }: BasketIndicesProps) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const { is_uk_eu, is_row } = useCountryRule()
    return (
        <>
            {is_row && (
                <>
                    <WhyTrade
                        header={<Localize translate_text="Why trade basket indices on Deriv" />}
                        text={
                            <Localize translate_text="Trade your favourite currency against a basket of major currencies and benefit from reduced risk and volatility." />
                        }
                    >
                        {(!is_eu_country ? basket_indices_content : basket_indices_content_eu).map(
                            (content: BasketIndicesContent, index) => (
                                <StyledBox
                                    key={index}
                                    text={content.text}
                                    icon={<img src={content.src} alt="" />}
                                />
                            ),
                        )}
                    </WhyTrade>
                    <AvailableTrades
                        CFDs={<CFDs market_content={basket_cfds} />}
                        DigitalOptions={
                            <DigitalOptions
                                market_type="basket-indices"
                                market_name={localize('basket indices')}
                                options_list={basket_options}
                            />
                        }
                        Multipliers={<Multipliers market_content={basket_multiplier} />}
                        display_title={
                            <Localize translate_text="Basket indices trades  available on Deriv" />
                        }
                    />
                    <SimpleSteps
                        header={
                            <Localize translate_text="Start trading basket indices on Deriv in 3 simple steps" />
                        }
                        content={simple_step_content}
                        sign_up
                    />
                    <OtherMarkets except="basket_indices" />
                </>
            )}
            {is_uk_eu && <PageNotFound />}
        </>
    )
}

export default BasketIndices
