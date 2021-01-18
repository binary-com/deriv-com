import React from 'react'
import {
    CardContainer,
    Container,
    ContentContainer,
    TextWrapper,
    Title,
    TitleWrapper,
} from '../style/_what-lies-ahead'
import content from '../content/_what-lies-ahead'
import Card from './_card'
import { localize } from 'components/localization'

const WhatLiesAhead = () => {
    const style = {
        card_wrapper: {
            width: ['800px', '500px', '328px'],
            grid_template_columns: ['48px 84% 32px', '32px 77.9% 24px'],
            grid_template_areas: ["'dep-icon title min-max'", "'content content content'"],
            grid_column_gap: ['22px', '8px'],
            align_items: 'center',
            box_shadow: 'inset 0 -1px 0 var(--color-grey-34)',
            background_color: ['unset', 'var(--color-grey-33)'],
            padding: ['0 0 22px', '0 0 17px'],
            margin: ['0 0 32px', '0 0 17px'],
            has_last_child_props: true,
        },
        icon_wrapper: {
            width: ['48px', '32px'],
            height: ['48px', '32px'],
            grid_area: 'dep-icon',
        },
        text_wrapper: {
            max_width: ['100%'],
            font_size: ['24px', '18px'],
            line_height: ['36px', '26px'],
            font_weight: '700',
            grid_area: 'title',
        },
    }
    return (
        <Container>
            <ContentContainer>
                <TitleWrapper>
                    <Title>{localize('What lies ahead')}</Title>
                    <TextWrapper
                        max_width={['792px', '328px']}
                        font_size={['24px', '18px']}
                        line_height={['36px', '26px']}
                        text_align={'center'}
                    >
                        {localize(
                            "Over the course of 6 months, you'll go through 10 modules and face exciting challenges",
                        )}
                    </TextWrapper>
                </TitleWrapper>
                <CardContainer>
                    {content.map((card, index) => (
                        <Card style={style} key={index} card_content={card} has_list={true} />
                    ))}
                </CardContainer>
                <TextWrapper
                    max_width={['791px', '328px']}
                    font_size={['16px', '14px']}
                    line_height={['24px', '20px']}
                    text_align={'center'}
                >
                    {localize(
                        'Besides these hard skills, you’ll learn essential soft skills that are based on Harvard Business Review principles. You’ll also get the chance to extend your professional network and connect with veteran techies as they share their professional experience.',
                    )}
                </TextWrapper>
            </ContentContainer>
        </Container>
    )
}

export default WhatLiesAhead
