import React, { useState, useEffect } from 'react'
// import video_src from '../../markets/static/video/globe.mp4'
import ReactPlayer from 'react-player/lazy'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const FloatingVideoPage = () => {
    const [pip, setPip] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', enablePip)

        return () => window.removeEventListener('scroll', enablePip)
    }, [])

    const enablePip = () => setPip(true)
    return (
        <Layout>
            <SEO
                title={localize('Floating Video')}
                description={localize('Floating video component!')}
            />
            <ReactPlayer
                url="https://amammustofa.com/assets/3cc88b20-07d5-44d4-9c21-73f544a9658e"
                pip={pip}
                onEnablePIP={() => setPip(true)}
                controls="true"
            />
            <div style={{ height: '120rem' }}>Test</div>
        </Layout>
    )
}

export default WithIntl()(FloatingVideoPage)
