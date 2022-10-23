import React from 'react'
import multiplier_data from './data/_multipliers'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Multiplier = () => <Questions data={multiplier_data} />

export default WithIntl()(Multiplier)
