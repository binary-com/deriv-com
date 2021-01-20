import React from 'react'
import { CardContainer, ContentContainer } from '../style/_join-us'
import { Title } from '../style/_common'
import join_us from '../content/_join-us'
import Card from './_card'

const JoinUs = () => {
    const style = {
        card_wrapper: {
            grid_template_columns: ['64px 296px', '64px 296px', '48px auto'],
            grid_column_gap: ['24px', '8px'],
            grid_row_gap: ['0', '8px'],
        },
        icon_wrapper: {
            width: ['64px', '48px'],
            height: ['64px', '48px'],
        },
        text_wrapper: {
            max_width: ['296px', '272px'],
            margin: '0 auto',
            width: 'auto',
        },
    }
    return (
        <div>
            <ContentContainer>
                <Title
                    max_width={['690px', '328px']}
                    font_size={['32px', '24px']}
                    line_height={['40px', '30px']}
                >
                    {join_us.title}
                </Title>
                <CardContainer>
                    {join_us.content.map((card, index) => (
                        <Card key={index} card_content={card} style={style} />
                    ))}
                </CardContainer>
            </ContentContainer>
        </div>
    )
}

export default JoinUs
