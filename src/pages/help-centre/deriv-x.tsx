import React from 'react'
import Questions from './components/_questions'
import deriv_x_data from './data/_deriv-x'
import { WithIntl } from 'components/localization'

const DerivXArticle = () => <Questions data={deriv_x_data} />

export default WithIntl()(DerivXArticle)
