import React from 'react'
import { CTA } from '@deriv-com/blocks'
import { localize } from 'components/localization'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

const NewToTrading = () => {
    return (
        <CTA.V5
            className=""
            title={localize('_t_New to trading?_t_')}
            description={localize(
                '_t_Use our demo account and learn how to trade by using risk-free virtual funds._t_',
            )}
            background="gray"
        >
            <TradersHubCtaButton variant="primary" colorStyle="coral" size="lg" />
        </CTA.V5>
    )
}

export default NewToTrading
