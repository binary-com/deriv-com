import { createMedia } from '@artsy/fresnel'
import { size } from './device'

const AppMedia = createMedia({
    breakpoints: {
        start: 0,
        mobileS: size.mobileS,
        mobileM: size.mobileM,
        tabletS: size.tabletS,
        bp680: size.bp680,
        tablet: size.tablet,
        bp749: size.bp749,
        tabletL: size.tabletL,
        laptop: size.laptop,
        laptopM: size.laptopM,
        laptopL: size.laptopL,
        desktopS: size.desktopS,
        desktop: size.desktop,
    },
})

// Generate CSS to be injected into the head
export const mediaStyle = AppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = AppMedia
