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
import { application_process_content } from '../helper/_card-content'
import { Line01, Line02 } from '../images/_application-process'
import { localize } from 'components/localization'

const ApplicationProcess = () => (
    <div>
        <ContentContainer>
            <Title>{localize('Application process')}</Title>
            <LineWrapper src={Line01} />
            <GridContainer>
                {application_process_content.map((process, index) => (
                    <ItemContainer key={index}>
                        <IconWrapper src={process.src} alt={process.alt} width="56" height="56" />
                        <TextWrapper>{process.text}</TextWrapper>
                        {index + 1 !== application_process_content.length && (
                            <Line02Wrapper src={Line02} />
                        )}
                    </ItemContainer>
                ))}
            </GridContainer>
        </ContentContainer>
    </div>
)

export default ApplicationProcess
