import React from 'react'
import { CardContainer } from '../../static/style/_advantages'
import { Title } from '../../static/style/_common'
import advantages from '../../static/content/_advantages'
import Card from '../helper/_card'
import { Container } from 'components/containers'

const Advantages = () => {
    const style = {
        card_wrapper: {
            width: ['auto'],
            max_width: ['auto', '328px'],
            height: ['244px', '180px'],
            grid_template_rows: ['64px 68px auto', '48px 44px auto'],
            padding: ['32px 16px 32px 32px', '24px 16px 24px 24px'],
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

    const getTitle = (title: React.ReactNode) => (
        <Title
            as="h3"
            font_size={['24px', '16px']}
            line_height={['36px', '20px']}
            padding={['24px 0 8px', '16px 0 8px']}
        >
            {title}
        </Title>
    )
    return (
        <Container direction={'column'}>
            <Title as="h2" padding={['80px 0 40px', '40px 0 16px']}>
                {advantages.title}
            </Title>
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
