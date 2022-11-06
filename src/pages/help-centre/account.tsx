import React from 'react'
import account from './data/_account'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Account = () => <Questions data={account} />

export default WithIntl()(Account)
