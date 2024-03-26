import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import derivx from './data/_deriv-x'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import ProtectedRoute from 'features/components/molecules/protected-route'

const DerivX = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return (
        <ProtectedRoute
            is_page_visible={region !== "eu"}
            region={region}
            component={<QuestionsTemplate data={derivx} region={region}/>}
        />
    )
}
export default WithIntl()(DerivX)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv X | Deriv_t_"
        description="_t_Frequently asked questions - Deriv X_t_"
        pageContext={pageContext}
    />
)
