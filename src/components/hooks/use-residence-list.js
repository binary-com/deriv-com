import { useState, useEffect } from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'

export const useResidenceList = () => {
    const [residence_list, setResidenceList] = useState([])
    const [initiated, setInitiated] = useState(false)

    useEffect(() => {
        if (!initiated) {
            const binary_socket = BinarySocketBase.init()
            setInitiated(true)

            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ residence_list: 1 }))
            }
            binary_socket.onmessage = (msg) => {
                const response = JSON.parse(msg.data)

                if (!response.error) {
                    const residence_list = response.residence_list.map((el) => {
                        const country = {}
                        country.name = el.text
                        country.display_name = el.text
                        return country
                    })
                    setResidenceList(residence_list)
                }

                binary_socket.close()
            }
        }
    }, [residence_list])

    return residence_list
}
