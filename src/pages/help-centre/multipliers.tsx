import React from 'react'
import multiplier from './data/_multipliers'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'

const Multiplier = () => <QuestionsTemplate data={multiplier} />

export default WithIntl()(Multiplier)
