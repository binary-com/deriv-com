import React from 'react'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Box from 'features/components/atoms/box'

const HeroTitle = () => {
    return (
        <Box as="div">
            <Typography.Heading as="h5" size={4}>
                <Localize translate_text="_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived._t_" />
            </Typography.Heading>
        </Box>
    )
}

export default HeroTitle
