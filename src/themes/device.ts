export type SizeType = keyof typeof size

export const size = Object.freeze({
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tabletS: 576,
    bp680: 680,
    bp749: 749,
    tablet: 768,
    bp769: 769,
    tabletL: 992,
    laptop: 1024,
    bp1060: 1060,
    laptopM: 1200,
    laptopL: 1440,
    desktopS: 1680,
    desktop: 1980,
})

const device = Object.freeze({
    mobileS: `(max-width: ${size.mobileS}px)`,
    mobileM: `(max-width: ${size.mobileM}px)`,
    mobileL: `(max-width: ${size.mobileL}px)`,
    tabletM: `(min-width: ${size.mobileL}px) and (max-width: ${size.tabletL}px)`,
    tabletS: `(max-width: ${size.tabletS}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    tabletL: `(max-width: ${size.tabletL}px)`,
    laptopS: `(min-width: ${size.tabletL}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
    bp1060: `(max-width: ${size.bp1060}px)`,
    laptopM: `(max-width: ${size.laptopM}px)`,
    laptopL: `(max-width: ${size.laptopL}px)`,
    desktopS: `(min-width: ${size.desktopS}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`,
})

export default device
