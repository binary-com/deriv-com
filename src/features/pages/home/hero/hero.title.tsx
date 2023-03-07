import React, { HTMLAttributes } from 'react'
import { Localize } from 'components/localization'
import Typography from 'features/components/typography'
import useRegion from 'components/hooks/use-region'

const HeroTitle = (props: HTMLAttributes<HTMLDivElement>) => {
    const { is_eu, is_row } = useRegion()

    return (
        <div {...props}>
            <Typography as={'h2'} type="sub-section-title">
                {is_eu && (
                    <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived." />
                )}
                {is_row && (
                    <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived." />
                )}
            </Typography>
        </div>
    )
}

export default HeroTitle
