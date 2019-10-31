import Cookies from 'js-cookie'
import { getPropertyValue } from '../utility'
import { BinarySocketBase } from './socket_base'

const BinarySocketGeneral = (() => {
    const onOpen = is_ready => {
        if (is_ready) {
            BinarySocketBase.send({ website_status: 1, subscribe: 1 })
            setInterval(() => {
                BinarySocketBase.send({ time: 1 })
            }, 30000)
        }
    }

    const onMessage = response => {
        handleError(response)
        let is_available = false
        switch (response.msg_type) {
            case 'website_status':
                if (response.website_status) {
                    is_available = /^up$/i.test(response.website_status.site_status)
                    if (!Cookies.get('clients_country')) {
                        Cookies.set(
                            'clients_country',
                            response.website_status.clients_country,
                            { expires: 30 }, // expires in 30 days
                        )
                    }
                    if (is_available && !BinarySocketBase.availability()) {
                        window.location.reload()
                        return
                    }
                    BinarySocketBase.availability(is_available)
                }
                break
            case 'landing_company':
                break
            // no default
        }
    }

    const handleError = response => {
        const error_code = getPropertyValue(response, ['error', 'code'])
        switch (error_code) {
            // TODO handle response errors
            case 'WrongResponse':
            case 'InternalServerError':
            case 'RateLimit':
            case 'InvalidAppID':
                console.error('Invalid app id')
                break
            // no default
        }
    }

    return {
        onOpen,
        onMessage,
    }
})()

export { BinarySocketGeneral }
