import React from 'react'
import MarketSlider from './market-slider'
import BottomText from './bottom-text'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'

const HomeMarkets = () => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="secondary"
            padding_block="20x"
            md={{
                padding_block: '40x',
                margin_block: '20x',
            }}
        >
            <Typography.Heading as="h1" size="xlarge" align="center" mb="10x">
                <Localize translate_text="_t_Markets_t_" />
            </Typography.Heading>
            <MarketSlider />
            <BottomText />
        </Container.Fixed>
    )
}

export default HomeMarkets
