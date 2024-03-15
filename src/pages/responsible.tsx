import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import SecureAndResponsiblePage from 'features/pages/responsible'

const SecureAndResponsible = () => {
    return <SecureAndResponsiblePage />
}

export default WithIntl()(SecureAndResponsible)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Secure and Responsible Trading | Deriv_t_"
        description="_t_Our goal is to provide you with a secure and responsible trading experience. Learn how to secure your account and set trading limits._t_"
        pageContext={pageContext}
    />
)
