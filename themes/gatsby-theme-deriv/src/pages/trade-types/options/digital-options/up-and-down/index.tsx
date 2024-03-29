import React from 'react'
import { WithIntl } from 'components/localization'
import UpAndDownDigitalOptionsPage from 'features/pages/options/digital/up-down'
import { faq_schema } from 'features/pages/options/digital/up-down/_faq-schema'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DigitalOptions = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return (
        <ProtectedRoute
            region={region}
            is_page_visible={region === "row"}
            component={<UpAndDownDigitalOptionsPage region={region}/>}
        />
    )
}
export default WithIntl()(DigitalOptions)

export const Head = ({ pageContext }: TGatsbyHead) => {
    return (
        <SEO
            title="_t_Up/Down | Digital options contract | Deriv_t_"
            description="_t_Open a digital options contract with an Up/Down trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            pageContext={pageContext}
        >
            <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
        </SEO>
    )
}
