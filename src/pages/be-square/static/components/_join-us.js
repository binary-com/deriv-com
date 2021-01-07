import React from 'react'
import {
    CardsContainer,
    ContentContainer,
    IconWrapper,
    TextContainer,
    TextWrapper,
    Title,
} from '../style/_join-us'
import { TechExperienceIcon } from '../helper/_image-extractor'
import { Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'

const JoinUs = () => (
    <ContentContainer>
        <Title>{localize('Join us and get the tools you need for a successful IT career')}</Title>
        <CardsContainer>
            <Flex>
                <IconWrapper src={TechExperienceIcon} alt="tech experience icon" />
                <TextContainer>
                    <Localize
                        translate_text="<0>Hands-on tech experience</0><1>by learning directly from all our talented IT teams</1>"
                        components={[
                            <TextWrapper key={0} font_weight="700" />,
                            <TextWrapper key={1} font_weight="400" />,
                        ]}
                    />
                </TextContainer>
            </Flex>
        </CardsContainer>
    </ContentContainer>
)

export default JoinUs
