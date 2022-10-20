import React from 'react'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const category = 'Account'

const Account = () => <Questions category={category} />

export default WithIntl()(Account)
