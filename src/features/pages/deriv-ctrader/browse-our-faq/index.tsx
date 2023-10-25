import React from 'react'
import { ctrader_faq_data } from './data'
import DerivPrimeFaq from 'features/pages/partners/deriv-prime/browse-our-faq/deriv-prime-faq'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'

const BrowseOurFaq = () => {
    return (
        <Container.Fixed margin_block="20x">
            <Typography.Heading md={{ pt: '40x' }} align="center" as="h2">
                <Localize translate_text="_t_Browse our FAQ_t_" />
            </Typography.Heading>
            <DerivPrimeFaq faqs={ctrader_faq_data} />
        </Container.Fixed>
    )
}

export default BrowseOurFaq
