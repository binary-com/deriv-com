const breakpoint = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    desktop: '1980px',
    desktopL: '1980px',
}

const device = {
    mobileS: `(max-width: ${breakpoint.sm})`,
    mobileM: `(max-width: ${breakpoint.sm})`,
    mobileL: `(max-width: ${breakpoint.sm})`,
    tablet: `(max-width: ${breakpoint.md})`,
    laptop: `(max-width: ${breakpoint.xl})`,
    laptopL: `(max-width: ${breakpoint.xl})`,
    desktop: `(max-width: ${breakpoint.desktop})`,
    desktopL: `(min-width: ${breakpoint.desktop})`,
    sm: `(max-width: ${breakpoint.sm})`,
    md: `(max-width: ${breakpoint.md})`,
    lg: `(max-width: ${breakpoint.lg})`,
    xl: `(max-width: ${breakpoint.xl})`,
}

export default device
