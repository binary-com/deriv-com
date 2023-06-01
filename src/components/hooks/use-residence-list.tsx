import { useEffect, useMemo, useState } from 'react'
import apiManager from 'common/websocket'

export const useResidenceList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        apiManager.augmentedSend('residence_list').then((response) => {
            setData(response.residence_list)
        })
    }, [])

    const formatResidenceList = (data) => {
        return data?.map(({ text: display_name, text: name, value: symbol }) => ({
            name,
            display_name,
            symbol,
        }))
    }

    const residence_list = useMemo(() => formatResidenceList(data), [data])
    return [residence_list]
}
