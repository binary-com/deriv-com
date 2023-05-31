import React from 'react'
import accumulators from './data/_accumulators'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'

const Accumulators = () => <QuestionsTemplate data={accumulators} />

export default WithIntl()(Accumulators)
