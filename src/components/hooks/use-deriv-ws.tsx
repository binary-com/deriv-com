import { DerivApiProps, useDerivApi } from './use-deriv-api'

export const useDerivWS = () => {
    const deriv_api = useDerivApi()
    const { send }: DerivApiProps = deriv_api

    return { send }
}
