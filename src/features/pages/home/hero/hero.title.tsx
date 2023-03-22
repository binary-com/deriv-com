import React from 'react'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Box from 'features/components/atoms/box'

const HeroTitle = () => {
    return (
        <Box as="div">
            <Typography.Heading as="h5" size={'xs'} weight="normal">
                <Localize translate_text="_t_Get the widest range of markets, trades and platforms_t_" />
            </Typography.Heading>
        </Box>
    )
}

export default HeroTitle
