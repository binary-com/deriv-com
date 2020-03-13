export const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tabletS: 576,
    tablet: 768,
    tabletL: 992,
    laptop: 1024,
    laptopM: 1200,
    laptopL: 1440,
    desktopS: 1680,
    desktop: 1980,
}

const device = {
    mobileS: `(max-width: ${size.mobileS}px)`,
    mobileM: `(max-width: ${size.mobileM}px)`,
    mobileL: `(max-width: ${size.mobileL}px)`,
    tabletS: `(max-width: ${size.tabletS}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    tabletL: `(max-width: ${size.tabletL}px)`,
    laptopS: `(min-width: ${size.tabletL}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
    laptopM: `(max-width: ${size.laptopM}px)`,
    laptopL: `(max-width: ${size.laptopL}px)`,
    desktopS: `(min-width: ${size.desktopS}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`,
}

export default device
