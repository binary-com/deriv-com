import React from 'react'
import styled from 'styled-components'
import {
    WhyRebrand,
    WhatChanges,
    IsBeingBought,
    NewProducts,
    WhatToExpect,
    IsDerivRegulated,
    AreCloseDown,
    WhySwitch,
    CanStillTrade,
    HowToGetStarted,
} from './_faq-data'
import { Container, SectionContainer, Flex } from 'components/containers'
import { Header, Text, Accordion, AccordionItem, Divider } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { DerivStore } from 'store'
import device from 'themes/device'

const Question = styled.div`
    max-width: 38.4rem;
    margin-right: 1.6rem;
`

const Answer = styled.div`
    width: 100%;
    max-width: 69rem;

    @media ${device.tablet} {
        margin: 0 16px;
    }
`

const FAQWrapper = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${Question} {
            margin-right: 0;
            margin-bottom: 3.2rem;
            max-width: 100%;
        }
        ${Answer} {
            max-width: 100%;
        }
    }
`

const FAQ = () => {
    const parent_style = {
        marginBottom: '2.4rem',
    }
    const item_style = {
        padding: '2.4rem',
        background: 'var(--color-grey-24)',
    }
    const header_style = {
        padding: '1.6rem 2.4rem',
        border: 'none',
    }
    const { is_eu_country } = React.useContext(DerivStore)
    return (
        <SectionContainer background="var(--color-grey-25)">
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            {localize('What is the rebranding about?')}
                        </Header>
                        <Text>
                            {localize(
                                'We may have a new name and look, but be assured that we’re still the same team working hard since 1999 to deliver an exceptional online trading solution to our clients.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('Why are you rebranding?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhyRebrand />
                            </AccordionItem>
                            <AccordionItem
                                header={localize('What changes will I see?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatChanges />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize translate_text="Is Binary.com being bought over by another company?" />
                                }
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <IsBeingBought />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </FAQWrapper>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            <Localize translate_text="How will Deriv.com transform my trading experience?" />
                        </Header>
                        <Text>
                            {localize(
                                'After 20 years of service to you, we feel that we understand you better. The rebranding is an opportunity for us to implement an improved online trading solution to meet all your needs.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize(
                                    'What are the new products and services offered as a result of this rebranding?',
                                )}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <NewProducts />
                            </AccordionItem>

                            <AccordionItem
                                is_showed={!is_eu_country}
                                header={
                                    <Localize translate_text="What else can we expect from Deriv.com?" />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatToExpect />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize translate_text="Is Deriv.com regulated/registered/licensed?" />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <IsDerivRegulated />
                            </AccordionItem>

                            <AccordionItem
                                header={
                                    <Localize translate_text="Are you going to close down Binary.com?" />
                                }
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <AreCloseDown />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </FAQWrapper>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            {localize('What does it mean to me?')}
                        </Header>
                        <Text>
                            <Localize translate_text="We understand that change can be intimidating. That’s why we’ve been working very hard to make sure that your transition from Binary.com to Deriv.com is as seamless as possible." />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={
                                    <Localize translate_text="Why should I switch to Deriv.com?" />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhySwitch />
                            </AccordionItem>

                            <AccordionItem
                                header={
                                    <Localize translate_text="Can I still trade on Binary.com?" />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <CanStillTrade />
                            </AccordionItem>

                            <AccordionItem
                                header={
                                    <Localize translate_text="How do I get started on Deriv.com?" />
                                }
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <HowToGetStarted />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </FAQWrapper>
            </Container>
        </SectionContainer>
    )
}

export default FAQ
