import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroComponent from './components/_hero_component'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const query = graphql`
    query {
        hero_background_desktop: file(
            relativePath: { eq: "bug-bounty/security-overlay-desktop.jpg" }
        ) {
            ...heroImage
        }
        hero_background_mobile: file(
            relativePath: { eq: "bug-bounty/security-overlay-mobile.jpg" }
        ) {
            ...heroImage
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const background = is_mobile ? data['hero_background_mobile'] : data['hero_background_desktop']

    return <HeroComponent background_data={background} background_dark="0.3" />
}

export default Hero
