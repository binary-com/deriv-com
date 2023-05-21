const sizes = Object.freeze({
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1980,
})

export type TBreakpointSize = keyof typeof sizes

export const breakpoints = Object.freeze({
    xs: `screen and (max-width: ${sizes.sm}px )`, // 0px - 768px
    sm: `screen and (min-width: ${sizes.sm + 1}px ) and ( max-width: ${sizes.md}px )`, // 769px - 992px
    md: `screen and (min-width: ${sizes.md + 1}px ) and ( max-width: ${sizes.lg}px )`, // 993px - 1200px
    lg: `screen and (min-width: ${sizes.lg + 1}px ) and ( max-width: ${sizes.xl}px )`, // 1201px - 1920px
    xl: `screen and (min-width: ${sizes.xl + 1}px )`, // >= 1921px
})

export type TBreakpoint = keyof typeof breakpoints
