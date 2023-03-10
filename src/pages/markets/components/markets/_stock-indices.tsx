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
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { localize, Localize } from 'components/localization'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type StockIndicesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    simple_step_content[1].text =
        '_t_Open a real account, make a deposit, and start trading stocks, indices and other markets._t_'

    return (
        <div>
            <WhyTrade
                header={<Localize translate_text="_t_Why trade stocks & indices on Deriv_t_" />}
            >
                {stock_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt={content.alt} />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_tab_name={'stock-indices'} market_content={stock_cfds} />}
                DigitalOptions={
                    <DigitalOptions
                        market_name={localize('_t_stocks & indices_t_')}
                        options_list={stock_options}
                    />
                }
                display_title={
                    <Localize translate_text="_t_Stocks & indices trades available on Deriv_t_" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="_t_Start trading stocks & indices on Deriv in 3 simple steps_t_" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="stock_indices" />
        </div>
    )
}

export default StockIndices
