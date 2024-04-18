import React from 'react'
import account from './data/_account'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const Account = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <QuestionsTemplate data={account} region={region}/>
}

export default WithIntl()(Account)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Account | Deriv_t_"
        description="_t_Frequently asked questions - Account_t_"
        pageContext={pageContext}
    />
)
