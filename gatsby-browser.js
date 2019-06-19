import React from 'react'

import { AppProvider } from './src/context/AppContext'
import { BinarySocketGeneral } from './src/common/socket_base'
import { NetworkMonitorBase } from './src/common/network_base'

export const wrapRootElement = ({ element }) => (
    <AppProvider>{element}</AppProvider>
)

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
}
