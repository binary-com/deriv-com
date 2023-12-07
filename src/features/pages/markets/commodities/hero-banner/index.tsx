import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@deriv/quill-design'
import { localize } from 'components/localization'

const HeroBanner = () => {
    return (
        <Hero.ContentLimit
            title={localize('_t_Commodities_t_')}
            description={localize(
                '_t_Trade popular assets in the commodities market such as silver, gold, oil, and more without owning the underlying asset. Speculate on the price movements and benefit from our high leverage and competitive spreads._t_',
            )}
            content={() => (
                <StaticImage
                    src="../../../../../images/migration/markets/commodities.png"
                    alt={localize('_t_Commodities banner_t_')}
                    loading="eager"
                    formats={['webp', 'auto']}
                />
            )}
        >
            <div className="flex gap-gap-md">
                <Button size="lg">{localize('_t_Open demo Account_t_')}</Button>
                <Button size="lg" variant="secondary" colorStyle="black">
                    {localize('_t_Commodities FAQs_t_')}
                </Button>
            </div>
        </Hero.ContentLimit>
    )
}

export default HeroBanner
