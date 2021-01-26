import React from 'react'
import faq_content from '../static/content/_faq'
import {
    AccordionWrapper,
    ContentContainer,
    ImageWrapper,
    Section,
    StyledText,
    TextContainer,
    TextWrapper,
    Title,
} from '../static/style/_faq'
import { Accordion, AccordionItem } from 'components/elements'
import { Show } from 'components/containers'
import { localize } from 'components/localization'
import Vector from 'images/svg/be-square/vector.svg'

const FAQ = () => {
    const parent_style = {
        marginBottom: '40px',
    }
    const item_style = {
        padding: '32px 24px',
        background: 'var(--color-grey-8)',
        borderRadius: '0 0 8px 8px',
    }
    const header_style = {
        padding: '24px',
        borderRadius: '8px',
    }
    return (
        <Section>
            <Show.Desktop max_width={'tabletL'}>
                <ImageWrapper src={Vector} />
            </Show.Desktop>
            <ContentContainer>
                <Title>{localize('FAQs')}</Title>
            </ContentContainer>
            <AccordionWrapper>
                <Accordion has_single_state>
                    {faq_content.map((topic, index) => (
                        <AccordionItem
                            key={index}
                            header={topic.title}
                            parent_style={parent_style}
                            style={item_style}
                            header_style={header_style}
                            plus
                        >
                            <TextContainer>
                                {topic.content.map((question, index) => (
                                    <TextWrapper key={index}>
                                        <StyledText weight={'bold'}>{question.title}</StyledText>
                                        <StyledText>{question.subtitle}</StyledText>
                                    </TextWrapper>
                                ))}
                            </TextContainer>
                        </AccordionItem>
                    ))}
                </Accordion>
            </AccordionWrapper>
        </Section>
    )
}

export default FAQ
