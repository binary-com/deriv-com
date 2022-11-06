import React from 'react'
import security from './data/_security'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Security = () => <Questions data={security} />

export default WithIntl()(Security)
