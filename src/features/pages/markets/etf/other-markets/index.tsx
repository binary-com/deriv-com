import React from 'react'
import MarketsMainSlider from '../carousel-markets'
import { ETFOtherMarkets } from './data'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Card from 'features/components/atoms/card'

const OtherMarkets = () => {
    return (
        <Container.Fluid as="section" padding_block="20x">
            <Flex.Box direction="col" gap="12x">
                <Typography.Heading
                    as="h3"
                    size="small"
                    align="center"
                    padding_inline="8x"
                    pb="10x"
                    lg={{ padding_block: '20x', padding_inline: '40x' }}
                >
                    <Localize translate_text="_t_Other markets you might be interested in_t_" />
                </Typography.Heading>
            </Flex.Box>

            <Flex.Box visible="phone-and-tablet" md={{ direction: 'row' }} direction="col" gap="4x">
                {ETFOtherMarkets.map((card) => (
                    <Card.Primary
                        header={card.header}
                        description={card.description}
                        icon={card.icon}
                        link={card.link}
                        key={card.id}
                    />
                ))}
            </Flex.Box>
            <Flex.Box
                visible="larger-than-tablet"
                md={{ direction: 'row' }}
                direction="col"
                gap="4x"
            >
                <MarketsMainSlider cards={ETFOtherMarkets} />
            </Flex.Box>
        </Container.Fluid>
    )
}

export default OtherMarkets
