import React from 'react'
import Questions from './components/_questions'
import derivx from './data/_deriv-x'
import { WithIntl } from 'components/localization'

const DerivX = () => <Questions data={derivx} />

export default WithIntl()(DerivX)
