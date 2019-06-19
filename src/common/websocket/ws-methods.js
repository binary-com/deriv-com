import BinarySocket from './socket_base'
import { isEmptyObject } from '../utility'

const WS = (() => {
    const landingCompany = residence =>
        BinarySocket.send({ landing_company: residence })
    const verifyEmail = email =>
        BinarySocket.send({ verifyEmail: email, type: 'account_opening' })
    const sendRequest = (request_object, force_request) =>
        Promise.resolve(
            !isEmptyObject(request_object)
                ? BinarySocket.send(request_object, force_request)
                : {},
        )

    return {
        landingCompany,
        verifyEmail,
        sendRequest,
    }
})()

export { WS }
