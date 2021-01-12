import React from 'react'
import {
    Container,
    ContentContainer,
    TextWrapper,
    Title,
    TitleWrapper,
} from '../style/_what-lies-ahead'
import { localize } from 'components/localization'

const WhatLiesAhead = () => (
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

export default WhatLiesAhead
