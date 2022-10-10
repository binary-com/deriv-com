import { getAppId, getSocketURL } from './config'
import { getCrowdin, getLanguage } from 'common/utility'
import { brand_name } from 'common/constants'

/*
 * An abstraction layer over native javascript WebSocket,
 * which provides additional functionality like
 * reopen the closed connection and process the buffered requests
 */
const BinarySocketBase = (() => {
    const init = () => {
        const socket_url = `${getSocketURL()}?app_id=${getAppId()}&l=${
            getLanguage() === 'ach' ? getCrowdin() : getLanguage()?.replace('-', '_')
        }&brand=${brand_name.toLowerCase()}`

        return new WebSocket(socket_url)
    }

    return {
        init,
    }
})()

export { BinarySocketBase }
