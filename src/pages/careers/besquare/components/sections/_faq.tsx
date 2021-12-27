import React from 'react'
import faq_content from '../../static/content/_faq'
import { TextWrapper, Title } from '../../static/style/_common'
import {
    AccordionWrapper,
    ContentContainer,
    ImageWrapper,
    QuestionAnswerContainer,
    Section,
    TextContainer,
} from '../../static/style/_faq'
import { Accordion, AccordionItem } from 'components/elements'
import { Show } from 'components/containers'
import Vector from 'images/svg/be-square/vector.svg'

const FAQ = () => {
    const parent_style = {
        marginBottom: '32px',
    }
    const item_style = {
        padding: '32px 24px',
        background: 'var(--color-grey-8)',
        borderRadius: '0 0 8px 8px',
    }
    const header_style = {
        padding: '16px',
        borderRadius: '8px',
        height: 'auto',
    }
    return (
        <Section>
            <div style={{ margin: '0 auto' }}>
                <Show.Desktop max_width={'tabletL'}>
                    <ImageWrapper src={Vector} alt="Dotted image" />
                </Show.Desktop>
                <ContentContainer>
                    <Title as="h2">FAQs</Title>
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
                                    {topic.content.map((question, idx) => (
                                        <QuestionAnswerContainer key={idx}>
                                            <TextWrapper
                                                max_width={['948px', '500px', '290px']}
                                                weight={'bold'}
                                            >
                                                {question.title}
                                            </TextWrapper>
                                            <TextWrapper max_width={['948px', '500px', '290px']}>
                                                {question.subtitle}
                                            </TextWrapper>
                                        </QuestionAnswerContainer>
                                    ))}
                                </TextContainer>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionWrapper>
                <ImageWrapper
                    bottom={'0'}
                    left={'calc(100% - 599px)'}
                    src={Vector}
                    alt="Dotted image"
                />
            </div>
        </Section>
    )
}

export default FAQ
