import { WrapPagesWithLocaleContext } from './src/components/localization/locale-context'
import { BinarySocketGeneral } from './src/common/websocket/socket_general'
import { NetworkMonitorBase } from './src/common/websocket/network_base'
import './src/components/localization/config'
import 'typeface-ibm-plex-sans'

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
}

export const wrapPageElement = WrapPagesWithLocaleContext
