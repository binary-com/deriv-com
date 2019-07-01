import React from 'react'
import Layout from './src/components/layout/layout'
import { BinarySocketGeneral } from './src/common/websocket/socket_general'
import { NetworkMonitorBase } from './src/common/websocket/network_base'
import 'typeface-ibm-plex-sans'

// Language passed here from createPages
const WrapPagesWithLayout = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
}

export const wrapPageElement = WrapPagesWithLayout
