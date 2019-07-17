const breakpoint = {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1980px',
}

const device = {
    xs: `(max-width: ${breakpoint.xs})`,
    sm: `(max-width: ${breakpoint.sm})`,
    md: `(max-width: ${breakpoint.md})`,
    lg: `(max-width: ${breakpoint.lg})`,
    xl: `(max-width: ${breakpoint.xl})`,
    xxl: `(min-width: ${breakpoint.xl})`,
}

export default device
