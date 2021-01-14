import React from 'react'
import {
    CardContainer,
    Container,
    ContentContainer,
    TextWrapper,
    Title,
    TitleWrapper,
} from '../style/_what-lies-ahead'
import { what_lies_ahead_content } from '../helper/_card-content'
import Card from './_card'
import { localize } from 'components/localization'

const WhatLiesAhead = () => {
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
                    {what_lies_ahead_content.map((card, index) => (
                        <Card key={index} card_content={card} />
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
