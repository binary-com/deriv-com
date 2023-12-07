import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@deriv/quill-design'
import { localize } from 'components/localization'

const HeroBanner = () => {
    return (
        <Hero.ContentLimit
            title={localize('_t_Cryptocurrencies_t_')}
            description={localize(
                "_t_Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of the worl's most popular cryptocurrencies._t_",
            )}
            content={() => (
                <StaticImage
                    src="../../../../../images/migration/markets/cryptocurrencies.png"
                    alt={localize('_t_ETF banner_t_')}
                    loading="eager"
                    formats={['webp', 'auto']}
                />
            )}
        >
            <div className="flex gap-gap-md">
                <Button size="lg">{localize('_t_Open demo Account_t_')}</Button>
                <Button size="lg" variant="secondary" colorStyle="black">
                    {localize('_t_Cryptocurrencies FAQs_t_')}
                </Button>
            </div>
        </Hero.ContentLimit>
    )
}

export default HeroBanner
