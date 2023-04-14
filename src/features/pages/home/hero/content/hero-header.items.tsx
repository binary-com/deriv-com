import React from 'react'
import { header_items } from './data'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'

const HeroHeaderItems = () => {
    return (
        <Flex.Box
            justify="start"
            align="start"
            gap="1x"
            direction="row"
            wrap="wrap"
            md={{
                direction: 'col',
                wrap: 'nowrap',
            }}
        >
            {header_items.map((item) => (
                <Typography.Heading key={item.id} as={'h1'} size={'medium'} weight="normal">
                    <Localize translate_text={item.text} />
                </Typography.Heading>
            ))}
        </Flex.Box>
    )
}

export default HeroHeaderItems
