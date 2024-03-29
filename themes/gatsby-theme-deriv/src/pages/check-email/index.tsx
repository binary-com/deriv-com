import React from 'react'
import { WithIntl } from 'components/localization'
import CheckEmailContainer from 'features/pages/check-email'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const CheckEmail = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <CheckEmailContainer region={region}/>
}

export default WithIntl()(CheckEmail)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Check your email_t_"
        description="_t_Didn't receive an email from us? Here's what could've happened._t_"
        no_index
        pageContext={pageContext}
    />
)
