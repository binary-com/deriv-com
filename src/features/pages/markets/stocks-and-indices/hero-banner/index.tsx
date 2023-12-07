import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@deriv/quill-design'
import { localize } from 'components/localization'

const HeroBanner = () => {
    return (
        <Hero.ContentLimit
            title={localize('_t_Stocks & indices_t_')}
            description={localize(
                '_t_Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours._t_',
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
                    {localize('_t_Stocks & indices FAQs_t_')}
                </Button>
            </div>
        </Hero.ContentLimit>
    )
}

export default HeroBanner
