import React from 'react'
import security_data from './data/_security'
import Questions from './components/_questions'
import { WithIntl } from 'components/localization'

const Security = () => <Questions data={security_data} />

export default WithIntl()(Security)
