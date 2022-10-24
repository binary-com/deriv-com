import React from 'react'
import Questions from './components/_questions'
import about_deriv_data from './data/_about-deriv'
import { WithIntl } from 'components/localization'

const AboutDerivArticle = () => <Questions data={about_deriv_data} />

export default WithIntl()(AboutDerivArticle)
