import React from 'react'
import { general_faq_data, terms_cooperation_data } from './data'
import DerivPrimeFaq from './deriv-prime-faq'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const BrowseOurFaq = () => {
    return (
        <>
            <Typography.Heading md={{ pt: '40x' }} align="center" as="h2">
                <Localize translate_text="_t_Browse our FAQ_t_" />
            </Typography.Heading>
            <Container.Fixed pb="20x">
                <DerivPrimeFaq faqs={general_faq_data} subsection="_t_General_t_" />
                <DerivPrimeFaq
                    faqs={terms_cooperation_data}
                    subsection="_t_Terms of cooperation_t_"
                />
            </Container.Fixed>
        </>
    )
}

export default BrowseOurFaq
