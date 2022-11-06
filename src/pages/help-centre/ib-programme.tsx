import React from 'react'
import Questions from './components/_questions'
import ib_programme from './data/_ib-programme'
import { WithIntl } from 'components/localization'

const IbProgramme = () => <Questions data={ib_programme} />

export default WithIntl()(IbProgramme)
