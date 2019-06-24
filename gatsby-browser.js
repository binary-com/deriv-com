
import { BinarySocketGeneral } from './src/common/websocket/socket_general'
import { NetworkMonitorBase } from './src/common/websocket/network_base'
import 'typeface-ibm-plex-sans';

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
};
