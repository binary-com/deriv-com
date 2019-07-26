const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '576px',
    tablet: '768px',
    tabletL: '992px',
    laptop: '1024px',
    laptopL: '1440px',
    desktopS: '1680px',
    desktop: '1980px',
}

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(min-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktopS: `(min-width: ${size.desktopS})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
}

export default device
