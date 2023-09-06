import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dtrader from './data/_deriv-trader'
import { WithIntl } from 'components/localization'

const DTrader = () => <QuestionsTemplate data={dtrader} />

export default WithIntl()(DTrader)
