import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import complaints_procedure from './data/_complaints_procedure'
import { WithIntl } from 'components/localization'

const ComplaintsProcedure = () => <QuestionsTemplate data={complaints_procedure} />

export default WithIntl()(ComplaintsProcedure)
