import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dbot from './data/_dbot'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import ProtectedRoute from 'features/components/molecules/protected-route'

const DBot = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return (
        <ProtectedRoute
            region={region}
            is_page_visible={region === "row"}
            component={<QuestionsTemplate data={dbot} region={region} />}
        />
    )
}
export default WithIntl()(DBot)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | DBot | Deriv_t_"
        description="_t_Frequently asked questions - DBot_t_"
        pageContext={pageContext}
    />
)
