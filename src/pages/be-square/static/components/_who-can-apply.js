import React from 'react'
import {
    CardContainer,
    Container,
    ContentContainer,
    HeaderWrapper,
    IconWrapper,
    TextWrapper,
    Title,
} from '../style/_who-can-apply'
import { who_can_apply_content } from '../helper/_card-content'
import { RedMarkIcon } from '../images/_common'
import { localize } from 'components/localization'

const WhoCanApply = () => (
    <Container>
        <ContentContainer>
            <HeaderWrapper>
                <Title>{localize('Who can apply? ')}</Title>
                <TextWrapper
                    font_size="24px"
                    line_height="36px"
                    max_width="384px"
                    font_size_m="18px"
                    line_height_m="22px"
                    max_width_m="320px"
                >
                    {localize('To qualify for the programme, you must be:')}
                </TextWrapper>
            </HeaderWrapper>
            <CardContainer>
                {who_can_apply_content.map((text, index) => (
                    <React.Fragment key={index}>
                        <IconWrapper src={RedMarkIcon} alt="red mark icon" width="24" height="24" />
                        <TextWrapper>{text}</TextWrapper>
                    </React.Fragment>
                ))}
            </CardContainer>
        </ContentContainer>
    </Container>
)

export default WhoCanApply
