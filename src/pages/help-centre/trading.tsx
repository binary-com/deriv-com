import React from 'react'
import trading from './data/_trading'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'

const Trading = () => <QuestionsTemplate data={trading} />

export default WithIntl()(Trading)
