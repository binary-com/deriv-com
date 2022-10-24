import React from 'react'
import Questions from './components/_questions'
import ib_programme_data from './data/_ib-programme'
import { WithIntl } from 'components/localization'

const IbProgrammeArticle = () => <Questions data={ib_programme_data} />

export default WithIntl()(IbProgrammeArticle)
