import React from 'react'
import Questions from './components/_questions'
import about_deriv from './data/_about-deriv'
import { WithIntl } from 'components/localization'

const AboutDeriv = () => <Questions data={about_deriv} />

export default WithIntl()(AboutDeriv)
