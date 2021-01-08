import React from 'react'
import {
    CardContainer,
    CardWrapper,
    Container,
    IconWrapper,
    TextWrapper,
    Title,
} from '../style/_advantages'
import { advantages_content } from '../helper/_card-content'
import { localize } from 'components/localization'

const Advantages = () => (
    <Container>
        <Title>{localize('BeSquare advantages')}</Title>
        <CardContainer>
            {advantages_content.map((card, index) => (
                <CardWrapper key={index}>
                    <IconWrapper src={card.src} alt={card.alt} />
                    <Title
                        font_size="24px"
                        font_size_m="16px"
                        line_height="36px"
                        line_height_m="20px"
                        padding="24px 0 8px"
                        padding_m="16px 0 8px"
                    >
                        {card.title}
                    </Title>
                    <TextWrapper>{card.text}</TextWrapper>
                </CardWrapper>
            ))}
        </CardContainer>
    </Container>
)

export default Advantages
