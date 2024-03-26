import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deposits_and_withdrawals from './data/_deposits-and-withdrawals'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DepositsAndWithdrawal = () => <QuestionsTemplate data={deposits_and_withdrawals} />

export default WithIntl()(DepositsAndWithdrawal)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deposits and withdrawals | Deriv_t_"
        description="_t_Frequently asked questions - Deposits and withdrawals_t_"
        pageContext={pageContext}
    />
)
