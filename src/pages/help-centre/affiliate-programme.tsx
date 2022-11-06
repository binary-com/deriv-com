import React from 'react'
import Questions from './components/_questions'
import affiliate_programme from './data/_affiliate-programme'
import { WithIntl } from 'components/localization'

const AffiliateProgramme = () => <Questions data={affiliate_programme} />

export default WithIntl()(AffiliateProgramme)
