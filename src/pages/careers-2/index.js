import React, { useState, useEffect } from 'react'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer, Container } from 'components/containers'

const client_id = '1000.ZWIO2LRC57TWVLXYGP3I36B1JQ0SVI'
const refresh_token = '1000.dd650717312fd8863d089afc04e5619e.eadf428857ec1b7cedfdd6b6df22a452'
const client_secret = '8638207eca922289841e47445c7ce8de0f4e9484d7'
let auth_token = '1000.4ad502c9c5f6b4402c51366bf7499012.b7e3e3a1db3f1268192d78dcc075d469'

const getRefreshUrl = () => {
    return `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`
}

const meta_attributes = {
    og_title: localize('Careers | Join and grow with us | Deriv'),
    og_description: localize(
        'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
    ),
}

const Careers2 = () => {
    const [submitStatus, setSubmitStatus] = useState('standby')

    async function fetchUrl(url, method, auth_token) {
        const response = await fetch(`https://glacial-tor-46183.herokuapp.com/${url}`, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            ...(auth_token && {
                headers: {
                    Authorization: `Zoho-oauthtoken ${auth_token}`,
                },
            }),
        })
        const data = await response
            .json()
            .then(setSubmitStatus(response.status == 200 ? 'success' : 'error'))
        return data
    }

    useEffect(() => {
        setSubmitStatus('working')
        fetchUrl('https://recruit.zoho.com/recruit/v2/Job_Openings', 'GET', auth_token).then(
            (data) => {
                if (data.code === 'INVALID_TOKEN') {
                    console.log('Ooops invalid token...refreshing it...')
                    fetchUrl(getRefreshUrl(), 'POST').then((data) => {
                        console.log('Refreshed the token!')
                        auth_token = data.access_token
                        console.log(data)
                        fetchUrl(
                            'https://recruit.zoho.com/recruit/v2/Job_Openings',
                            'GET',
                            auth_token,
                        ).then((data) => {
                            console.log('We finally have the data with a refreshed token!')
                            console.log(data)
                        })
                    })
                } else {
                    console.log('We have the data on the first try!')
                    console.log(data)
                }
            },
        )
    }, [])

    return (
        <Layout>
            <SEO
                title={localize('Careers | Join and grow with us | Deriv')}
                description={localize(
                    'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
                )}
                meta_attributes={meta_attributes}
            />
            <SectionContainer tablet={{ p: '40px 0' }}>
                <Container>
                    Testing Zoho Api Calls
                    {submitStatus}
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Careers2)
