import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import affiliate_programme from './data/_affiliate-programme'
import { WithIntl } from 'components/localization'

const AffiliateProgramme = () => <QuestionsTemplate data={affiliate_programme} />

export default WithIntl()(AffiliateProgramme)
