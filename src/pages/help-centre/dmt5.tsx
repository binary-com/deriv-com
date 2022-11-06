import React from 'react'
import Questions from './components/_questions'
import dmt5 from './data/_dmt5'
import { WithIntl } from 'components/localization'

const DMT5 = () => <Questions data={dmt5} />

export default WithIntl()(DMT5)
