import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import SecureAndResponsiblePage from 'features/pages/responsible'
import useBuildVariant from 'features/hooks/use-build-variant'

const SecureAndResponsible = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <SecureAndResponsiblePage region={region} />
}

export default WithIntl()(SecureAndResponsible)

export const Head = ({ pageContext }: TGatsbyHead) => {
    const { region } = useBuildVariant()
    const metaDescription =
        region === 'eu'
            ? '_t_Our goal is to provide you with a secure and responsible trading experience. Find out how we do this and how you can set trading limits._t_'
            : '_t_Our goal is to provide you with a secure and responsible trading experience. Learn how to secure your account and set trading limits._t_'
    return (
        <SEO
            title="_t_Secure and Responsible Trading | Deriv_t_"
            description={metaDescription}
            pageContext={pageContext}
        />
    )
}
