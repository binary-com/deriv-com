import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@deriv/quill-design'
import { localize } from 'components/localization'

const HeroBanner = () => {
    return (
        <Hero.ContentLimit
            title={localize('_t_Exchange-traded funds_t_')}
            description={localize(
                '_t_Exchange-traded funds (ETFs) allow you to diversify your portfolio with assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets._t_',
            )}
            content={() => (
                <StaticImage
                    src="../../../../../images/migration/markets/etf.png"
                    alt={localize('_t_ETF banner_t_')}
                    loading="eager"
                    formats={['webp', 'auto']}
                />
            )}
        >
            <div className="flex gap-gap-md">
                <Button size="lg">{localize('_t_Open demo Account_t_')}</Button>
                <Button size="lg" variant="secondary" colorStyle="black">
                    {localize('_t_ETF FAQs_t_')}
                </Button>
            </div>
        </Hero.ContentLimit>
    )
}

export default HeroBanner
