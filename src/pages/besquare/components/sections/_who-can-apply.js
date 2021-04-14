import React from 'react'
import {
    CardContainer,
    ContentContainer,
    HeaderWrapper,
    Section,
} from '../../static/style/_who-can-apply'
import { TextWrapper, Title } from '../../static/style/_common'
import who_can_apply from '../../static/content/_who-can-apply'
import { RedMarkIcon } from '../../static/images/_common'
import Card from '../helper/_card'

const WhoCanApply = () => {
    const style = {
        card_wrapper: {
            grid_template_columns: ['24px auto', '24px auto', '16px auto'],
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
        <Section>
            <ContentContainer>
                <HeaderWrapper>
                    <Title as="h2">{who_can_apply.title}</Title>
                    <TextWrapper
                        font_size={['24px', '18px']}
                        line_height={['36px', '22px']}
                        max_width={['384px', '320px']}
                        margin_top={['0', '8px']}
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
        </Section>
    )
}

export default WhoCanApply
