import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import payment_agent from './data/_payment-agent'
import { WithIntl } from 'components/localization'

const PaymentAgent = () => <QuestionsTemplate data={payment_agent} />

export default WithIntl()(PaymentAgent)
