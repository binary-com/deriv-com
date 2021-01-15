import React from 'react'
import {
    CardContainer,
    CardWrapper,
    ContentContainer,
    IconWrapper,
    TextWrapper,
    Title,
} from '../style/_join-us'
import content from '../content/_join-us'
import { localize } from 'components/localization'

const JoinUs = () => (
    <ContentContainer>
        <Title>{localize('Join us and get the tools you need for a successful IT career')}</Title>
        <CardContainer>
            {content.map((card, index) => (
                <CardWrapper key={index}>
                    <IconWrapper src={card.src} alt={card.alt} />
                    <TextWrapper>
                        <strong>{card.bold_text}</strong>&nbsp;{card.normal_text}
                    </TextWrapper>
                </CardWrapper>
            ))}
        </CardContainer>
    </ContentContainer>
)

export default JoinUs
