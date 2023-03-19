import React, { HTMLAttributes } from 'react'
import { header_items } from './data'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

const HeroHeaderItems = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            {header_items.map((item) => (
                <Typography.Heading key={item.id} as={'h1'} size={'xxxl'}>
                    <Localize translate_text={item.text} />
                </Typography.Heading>
            ))}
        </div>
    )
}

export default HeroHeaderItems
