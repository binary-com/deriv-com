import React from 'react'
import { Text } from 'components/elements/typography'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const PartnerTest = () => {
    return (
        <Layout>
            <SEO
                description={localize(
                    'Have any query or need assistance, check out the details to call our international help desk and our email ID. Feel free to contact us anytime!',
                )}
                title={localize('Contact Us | Online Trading')}
            />
            <Text>{localize('Hello partners')}</Text>
        </Layout>
    )
}

export default WithIntl()(PartnerTest)
