import React from 'react'
import Loadable from '@loadable/component'
import PageNotFound from '../../../404'
import AvailableTrades from '../helper/_available-trades'
import { basket_indices_content, basket_indices_content_eu } from '../../static/content/_basket'
import type { BasketIndicesContent } from '../../static/content/_basket'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { StyledBox } from '../../static/style/_markets-style'
import { basket_cfds } from '../../static/content/_cfds'
import { basket_multiplier } from '../../static/content/_multipliers'
import { basket_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { TradeDetails } from '../sections/_trade-details'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type BasketIndicesProps = {
    simple_step_content: SimpleStepContentElement[]
}
const BasketIndices = ({ simple_step_content }: BasketIndicesProps) => {
    const { is_eu, is_row } = useRegion()
    return (
        <>
            {is_row && (
                <>
                    <TradeDetails
                        description={
                            <Localize translate_text="Trade your favourite currency against a basket of major currencies and benefit from reduced risk and volatility." />
                        }
                    />
                    <AvailableTrades
                        CFDs={
                            <CFDs market_content={basket_cfds} market_tab_name={'basket-indices'} />
                        }
                        DigitalOptions={
                            <DigitalOptions
                                market_type="basket-indices"
                                market_name={localize('basket indices')}
                                options_list={basket_options}
                            />
                        }
                        Multipliers={<Multipliers market_content={basket_multiplier} />}
                        display_title={
                            <Localize translate_text="Baskets trades  available on Deriv" />
                        }
                    />
                    <FullWidthMultiColumn
                        header={<Localize translate_text="Why trade baskets on Deriv" />}
                    >
                        {(!is_eu ? basket_indices_content : basket_indices_content_eu).map(
                            (content: BasketIndicesContent, index) => (
                                <StyledBox
                                    key={index}
                                    text={content.text}
                                    icon={<img src={content.src} alt={content.alt} />}
                                />
                            ),
                        )}
                    </FullWidthMultiColumn>
                    <SimpleSteps
                        header={
                            <Localize translate_text="Start trading baskets on Deriv in 3 simple steps" />
                        }
                        content={simple_step_content}
                        sign_up
                    />
                    <OtherMarkets except="derived" />
                </>
            )}
            {is_eu && <PageNotFound />}
        </>
    )
}

export default BasketIndices
