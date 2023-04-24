import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deriv_ez from './data/_deriv-ez'
import { WithIntl } from 'components/localization'

const DerivEZ = () => <QuestionsTemplate data={deriv_ez} />

export default WithIntl()(DerivEZ)
