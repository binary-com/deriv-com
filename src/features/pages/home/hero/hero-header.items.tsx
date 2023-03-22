import React from 'react'
import { header_items } from './data'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'

const HeroHeaderItems = () => {
    return (
        <FlexBox
            justify="start"
            align="start"
            gap="5x"
            direction="row"
            wrap="wrap"
            md={{
                direction: 'col',
                wrap: 'nowrap',
            }}
        >
            {header_items.map((item) => (
                <Typography.Heading key={item.id} as={'h1'} size={'xxl'} weight="normal">
                    <Localize translate_text={item.text} />
                </Typography.Heading>
            ))}
        </FlexBox>
    )
}

export default HeroHeaderItems
