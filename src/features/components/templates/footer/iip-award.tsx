import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

export const IIPAward = () => {
    return (
        <div className="flex max-lg:justify-center">
            <StaticImage
                src="../../../../images/common/migration/footer/investors-in-people.png"
                alt={localize('_t_investors in people - platinum_t_')}
                placeholder="none"
                width={160}
                height={32}
                layout="fixed"
            />
        </div>
    )
}
