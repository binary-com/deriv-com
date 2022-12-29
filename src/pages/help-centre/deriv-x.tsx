import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import derivx from './data/_deriv-x'
import { WithIntl } from 'components/localization'

const DerivX = () => <QuestionsTemplate data={derivx} />

export default WithIntl()(DerivX)
