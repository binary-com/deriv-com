import React from 'react'
import {
    CardContainer,
    Container,
    ContentContainer,
    ContentWrapper,
    IconWrapper,
    TextWrapper,
    Title,
} from '../style/_what-is-besquare'
import { MarkIcon } from '../images/_common'
import { card_content } from '../helper/_card-content'
import { localize } from 'components/localization'

const WhatIsBeSquare = () => (
    <Container>
        <ContentContainer>
            <ContentWrapper>
                <Title>{localize('What’s BeSquare?')}</Title>
                <TextWrapper
                    max_width="384px"
                    max_width_m="292px"
                    margin_bottom_m="16px"
                    margin_top="8px"
                    margin_top_m="16px"
                >
                    {localize(
                        'BeSquare is built on the idea that successful professionals are generalists. Here’s an outline of your BeSquare journey that will carry on far beyond the 6 months of the programme:',
                    )}
                </TextWrapper>
            </ContentWrapper>
            <ContentWrapper>
                {card_content.map((element, index) => (
                    <CardContainer key={index}>
                        <IconWrapper src={MarkIcon} alt="mark icon" width="16" height="16" />
                        <TextWrapper
                            max_width="438px"
                            max_width_m="300px"
                            padding="8px 8px 12px"
                            padding_m="12px 12px 12px 8px"
                        >
                            {element}
                        </TextWrapper>
                    </CardContainer>
                ))}
            </ContentWrapper>
        </ContentContainer>
    </Container>
)

export default WhatIsBeSquare
