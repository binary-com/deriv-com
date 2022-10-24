import React from 'react'
import Questions from './components/_questions'
import p2p_data from './data/_p2p'
import { WithIntl } from 'components/localization'

const DerivP2PArticle = () => <Questions data={p2p_data} />

export default WithIntl()(DerivP2PArticle)
