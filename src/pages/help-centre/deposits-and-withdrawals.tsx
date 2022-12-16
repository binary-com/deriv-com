import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deposits_and_withdrawals from './data/_deposits-and-withdrawals'
import { WithIntl } from 'components/localization'

const DepositsAndWithdrawal = () => <QuestionsTemplate data={deposits_and_withdrawals} />

export default WithIntl()(DepositsAndWithdrawal)
