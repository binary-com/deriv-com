import React from 'react'
import {
    Container,
    ContentContainer,
    ContentWrapper,
    TextWrapper,
    Title,
} from '../style/_what-is-besquare'
import { GreenMarkIcon } from '../images/_common'
import what_is_be_square from '../content/_what-is-besquare'
import Card from './_card'

const WhatIsBeSquare = () => {
    const style = {
        card_wrapper: {
            max_width: ['unset', '328px'],
            grid_template_columns: ['16px auto'],
            grid_column_gap: ['12px'],
            align_items: 'start',
            justify_content: 'center',
            background_color: ['var(--color-white)'],
            box_shadow: '0 4px 8px rgba(14, 14, 14, 0.1)',
            border_radius: '4px',
            margin: ['0 0 24px'],
            padding: ['0 12px', '12px'],
        },
        icon_wrapper: {
            width: ['16px'],
            height: ['16px'],
            margin: '12px 0 0 12px',
        },
        text_wrapper: {
            max_width: ['438px', '300px'],
            padding: ['8px 8px 12px', '12px 12px 12px 8px'],
        },
    }

    const custom_icon = {
        src: GreenMarkIcon,
        alt: 'Green mark icon',
    }
    return (
        <Container>
            <ContentContainer>
                <ContentWrapper>
                    <Title>{what_is_be_square.title}</Title>
                    <TextWrapper
                        max_width="384px"
                        max_width_m="292px"
                        margin_bottom_m="16px"
                        margin_top="8px"
                        margin_top_m="16px"
                    >
                        {what_is_be_square.subtitle}
                    </TextWrapper>
                </ContentWrapper>
                <ContentWrapper>
                    {what_is_be_square.content.map((text, index) => (
                        <Card
                            key={index}
                            card_content={{ text }}
                            style={style}
                            custom_icon={custom_icon}
                        />
                    ))}
                </ContentWrapper>
            </ContentContainer>
        </Container>
    )
}

export default WhatIsBeSquare
