import React from 'react'
import { CardContainer } from '../style/_advantages'
import { Title } from '../style/_common'
import advantages from '../content/_advantages'
import Card from './_card'
import { Container } from 'components/containers'

const Advantages = () => {
    const style = {
        card_wrapper: {
            width: ['auto'],
            height: ['244px', '180px'],
            padding: ['32px 0 32px 32px'],
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
            font_size={['24px', '16px']}
            line_height={['36px', '20px']}
            padding={['24px 0 8px', '16px 0 8px']}
        >
            {title}
        </Title>
    )
    return (
        <div>
            <Container direction={'column'}>
                <Title padding={['80px 0 40px', '40px 0 16px']}>{advantages.title}</Title>
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
        </div>
    )
}

export default Advantages
