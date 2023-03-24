import React from 'react'
import styled from 'styled-components'
import {
    WhyRebrand,
    IsBeingBought,
    WhatWillHappen,
    WhatChanges,
    WhySwitch,
    WhatsNew,
    CanTrade,
    HowStarted,
    WhatHappenAffiliate,
    DifferentiateCommission,
    AffectIB,
    SupportAPI,
    HavePaymentAgent,
    StartPromoting,
    HowToPromote,
    MarketingSupport,
} from './_faq-data'
import { Container, SectionContainer, Flex } from 'components/containers'
import {
    Header,
    Text,
    Accordion,
    AccordionItem,
    Divider,
    AccordionDataProps,
} from 'components/elements'
import { Localize } from 'components/localization'
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

    const accordion_data_rebranding: Array<AccordionDataProps> = [
        {
            id: 'faqs_01',
            title: '_t_Why is Binary.com rebranding?_t_',
            component: (
                <>
                    <WhyRebrand />
                </>
            ),
        },
        {
            id: 'faqs_02',
            title: '_t_Is Binary.com being bought over by another company?_t_',
            component: (
                <>
                    <IsBeingBought />
                </>
            ),
        },
        {
            id: 'faqs_03',
            title: '_t_What will happen to Binary.com?_t_',
            component: (
                <>
                    <WhatWillHappen />
                </>
            ),
        },
        {
            id: 'faqs_04',
            title: '_t_What changes are being introduced?_t_',
            component: (
                <>
                    <WhatChanges />
                </>
            ),
        },
    ]

    const accordion_data_clients: Array<AccordionDataProps> = [
        {
            id: 'faqs_01',
            title: '_t_Why should I switch to Deriv.com?_t_',
            component: (
                <>
                    <WhySwitch />
                </>
            ),
        },
        {
            id: 'faqs_02',
            title: '_t_What’s new on Deriv.com?_t_',
            component: (
                <>
                    <WhatsNew />
                </>
            ),
        },
        {
            id: 'faqs_03',
            title: '_t_Can I still trade on Binary.com?_t_',
            component: (
                <>
                    <CanTrade />
                </>
            ),
        },
        {
            id: 'faqs_04',
            title: '_t_How do I get started on Deriv.com?_t_',
            component: (
                <>
                    <HowStarted />
                </>
            ),
        },
    ]

    const accordion_data_partners: Array<AccordionDataProps> = [
        {
            id: 'faqs_01',
            title: '_t_What will happen to my affiliate account?_t_',
            component: (
                <>
                    <WhatHappenAffiliate />
                </>
            ),
        },
        {
            id: 'faqs_02',
            title: '_t_How can I differentiate Deriv.com commission from that of Binary.com?_t_',
            component: (
                <>
                    <DifferentiateCommission />
                </>
            ),
        },
        {
            id: 'faqs_03',
            title: '_t_How does this change affect me as an introducing broker (IB)?_t_',
            component: (
                <>
                    <AffectIB />
                </>
            ),
        },
        {
            id: 'faqs_04',
            title: '_t_Does Deriv.com support API developers?_t_',
            component: (
                <>
                    <SupportAPI />
                </>
            ),
        },
        {
            id: 'faqs_05',
            title: '_t_Does Deriv.com have a payment agent programme?_t_',
            component: (
                <>
                    <HavePaymentAgent />
                </>
            ),
        },
    ]

    const accordion_data_promoting: Array<AccordionDataProps> = [
        {
            id: 'faqs_01',
            title: '_t_Can I start promoting Deriv.com immediately?_t_',
            component: (
                <>
                    <StartPromoting />
                </>
            ),
        },
        {
            id: 'faqs_02',
            title: '_t_How do I promote Deriv.com?_t_',
            component: (
                <>
                    <HowToPromote />
                </>
            ),
        },
        {
            id: 'faqs_03',
            title: '_t_What marketing support do you provide?_t_',
            component: (
                <>
                    <MarketingSupport />
                </>
            ),
        },
    ]

    return (
        <SectionContainer background="var(--color-grey-25)">
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            <Localize translate_text="_t_What is the rebranding about?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_The rebranding exercise sees us strengthen our position to provide clients with the flexibility, ease, and confidence to trade as they wish. It is part of our company’s growth process as we step into the third decade of delivering services of value to clients._t_" />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            {accordion_data_rebranding.map((item) => {
                                return (
                                    <AccordionItem
                                        header={<Localize translate_text={item.title} />}
                                        parent_style={parent_style}
                                        style={item_style}
                                        header_style={header_style}
                                        plus
                                        key={item.id}
                                    >
                                        {item.component}
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </Answer>
                </FAQWrapper>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            <Localize translate_text="_t_How will it affect my clients?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_We understand that clients may be overwhelmed by the change. That’s why we’ve worked very hard to make sure that their transition to Deriv.com is as seamless as possible. As an affiliate, you play a key role in supporting them in this transition. Below are some concerns they may have, along with the answers to convey your assurance._t_" />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            {accordion_data_clients.map((item) => {
                                return (
                                    <AccordionItem
                                        header={<Localize translate_text={item.title} />}
                                        parent_style={parent_style}
                                        style={item_style}
                                        header_style={header_style}
                                        plus
                                        key={item.id}
                                    >
                                        {item.component}
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </Answer>
                </FAQWrapper>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            <Localize translate_text="_t_How does it transform our partnership?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_As our valued partner, you will no doubt have concerns about the status of your partnership with Deriv.com. Don’t worry, we’ve made the transition as seamless as possible for you so you can continue to build your network and increase your earning potential._t_" />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            {accordion_data_partners.map((item) => {
                                return (
                                    <AccordionItem
                                        header={<Localize translate_text={item.title} />}
                                        parent_style={parent_style}
                                        style={item_style}
                                        header_style={header_style}
                                        plus
                                        key={item.id}
                                    >
                                        {item.component}
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </Answer>
                </FAQWrapper>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <FAQWrapper jc="space-between">
                    <Question>
                        <Header as="h3" type="section-title" mb="0.8rem" lh="1.25">
                            <Localize translate_text="_t_How do I get started promoting Deriv.com?_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_Rest assured that your partnership is pivotal in this rebranding process. In fact, we believe this is an opportunity for you to strengthen your own position within your network of clients. And you can certainly count on us to be responsive and supportive of you in this effort._t_" />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            {accordion_data_promoting.map((item) => {
                                return (
                                    <AccordionItem
                                        header={<Localize translate_text={item.title} />}
                                        parent_style={parent_style}
                                        style={item_style}
                                        header_style={header_style}
                                        plus
                                        key={item.id}
                                    >
                                        {item.component}
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </Answer>
                </FAQWrapper>
            </Container>
        </SectionContainer>
    )
}

export default FAQ
