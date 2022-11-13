import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dmt5 from './data/_dmt5'
import { WithIntl } from 'components/localization'

const DMT5 = () => <QuestionsTemplate data={dmt5} />

export default WithIntl()(DMT5)
