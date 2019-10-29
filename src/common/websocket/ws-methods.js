import { isEmptyObject } from '../utility'
import { BinarySocketBase } from './socket_base'

const WS = (() => {
    const landingCompany = residence => BinarySocketBase.send({ landing_company: residence })
    const verifyEmail = email =>
        BinarySocketBase.send({ verifyEmail: email, type: 'account_opening' })
    const sendRequest = (request_object, force_request) =>
        Promise.resolve(
            !isEmptyObject(request_object)
                ? BinarySocketBase.send(request_object, force_request)
                : {},
        )

    return {
        landingCompany,
        verifyEmail,
        sendRequest,
    }
})()

export { WS }
