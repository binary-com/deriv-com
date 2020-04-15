import Cookies from 'js-cookie'
import { getPropertyValue } from '../utility'
import { BinarySocketBase } from './socket_base'

const BinarySocketGeneral = (() => {
    const onOpen = (is_ready) => {
        // We need website status for Show Eu component
        is_ready && BinarySocketBase.send({ website_status: 1 })
    }

    const onMessage = (response) => {
        handleError(response)
        switch (response.msg_type) {
            case 'website_status':
                if (response.website_status) {
                    if (!Cookies.get('clients_country')) {
                        Cookies.set(
                            'clients_country',
                            response.website_status.clients_country,
                            { expires: 30 }, // expires in 30 days
                        )
                    }
                }
                break
        }
    }

    const handleError = (response) => {
        const error_code = getPropertyValue(response, ['error', 'code'])
        switch (error_code) {
            case 'WrongResponse':
            case 'InternalServerError':
            case 'RateLimit':
            case 'InvalidAppID':
                console.error('Invalid app id')
                break
        }
    }

    return {
        onOpen,
        onMessage,
    }
})()

export { BinarySocketGeneral }
