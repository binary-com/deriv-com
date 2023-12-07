import React from 'react'
import { AccordionBlock } from '@deriv-com/blocks'
import { Section } from '@deriv/quill-design'
import { AccordionProps } from '@deriv-com/components'
import { FAQContent } from '../../forex/faq-section/data'
import { localize } from 'components/localization'

const FAQSection = () => {
    const { data } = FAQContent

    const accordionItems: AccordionProps[] = []

    data.forEach((item) => {
        const answer = item.answers ? item.answers[0] : () => <></>
        accordionItems.push({
            title: item.title,
            content: answer,
            divider: 'bottom',
        })
    })

    return (
        <Section className="mt-2400 flex flex-col">
            <AccordionBlock
                title={localize('_t_Stocks & indices FAQs_t_')}
                content={{
                    data: [accordionItems],
                }}
                className="pb-2400 pt-general-none border-opacity-black-100 border-x-none"
            />
        </Section>
    )
}

export default FAQSection
