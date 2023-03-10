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
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

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
    const { is_eu } = useRegion()
    return (
        <SectionContainer background="var(--color-grey-25)">
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            <Localize translate_text="_t_What is the rebranding about?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_We may have a new name and look, but be assured that we’re still the same team working hard since 1999 to deliver an exceptional online trading solution to our clients._t_" />
                        </Text>
                    </Question>
                    <Answer id="rebranding">
                        <Accordion has_single_state>
                            <AccordionItem
                                header="_t_Why are you rebranding?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="why-rebranding"
                            >
                                <WhyRebrand />
                            </AccordionItem>
                            <AccordionItem
                                header="_t_What changes will I see?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="what-changes"
                            >
                                <WhatChanges />
                            </AccordionItem>
                            <AccordionItem
                                header="_t_Is Binary.com being bought over by another company?_t_"
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="is-company-bought"
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
                            <Localize translate_text="_t_How will Deriv.com transform my trading experience?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_After 20 years of service to you, we feel that we understand you better. The rebranding is an opportunity for us to implement an improved online trading solution to meet all your needs._t_" />
                        </Text>
                    </Question>
                    <Answer id="new-offerings">
                        <Accordion has_single_state>
                            <AccordionItem
                                header="_t_What are the new products and services offered as a result of this rebranding?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="result"
                            >
                                <NewProducts />
                            </AccordionItem>

                            <AccordionItem
                                is_showed={!is_eu}
                                header="_t_What else can we expect from Deriv.com?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="what-else"
                            >
                                <WhatToExpect />
                            </AccordionItem>
                            <AccordionItem
                                header="_t_Is Deriv.com regulated/registered/licensed?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="legitimacy"
                            >
                                <IsDerivRegulated />
                            </AccordionItem>

                            <AccordionItem
                                header="_t_Are you going to close down Binary.com?_t_"
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="is-close"
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
                            <Localize translate_text="_t_What does it mean to me?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_We understand that change can be intimidating. That’s why we’ve been working very hard to make sure that your transition from Binary.com to Deriv.com is as seamless as possible._t_" />
                        </Text>
                    </Question>
                    <Answer id="meaning">
                        <Accordion has_single_state>
                            <AccordionItem
                                header="_t_Why should I switch to Deriv.com?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="switch"
                            >
                                <WhySwitch />
                            </AccordionItem>

                            <AccordionItem
                                header="_t_Can I still trade on Binary.com?_t_"
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="trade-on-binary"
                            >
                                <CanStillTrade />
                            </AccordionItem>

                            <AccordionItem
                                header="_t_How do I get started on Deriv.com?_t_"
                                style={item_style}
                                header_style={header_style}
                                plus
                                class_name="get-started"
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
