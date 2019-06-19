import { BinarySocketGeneral } from './src/common/websocket/socket_general'
import { NetworkMonitorBase } from './src/common/websocket/network_base'

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
}
