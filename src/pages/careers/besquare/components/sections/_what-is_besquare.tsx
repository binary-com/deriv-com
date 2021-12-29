import React from 'react'
import { ContentContainer, ContentWrapper, Section } from '../../static/style/_what-is-besquare'
import { TextWrapper, Title } from '../../static/style/_common'
import { GreenMarkIcon } from '../../static/images/_common'
import what_is_be_square from '../../static/content/_what-is-besquare'
import Card from '../helper/_card'

const WhatIsBeSquare = () => {
    const style = {
        card_wrapper: {
            max_width: ['486px', '328px'],
            width: ['max-content'],
            grid_template_columns: ['auto auto'],
            grid_column_gap: ['8px'],
            align_items: 'start',
            justify_content: 'center',
            background_color: ['var(--color-white)'],
            box_shadow: '0 4px 8px rgba(14, 14, 14, 0.1)',
            border_radius: '4px',
            margin: ['0 0 24px'],
        },
        icon_wrapper: {
            width: '16px',
            height: '16px',
            margin: ['12px 0 0 16px', '14px 0 0 12px'],
        },
        text_wrapper: {
            max_width: ['446px', '282px'],
            padding: ['8px 8px 8px 0', '12px 12px 12px 0'],
        },
    }

    const custom_icon = {
        src: GreenMarkIcon,
        alt: 'Green mark icon',
    }
    return (
        <Section>
            <ContentContainer>
                <ContentWrapper>
                    <Title
                        as="h2"
                        text_align={'left'}
                        max_width={['450px']}
                        margin={['0', '0 auto']}
                    >
                        {what_is_be_square.title}
                    </Title>
                    <TextWrapper max_width={['486px', '328px']} margin={['8px 0 0', '16px 0']}>
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
        </Section>
    )
}

export default WhatIsBeSquare
