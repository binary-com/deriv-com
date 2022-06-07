import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { WhyTrade } from '../sections/_why-trade'
import commodities from '../../static/content/_commodities'
import { commodities_cfds } from '../../static/content/_cfds'
import { commodities_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { Localize, localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import { DerivStore } from 'store'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type CommoditiesProps = {
    simple_step_content: SimpleStepsContent[]
}

const Commodities = ({ simple_step_content }: CommoditiesProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    simple_step_content[1].text = (
        <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
    )

    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade commodities on Deriv" />}
                text={
                    <Localize translate_text="Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted." />
                }
            >
                {commodities.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    />
                ))}
            </WhyTrade>
            {is_eu_country ? (
                <AvailableTrades
                    CFDs={<CFDs market_content={commodities_cfds} />}
                    display_title={
                        <Localize translate_text="Commodity trades available on Deriv" />
                    }
                />
            ) : (
                <AvailableTrades
                    CFDs={<CFDs market_content={commodities_cfds} />}
                    DigitalOptions={
                        <DigitalOptions
                            market_name={localize('commodities')}
                            options_list={commodities_options}
                        />
                    }
                    display_title={
                        <Localize translate_text="Commodity trades available on Deriv" />
                    }
                />
            )}
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading commodities on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="commodities" />
        </>
    )
}

export default Commodities
