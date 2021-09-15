import { useEffect, useState } from 'react'

const client_id = '1000.ZWIO2LRC57TWVLXYGP3I36B1JQ0SVI'
const refresh_token = '1000.dd650717312fd8863d089afc04e5619e.eadf428857ec1b7cedfdd6b6df22a452'
const client_secret = '8638207eca922289841e47445c7ce8de0f4e9484d7'
let auth_token = '1000.4ad502c9c5f6b4402c51366bf7499012.b7e3e3a1db3f1268192d78dcc075d469'

const getRefreshUrl = () => {
    return `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`
}

async function fetchRecruitData(url, method, auth_token) {
    // setStatus('Fetching Data')
    const response = await fetch(`https://glacial-tor-46183.herokuapp.com/${url}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        ...(auth_token && {
            headers: {
                Authorization: `Zoho-oauthtoken ${auth_token}`,
            },
        }),
    })
    const data = await response.json()
    return data
}

export const useRecruitData = () => {
    const [status, setStatus] = useState('Idle')
    const [dataset, setData] = useState({ status: 'none' })

    useEffect(() => {
        if (dataset.status === 'none') {
            setStatus('Fetching')
            fetchRecruitData(
                'https://recruit.zoho.com/recruit/v2/Job_Openings',
                'GET',
                auth_token,
            ).then((data) => {
                if (data.code === 'INVALID_TOKEN') {
                    setStatus('Invalid Url')
                    fetchRecruitData(getRefreshUrl(), 'POST').then((data) => {
                        auth_token = data.access_token
                        setData(data)
                        fetchRecruitData(
                            'https://recruit.zoho.com/recruit/v2/Job_Openings',
                            'GET',
                            auth_token,
                        ).then((data) => {
                            setStatus('Data Received')
                            setData(data)
                        })
                    })
                } else {
                    setStatus('Data Received')
                    setData(data)
                }
            })
        }
    }, [])

    return [status, dataset]
}
