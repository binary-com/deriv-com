import React from 'react'
import trading_data from './data/_trading'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Trading = () => <Questions data={trading_data} />

export default WithIntl()(Trading)
