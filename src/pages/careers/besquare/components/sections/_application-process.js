import React from 'react'
import application_process from '../../static/content/_application-process'
import {
    ContentContainer,
    GridContainer,
    IconWrapper,
    ItemContainer,
    LineWrapper,
    Line02Wrapper,
} from '../../static/style/_application-process'
import { TextWrapper, Title } from '../../static/style/_common'
import { Line01, Line02 } from '../../static/images/_application-process'
import { Show } from 'components/containers'

const ApplicationProcess = () => (
    <ContentContainer>
        <Title as="h2">{application_process.title}</Title>
        <LineWrapper src={Line01} alt="Dotted line" />
        <GridContainer>
            {application_process.content.map((card, index) => (
                <ItemContainer key={index}>
                    <IconWrapper src={card.src} alt={card.alt} width="56" height="56" />
                    <TextWrapper
                        max_width={['240px', '280px']}
                        font_size={['24px', '16px']}
                        line_height={['36px', '24px']}
                        text_align={['left', 'center']}
                    >
                        {card.text}
                    </TextWrapper>
                    {index + 1 !== application_process.content.length && (
                        <Line02Wrapper>
                            <Show.Mobile min_width="tabletL" style={{ margin: '16px auto' }}>
                                <img src={Line02} alt="Dotted line" />
                            </Show.Mobile>
                        </Line02Wrapper>
                    )}
                </ItemContainer>
            ))}
        </GridContainer>
    </ContentContainer>
)

export default ApplicationProcess
