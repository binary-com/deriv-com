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
import application_process from '../content/_application-process'
import { Line01, Line02 } from '../images/_application-process'

const ApplicationProcess = () => (
    <div>
        <ContentContainer>
            <Title>{application_process.title}</Title>
            <LineWrapper src={Line01} alt="Dotted line" />
            <GridContainer>
                {application_process.content.map((card, index) => (
                    <ItemContainer key={index}>
                        <IconWrapper src={card.src} alt={card.alt} width="56" height="56" />
                        <TextWrapper>{card.text}</TextWrapper>
                        {index + 1 !== application_process.content.length && (
                            <Line02Wrapper src={Line02} alt="Dotted line" />
                        )}
                    </ItemContainer>
                ))}
            </GridContainer>
        </ContentContainer>
    </div>
)

export default ApplicationProcess
