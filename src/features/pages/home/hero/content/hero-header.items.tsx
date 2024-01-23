import React from 'react'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import Box from 'features/components/atoms/box'

const HeroHeaderItems = () => {
    return (
        <>
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
                visible={'larger-than-tablet'}
            >
                <Typography.Heading as={'h1'} size={'medium'} weight="normal">
                    <Localize translate_text={'_t_One broker,_t_'} />
                    <br />
                    <Localize translate_text={'_t_countless trading_t_'} />
                    <br />
                    <Localize translate_text={'_t_opportunities_t_'} />
                </Typography.Heading>
            </Flex.Box>
            <Box visible="phone-and-tablet">
                <Typography.Heading as={'h1'} size={'large'} weight="normal">
                    <Localize
                        translate_text={'_t_One broker, countless trading opportunities_t_'}
                    />
                </Typography.Heading>
            </Box>
        </>
    )
}

export default HeroHeaderItems
