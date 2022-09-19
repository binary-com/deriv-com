import React from 'react'
import { TextWrapper } from '../../static/style/_common'
import { Container, SectionContainer } from 'components/containers'

const Description = () => (
    <SectionContainer color={'white'} padding={'0'}>
        <Container>
            <TextWrapper
                margin-top={'40px'}
                max_width={['996px', '700px', '360px']}
                font_size={['24px', '18px']}
                line_height={['36px', '22px']}
                text_align={['center']}
                padding={['173px 0 80px', '80px 0 40px']}
                width={'100%'}
            >
                Deriv’s 6-month graduate programme gives you a holistic learning experience with
                real-world scenarios, backed by a well-structured curriculum. Learn essential skills
                from innovative IT teams in an established, global FinTech company. If you’re
                exceptional at embracing BeSquare challenges and our company values, you’ll get an
                immediate job offer from Deriv at the end of the programme.
            </TextWrapper>
        </Container>
    </SectionContainer>
)

export default Description
