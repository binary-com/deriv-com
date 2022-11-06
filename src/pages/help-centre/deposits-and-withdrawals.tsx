import React from 'react'
import Questions from './components/_questions'
import deposits_and_withdrawals from './data/_deposits-and-withdrawals'
import { WithIntl } from 'components/localization'

const DepositsAndWithdrawal = () => <Questions data={deposits_and_withdrawals} />

export default WithIntl()(DepositsAndWithdrawal)
