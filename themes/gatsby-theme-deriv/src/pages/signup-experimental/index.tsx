import React from 'react'
import SignUpExperimental from 'features/pages/signup-experimental'
import { TGatsbyHead } from 'features/types'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const SignUpExperimentalPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <SignUpExperimental region={region} />
}

export default WithIntl()(SignUpExperimentalPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_"
        description="_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_"
        pageContext={pageContext}
    />
)
