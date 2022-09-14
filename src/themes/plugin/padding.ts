/**
 * @description splits the value with space and transform the padding short-hand to css logical properties
 * @param padding : the short-hand padding value
 * @returns the transformed logical property
 */
export const transformPadding = (padding: string) => {
    if (padding.includes('calc') || padding.includes('var')) {
        return `padding: ${padding};`
    }

    const paddings = padding?.split?.(' ')
    switch (paddings?.length) {
        case 1:
        case 2:
            return `padding: ${padding};`
        case 3:
            return `padding-block-start: ${paddings[0]};padding-inline: ${paddings[1]};padding-block-end: ${paddings[2]}`
        case 4:
            return `padding-block-start: ${paddings[0]};padding-inline-end: ${paddings[1]};padding-block-end: ${paddings[2]};padding-inline-start: ${paddings[3]};`
        default:
            return `padding: ${padding};`
    }
}
