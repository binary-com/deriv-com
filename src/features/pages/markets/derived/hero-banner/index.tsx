import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@deriv/quill-design'
import { localize } from 'components/localization'

const HeroBanner = () => {
    return (
        <Hero.ContentLimit
            title={localize('_t_Derived indices_t_')}
            description={localize(
                '_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets._t_',
            )}
            content={() => (
                <StaticImage
                    src="../../../../../images/migration/markets/forex-banner.png"
                    alt={localize('_t_Forex banner_t_')}
                    loading="eager"
                    formats={['webp', 'auto']}
                />
            )}
        >
            <div className="flex gap-gap-md">
                <Button size="lg">{localize('_t_Open demo Account_t_')}</Button>
                <Button size="lg" variant="secondary" colorStyle="black">
                    {localize('_t_Derived indices FAQs_t_')}
                </Button>
            </div>
        </Hero.ContentLimit>
    )
}

export default HeroBanner
