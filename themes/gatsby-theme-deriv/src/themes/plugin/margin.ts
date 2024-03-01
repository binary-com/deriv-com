/**
 * @description splits the value with space and transform the margin short-hand to css logical properties
 * @param margin : the short-hand margin value
 * @returns the transformed logical property
 */
export const transformMargin = (margin: string) => {
    if (margin.includes('calc') || margin.includes('var')) {
        return `margin: ${margin};`
    }

    const margins = margin?.split?.(' ')
    switch (margins?.length) {
        case 1:
        case 2:
            return `margin: ${margin};`
        case 3:
            return `margin-block-start: ${margins[0]};margin-inline: ${margins[1]};margin-block-end: ${margins[2]}`
        case 4:
            return `margin-block-start: ${margins[0]};margin-inline-end: ${margins[1]};margin-block-end: ${margins[2]};margin-inline-start: ${margins[3]};`
        default:
            return `margin: ${margin};`
    }
}
