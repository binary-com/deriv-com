import { useState, useEffect } from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'

export const useAffiliateData = () => {
    const [affiliate_data, setAffiliateData] = useState([])
    const [initiated, setInitiated] = useState(false)

    // needs to be loaded from user API data
    // const token = 'loaded_value'

    useEffect(() => {
        if (!initiated) {
            const binary_socket = BinarySocketBase.init()
            setInitiated(true)
            binary_socket.onopen = () => {
                // binary_socket.send(JSON.stringify({ authorize: token }))
                binary_socket.onmessage = () => {
                    binary_socket.send(JSON.stringify({ get_settings: '1' }))

                    binary_socket.onmessage = (msg) => {
                        const response = JSON.parse(msg.data)
                        if (!response.error) {
                            const affiliate_data = response
                            setAffiliateData(affiliate_data.get_settings)
                        }
                        binary_socket.close()
                    }
                }
            }
        }
    }, [affiliate_data])

    return affiliate_data
}
