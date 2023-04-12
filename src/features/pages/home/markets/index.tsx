import React from 'react'
import MarketSlider from './market-slider'
import BottomText from './bottom-text'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'

const HomeMarkets = () => {
    return (
        <Container.Fixed as="section" padding_block="40x" bgcolor="secondary">
            <Typography.Heading as="h1" size="xlarge" align="center" mb="20x">
                <Localize translate_text="_t_Markets_t_" />
            </Typography.Heading>
            <MarketSlider />
            <BottomText />
        </Container.Fixed>
    )
}

export default HomeMarkets
