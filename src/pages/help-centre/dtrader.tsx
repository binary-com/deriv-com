import React from 'react'
import Questions from './components/_questions'
import dtrader_data from './data/_dtrader'
import { WithIntl } from 'components/localization'

const DTraderArticle = () => <Questions data={dtrader_data} />

export default WithIntl()(DTraderArticle)
