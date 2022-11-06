import React from 'react'
import Questions from './components/_questions'
import deriv_p2p from './data/_deriv-p2p'
import { WithIntl } from 'components/localization'

const DerivP2P = () => <Questions data={deriv_p2p} />

export default WithIntl()(DerivP2P)
