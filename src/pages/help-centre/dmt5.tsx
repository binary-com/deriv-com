import React from 'react'
import Questions from './components/_questions'
import dmt5_data from './data/_dmt5'
import { WithIntl } from 'components/localization'

const DMT5Article = () => <Questions data={dmt5_data} />

export default WithIntl()(DMT5Article)
