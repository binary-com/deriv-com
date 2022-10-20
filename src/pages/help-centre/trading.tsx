import React from 'react'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const category = 'Trading'

const Trading = () => <Questions category={category} />

export default WithIntl()(Trading)
