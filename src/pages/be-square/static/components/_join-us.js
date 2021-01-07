import React from 'react'
import {
    CardContainer,
    CardWrapper,
    ContentContainer,
    IconWrapper,
    TextWrapper,
    Title,
} from '../style/_join-us'
import { join_us_card_content } from '../helper/_card-content'
import { localize, Localize } from 'components/localization'

const JoinUs = () => (
    <ContentContainer>
        <Title>{localize('Join us and get the tools you need for a successful IT career')}</Title>
        <CardContainer>
            {join_us_card_content.map((card, index) => (
                <CardWrapper key={index}>
                    <IconWrapper src={card.src} alt={card.alt} />
                    <TextWrapper>
                        <Localize
                            translate_text={`<0>${card.bold_text}</0> ${card.normal_text}`}
                            components={[<strong key={0} />]}
                        />
                    </TextWrapper>
                </CardWrapper>
            ))}
        </CardContainer>
    </ContentContainer>
)

export default JoinUs
