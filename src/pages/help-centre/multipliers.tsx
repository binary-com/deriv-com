import React from 'react'
import multiplier from './data/_multipliers'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Multiplier = () => <Questions data={multiplier} />

export default WithIntl()(Multiplier)
