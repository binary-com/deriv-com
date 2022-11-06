import React from 'react'
import Questions from './components/_questions'
import dbot from './data/_dbot'
import { WithIntl } from 'components/localization'

const DBot = () => <Questions data={dbot} />

export default WithIntl()(DBot)
