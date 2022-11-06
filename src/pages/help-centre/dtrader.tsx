import React from 'react'
import Questions from './components/_questions'
import dtrader from './data/_dtrader'
import { WithIntl } from 'components/localization'

const DTrader = () => <Questions data={dtrader} />

export default WithIntl()(DTrader)
