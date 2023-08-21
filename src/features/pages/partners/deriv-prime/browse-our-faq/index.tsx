import React from 'react'
import { generalFAQData, tocFAQDAta } from './data'
import DerivPrimeFaq from './deriv-prime-faq'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const BrowseOurFaq = () => {
    return (
        <>
            <Typography.Heading
                padding_block="20x"
                md={{
                    padding_block: '40x',
                }}
                mt="40x"
                align="center"
                as="h2"
            >
                <Localize translate_text="_t_Browse our FAQ_t_" />
            </Typography.Heading>
            <DerivPrimeFaq faqs={generalFAQData} subsection="_t_General_t_" />
            <DerivPrimeFaq faqs={tocFAQDAta} subsection="_t_Terms of cooperation_t_" />
        </>
    )
}

export default BrowseOurFaq
