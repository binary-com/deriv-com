import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@deriv/quill-design'
import { localize } from 'components/localization'

const HeroBanner = () => {
    return (
        <Hero.ContentLimit
            title={localize('_t_Forex trading_t_')}
            description={localize(
                '_t_Trade the most popular forex (FX) currency pairs, and take advantage of our high leverage, tight spreads, and low capital requirements._t_',
            )}
            content={() => (
                <StaticImage
                    src="../../../../../images/migration/markets/forex/forex-banner.png"
                    alt={localize('_t_Forex banner_t_')}
                    loading="eager"
                    formats={['webp', 'auto']}
                />
            )}
        >
            <div className="flex gap-gap-md">
                <Button size="lg">{localize('_t_Create demo Account_t_')}</Button>
                <Button size="lg" variant="secondary" colorStyle="black">
                    {localize('_t_Forex FAQs_t_')}
                </Button>
            </div>
        </Hero.ContentLimit>
    )
}

export default HeroBanner
