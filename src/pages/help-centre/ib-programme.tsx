import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import ib_programme from './data/_ib-programme'
import { WithIntl } from 'components/localization'

const IbProgramme = () => <QuestionsTemplate data={ib_programme} />

export default WithIntl()(IbProgramme)
