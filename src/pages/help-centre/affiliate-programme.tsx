import React from 'react'
import Questions from './components/_questions'
import affiliate_programme_data from './data/_affiliate-programme'
import { WithIntl } from 'components/localization'

const AffiliateProgramme = () => <Questions data={affiliate_programme_data} />

export default WithIntl()(AffiliateProgramme)
