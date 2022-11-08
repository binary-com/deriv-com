import React from 'react'
import styled from 'styled-components'
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
import { Mobile } from 'components/containers'

const StyledMobile = styled(Mobile)`
    margin: 16px auto;
`

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
                        text_align={['start', 'center']}
                    >
                        {card.text}
                    </TextWrapper>
                    {index + 1 !== application_process.content.length && (
                        <Line02Wrapper>
                            <StyledMobile breakpoint={'tabletL'}>
                                <img src={Line02} alt="Dotted line" />
                            </StyledMobile>
                        </Line02Wrapper>
                    )}
                </ItemContainer>
            ))}
        </GridContainer>
    </ContentContainer>
)

export default ApplicationProcess
