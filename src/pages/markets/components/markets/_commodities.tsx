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
import useRegion from 'components/hooks/use-region'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type CommoditiesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const Commodities = ({ simple_step_content }: CommoditiesProps) => {
    const { is_eu } = useRegion()
    simple_step_content[1].text = (
        <Localize translate_text="_t_Open a real account, make a deposit, and start trading commodities and other markets._t_" />
    )

    return (
        <>
            <WhyTrade header={<Localize translate_text="_t_Why trade commodities on Deriv_t_" />}>
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
                        <Localize translate_text="_t_Commodity trades available on Deriv_t_" />
                    }
                />
            ) : (
                <AvailableTrades
                    CFDs={<CFDs market_content={commodities_cfds} />}
                    DigitalOptions={
                        <DigitalOptions
                            market_name={localize('_t_commodities_t_')}
                            options_list={commodities_options}
                        />
                    }
                    display_title={
                        <Localize translate_text="_t_Commodity trades available on Deriv_t_" />
                    }
                />
            )}
            <SimpleSteps
                header={
                    <Localize translate_text="_t_Start trading commodities on Deriv in 3 simple steps_t_" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="commodities" />
        </>
    )
}

export default Commodities
