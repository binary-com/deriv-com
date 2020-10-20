import { createMedia } from '@artsy/fresnel'
import { size } from './device'

const AppMedia = createMedia({
    breakpoints: {
        start: 0,
        mobileS: size.mobileS,
        mobile: size.mobile,
        tablet: size.tablet,
        tabletL: size.tabletL,
        laptop: size.laptop,
        desktop: size.desktop,
    },
})

// Generate CSS to be injected into the head
export const mediaStyle = AppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = AppMedia
