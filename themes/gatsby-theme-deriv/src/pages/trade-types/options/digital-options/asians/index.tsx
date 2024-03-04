import React from 'react'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { WithIntl } from 'components/localization'
import AsiansDigitalOptionsPage from 'features/pages/options/digital/asians'
import { faq_schema } from 'features/pages/options/digital/asians/_faq-schema'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DigitalOptionsAsians = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return (
        <ProtectedRoute
            region={region}
            is_page_visible={region === "row"}
            component={<AsiansDigitalOptionsPage region={region}/>}
        />
    )
}

export default WithIntl()(DigitalOptionsAsians)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Asians | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with an Asians trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
