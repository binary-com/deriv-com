import React from 'react'
import { ETFOtherMarkets } from './data'
import { item_container_card } from './styles.module.scss'
import CardBasic from 'features/components/atoms/card/card-primary'
import { CardType } from 'features/components/atoms/card/card-primary/type'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const OtherMarkets = () => {
    return (
        <Container.Fluid as="section">
            <Flex.Box direction="col" gap="12x">
                <Typography.Heading
                    as="h1"
                    size="small"
                    align="center"
                    padding_inline="8x"
                    pb="10x"
                    lg={{ padding_block: '20x', padding_inline: '40x' }}
                >
                    <Localize translate_text="_t_Other markets you might be interested in_t_" />
                </Typography.Heading>
            </Flex.Box>
            <Flex.Box lg={{ direction: 'row' }} direction="col" gap="12x">
                {ETFOtherMarkets.map((data) => {
                    return <CardBasic item={data} key={data.id} />
                })}
            </Flex.Box>
        </Container.Fluid>
    )
}

export default OtherMarkets
