const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1980px',
}

const breakpoint = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
}

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    sm: `(max-width: ${breakpoint.sm})`,
    md: `(max-width: ${breakpoint.md})`,
    lg: `(max-width: ${breakpoint.lg})`,
    xl: `(max-width: ${breakpoint.xl})`,
}

export default device
