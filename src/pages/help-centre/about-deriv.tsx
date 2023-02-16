import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import about_deriv from './data/_about-deriv'
import { WithIntl } from 'components/localization'

const AboutDeriv = () => <QuestionsTemplate data={about_deriv} />

export default WithIntl()(AboutDeriv)
