import React, { HTMLAttributes } from 'react'
import { header_items } from './data'
import { Localize } from 'components/localization'
import Typography from 'features/components/typography'

const HeroHeaderItems = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            {header_items.map((item) => (
                <Typography key={item.id} as={'h1'} semibold type={'main-landing-title'}>
                    <Localize translate_text={item.text} />
                </Typography>
            ))}
        </div>
    )
}

export default HeroHeaderItems
