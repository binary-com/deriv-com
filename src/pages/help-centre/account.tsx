import React from 'react'
import account_data from './data/_account'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Account = () => <Questions data={account_data} />

export default WithIntl()(Account)
