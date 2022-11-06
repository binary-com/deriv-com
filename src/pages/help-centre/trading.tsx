import React from 'react'
import trading from './data/_trading'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Trading = () => <Questions data={trading} />

export default WithIntl()(Trading)
