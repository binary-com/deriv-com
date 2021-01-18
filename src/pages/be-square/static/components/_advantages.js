import React from 'react'
import { CardContainer, Container, Title } from '../style/_advantages'
import advantages from '../content/_advantages'
import Card from './_card'

const Advantages = () => {
    const style = {
        card_wrapper: {
            width: ['auto'],
            height: ['244px', '180px'],
            padding: ['32px'],
            border_radius: '16px',
            border: '1px solid var(--color-grey-2)',
        },
        icon_wrapper: {
            width: ['64px', '48px'],
            height: ['64px', '48px'],
        },
        text_wrapper: {
            max_width: ['320px', '280px'],
        },
    }

    const getTitle = (title) => (
        <Title
            font_size="24px"
            font_size_m="16px"
            line_height="36px"
            line_height_m="20px"
            padding="24px 0 8px"
            padding_m="16px 0 8px"
        >
            {title}
        </Title>
    )
    return (
        <Container>
            <Title>{advantages.title}</Title>
            <CardContainer>
                {advantages.content.map((card, index) => (
                    <Card
                        key={index}
                        card_content={card}
                        style={style}
                        title_component={getTitle(card.title)}
                    />
                ))}
            </CardContainer>
        </Container>
    )
}

export default Advantages
