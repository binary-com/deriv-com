import { WrapPagesWithLocaleContext } from './src/components/localization'
import { BinarySocketGeneral } from './src/common/websocket/socket_general'
import { NetworkMonitorBase } from './src/common/websocket/network_base'
import { BinarySocketBase } from './src/common/websocket/socket_base'
import { toISOFormat } from './src/common/utility'
import { LocalStore } from './src/common/storage'
import TrafficSource from './src/common/traffic-source'
import isMobile from './src/common/os-detect'
import './src/components/localization/config'
import 'typeface-ibm-plex-sans'

export const onInitialClientRender = () => {
    NetworkMonitorBase.init(BinarySocketGeneral)
    TrafficSource.setData()

    if (!LocalStore.get('date_first_contact')) {
        BinarySocketBase.wait('time').then(response => {
            LocalStore.set(
                'date_first_contact',
                toISOFormat(new Date(response.time * 1000)),
            )
        })
    }
    if (!LocalStore.get('signup_device')) {
        LocalStore.set('signup_device', isMobile() ? 'mobile' : 'desktop')
    }
}

export const wrapPageElement = WrapPagesWithLocaleContext
