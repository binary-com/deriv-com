import { BinarySocketGeneral } from './src/common/websocket/socket_general'
import { NetworkMonitorBase } from './src/common/websocket/network_base'
import CustomLayout from './wrapPageElement'
import './src/components/config'
import 'typeface-ibm-plex-sans'

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
}
export const wrapPageElement = CustomLayout
