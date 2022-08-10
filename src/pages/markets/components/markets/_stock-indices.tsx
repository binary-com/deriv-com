import React from 'react'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import stock_content from '../../static/content/_stock'
import { stock_cfds } from '../../static/content/_cfds'
import { stock_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { localize, Localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import { useCountryRule } from 'components/hooks/use-country-rule'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type StockIndicesProps = {
    simple_step_content: SimpleStepsContent[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const { is_uk } = useCountryRule()

    simple_step_content[1].text = localize(
        'Open a real account, make a deposit, and start trading stocks, indices and other markets.',
    )
    return (
        <div>
            <WhyTrade
                header={<Localize translate_text="Why trade stocks & indices on Deriv" />}
                text={
                    <Localize translate_text="Trade global stocks of your favourite household brands and international stock market indices on Deriv. Our stocks & indices offer competitively priced equities and asset baskets that you can trade outside the regular hours of major stock markets." />
                }
            >
                {stock_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_tab_name={'stock-indices'} market_content={stock_cfds} />}
                DigitalOptions={
                    !is_uk && (
                        <DigitalOptions
                            market_name={localize('stocks & indices')}
                            options_list={stock_options}
                        />
                    )
                }
                display_title={
                    <Localize translate_text="Stocks & indices trades available on Deriv" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading stocks & indices on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="stock_indices" />
        </div>
    )
}

export default StockIndices
