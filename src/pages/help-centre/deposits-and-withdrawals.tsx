import React from 'react'
import Questions from './components/_questions'
import deposits_and_withdrawals_data from './data/_deposits-and-withdrawals'
import { WithIntl } from 'components/localization'

const DepositsAndWithdrawalArticle = () => <Questions data={deposits_and_withdrawals_data} />

export default WithIntl()(DepositsAndWithdrawalArticle)
