import React from 'react'
import application_process from '../content/_application-process'
import {
    ContentContainer,
    GridContainer,
    IconWrapper,
    ItemContainer,
    LineWrapper,
    Line02Wrapper,
} from '../style/_application-process'
import { TextWrapper, Title } from '../style/_common'
import { Line01, Line02 } from '../images/_application-process'
import { Show } from 'components/containers'

const ApplicationProcess = () => (
    <div>
        <ContentContainer>
            <Title>{application_process.title}</Title>
            <Show.Desktop max_width="laptop">
                <LineWrapper src={Line01} alt="Dotted line" />
            </Show.Desktop>
            <GridContainer>
                {application_process.content.map((card, index) => (
                    <ItemContainer key={index}>
                        <IconWrapper src={card.src} alt={card.alt} width="56" height="56" />
                        <TextWrapper
                            max_width={['240px', '216px']}
                            font_size={['24px', '16px']}
                            line_height={['36px', '24px']}
                            text_align={['left', 'center']}
                        >
                            {card.text}
                        </TextWrapper>
                        {index + 1 !== application_process.content.length && (
                            <Line02Wrapper>
                                <Show.Mobile min_width="tablet" style={{ margin: '16px auto' }}>
                                    <img src={Line02} alt="Dotted line" />
                                </Show.Mobile>
                            </Line02Wrapper>
                        )}
                    </ItemContainer>
                ))}
            </GridContainer>
        </ContentContainer>
    </div>
)

export default ApplicationProcess
