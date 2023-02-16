import React from 'react'
import security from './data/_security'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'

const Security = () => <QuestionsTemplate data={security} />

export default WithIntl()(Security)
