import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroComponent from './components/_hero_component'
import { Show } from 'components/containers'

const query = graphql`
    query {
        hero_background_desktop: file(
            relativePath: { eq: "security/security-overlay-desktop.jpg" }
        ) {
            ...heroImage
        }
        hero_background_mobile: file(relativePath: { eq: "security/security-overlay-mobile.jpg" }) {
            ...heroImage
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Show.Desktop>
                <HeroComponent background_data={data['hero_background_desktop']} />
            </Show.Desktop>

            <Show.Mobile>
                <HeroComponent
                    background_data={data['hero_background_mobile']}
                    background_dark="0.3"
                />
            </Show.Mobile>
        </>
    )
}

export default Hero
