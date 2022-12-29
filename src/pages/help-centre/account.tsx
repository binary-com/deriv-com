import React from 'react'
import account from './data/_account'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'

const Account = () => <QuestionsTemplate data={account} />

export default WithIntl()(Account)
