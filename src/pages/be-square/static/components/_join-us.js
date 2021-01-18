import React from 'react'
import { CardContainer, ContentContainer, Title } from '../style/_join-us'
import content from '../content/_join-us'
import Card from './_card'
import { localize } from 'components/localization'

const JoinUs = () => {
    const style = {
        card_wrapper: {
            grid_template_columns: ['64px 296px', '48px auto'],
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
        <ContentContainer>
            <Title>
                {localize('Join us and get the tools you need for a successful IT career')}
            </Title>
            <CardContainer>
                {content.map((card, index) => (
                    <Card key={index} card_content={card} style={style} />
                ))}
            </CardContainer>
        </ContentContainer>
    )
}

export default JoinUs
