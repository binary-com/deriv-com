import { useEffect, useMemo, useState } from 'react'
import apiManager from 'common/websocket'

export const useResidenceList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        apiManager
            .augmentedSend('residence_list', {
                residence_list: 1,
            })
            .then((response) => {
                setData(response.residence_list)
            })
    }, [])

    const formatResidenceList = (data) => {
        return data?.map(({ text: display_name, value: name, value: key }) => ({
            name,
            display_name,
            key,
        }))
    }

    const residence_list = useMemo(() => formatResidenceList(data), [data])
    return [residence_list]
}
