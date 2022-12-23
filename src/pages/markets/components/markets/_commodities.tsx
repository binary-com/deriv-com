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
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { Localize, localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type CommoditiesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const Commodities = ({ simple_step_content }: CommoditiesProps) => {
    const { is_eu } = useCountryRule()
    simple_step_content[1].text = (
        <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
    )

    return (
        <>
            <WhyTrade header={<Localize translate_text="Why trade commodities on Deriv" />}>
                {commodities.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt={content.alt} />}
                    />
                ))}
            </WhyTrade>
            {is_eu ? (
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
