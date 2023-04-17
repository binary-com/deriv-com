import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deriv_p2p from './data/_deriv-p2p'
import { WithIntl } from 'components/localization'

const DerivP2P = () => <QuestionsTemplate data={deriv_p2p} />

export default WithIntl()(DerivP2P)
