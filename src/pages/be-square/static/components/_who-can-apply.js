import React from 'react'
import {
    CardContainer,
    Container,
    ContentContainer,
    HeaderWrapper,
    TextWrapper,
    Title,
} from '../style/_who-can-apply'
import who_can_apply from '../content/_who-can-apply'
import { RedMarkIcon } from '../images/_common'
import Card from './_card'

const WhoCanApply = () => {
    const style = {
        card_wrapper: {
            grid_template_columns: ['24px auto', '16px auto'],
            grid_column_gap: ['16px', '8px'],
        },
        icon_wrapper: {
            width: ['24px', '16px'],
            height: ['24px', '16px'],
        },
        text_wrapper: {
            max_width: ['446px', '304px'],
        },
    }
    const custom_icon = {
        src: RedMarkIcon,
        alt: 'Red mark icon',
    }

    return (
        <Container>
            <ContentContainer>
                <HeaderWrapper>
                    <Title>{who_can_apply.title}</Title>
                    <TextWrapper
                        font_size="24px"
                        line_height="36px"
                        max_width="384px"
                        font_size_m="18px"
                        line_height_m="22px"
                        max_width_m="320px"
                    >
                        {who_can_apply.subtitle}
                    </TextWrapper>
                </HeaderWrapper>
                <CardContainer>
                    {who_can_apply.content.map((text, index) => (
                        <Card
                            key={index}
                            style={style}
                            card_content={{ text }}
                            custom_icon={custom_icon}
                        />
                    ))}
                </CardContainer>
            </ContentContainer>
        </Container>
    )
}

export default WhoCanApply
