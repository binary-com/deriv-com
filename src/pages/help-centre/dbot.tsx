import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dbot from './data/_dbot'
import { WithIntl } from 'components/localization'

const DBot = () => <QuestionsTemplate data={dbot} />

export default WithIntl()(DBot)
