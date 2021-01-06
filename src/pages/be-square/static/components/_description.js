import React from 'react'
import { Container, TextWrapper } from '../style/_description'
import { localize } from 'components/localization'

const Description = () => (
    <Container>
        <TextWrapper>
            {localize(
                'Deriv’s 6-month graduate programme gives you a holistic learning experience with real-world scenarios, backed by a well-structured curriculum. Learn essential skills from innovative IT teams in an established, global FinTech company. If you’re exceptional at embracing BeSquare challenges and our company values, you’ll get an immediate job offer from Deriv at the end of the programme.',
            )}
        </TextWrapper>
    </Container>
)

export default Description
