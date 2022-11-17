import React from 'react'
import {
    CardContainer,
    ContentContainer,
    Section,
    TitleWrapper,
} from '../../static/style/_what-lies-ahead'
import { TextWrapper, Title } from '../../static/style/_common'
import what_lies_ahead from '../../static/content/_what-lies-ahead'
import Card from '../helper/_card'

const WhatLiesAhead = () => {
    const style = {
        card_wrapper: {
            width: ['800px', '500px', 'auto'],
            max_width: ['auto', '328px'],
            grid_template_columns: ['48px 84% 32px', '48px 75% 32px', '32px 75% 24px'],
            grid_template_areas: ["'dep-icon title min-max'", "'content content content'"],
            grid_column_gap: ['22px', '8px'],
            align_items: 'center',
            box_shadow: 'inset 0 -1px 0 var(--color-grey-38)',
            background_color: ['unset', 'var(--color-grey-37)'],
            padding: ['0 0 22px', '0 0 17px'],
            margin: ['0 0 32px', '0 0 17px'],
            has_last_child_props: true,
        },
        icon_wrapper: {
            width: ['48px', '32px'],
            height: ['48px', '32px'],
            grid_area: ['dep-icon'],
        },
        text_wrapper: {
            max_width: ['100%'],
            font_size: ['24px', '18px'],
            line_height: ['36px', '26px'],
            weight: 'bold',
            grid_area: ['title'],
        },
    }
    return (
        <Section>
            <ContentContainer>
                <TitleWrapper>
                    <Title as="h2">{what_lies_ahead.title}</Title>
                    <TextWrapper
                        max_width={['792px', '328px']}
                        font_size={['24px', '18px']}
                        line_height={['36px', '26px']}
                        text_align={['center', 'left']}
                    >
                        {what_lies_ahead.subtitle}
                    </TextWrapper>
                </TitleWrapper>
                <CardContainer>
                    {what_lies_ahead.content.map((card, index) => (
                        <Card style={style} key={index} card_content={card} has_list={true} />
                    ))}
                </CardContainer>
                <TextWrapper
                    max_width={['783px', '328px']}
                    font_size={['16px', '14px']}
                    line_height={['24px', '20px']}
                    text_align={['center', 'left']}
                >
                    {what_lies_ahead.text}
                </TextWrapper>
            </ContentContainer>
        </Section>
    )
}

export default WhatLiesAhead
