import React from 'react'
import {
    ContentContainer,
    GridContainer,
    IconWrapper,
    ItemContainer,
    LineWrapper,
    Line02Wrapper,
    TextWrapper,
    Title,
} from '../style/_application-process'
import content from '../content/_application-process'
import { Line01, Line02 } from '../images/_application-process'
import { localize } from 'components/localization'

const ApplicationProcess = () => (
    <div>
        <ContentContainer>
            <Title>{localize('Application process')}</Title>
            <LineWrapper src={Line01} alt="Dotted line" />
            <GridContainer>
                {content.map((card, index) => (
                    <ItemContainer key={index}>
                        <IconWrapper src={card.src} alt={card.alt} width="56" height="56" />
                        <TextWrapper>{card.text}</TextWrapper>
                        {index + 1 !== content.length && (
                            <Line02Wrapper src={Line02} alt="Dotted line" />
                        )}
                    </ItemContainer>
                ))}
            </GridContainer>
        </ContentContainer>
    </div>
)

export default ApplicationProcess
