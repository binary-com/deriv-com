/**
 * @description splits the value with space and transform the border-radius short-hand to css logical properties
 * @param borderRadius : the short-hand border-radius value
 * @returns the transformed logical property
 */
export const transformBorderRadius = (borderRadius: string) => {
    if (borderRadius.includes('calc') || borderRadius.includes('var')) {
        return `border-radius: ${borderRadius};`
    }

    const radiuses = borderRadius?.split?.(' ')
    switch (radiuses?.length) {
        case 1:
        case 2:
            return `border-radius: ${borderRadius};`
        case 3:
            return `border-start-start-radius: ${radiuses[0]};border-start-end-radius: ${radiuses[1]};border-bottom-left-radius: ${radiuses[1]};border-end-start-radius: ${radiuses[2]}`
        case 4:
            return `border-start-start-radius: ${radiuses[0]};border-start-end-radius: ${radiuses[1]};border-end-end-radius: ${radiuses[2]};border-end-start-radius: ${radiuses[3]};`
        default:
            return `border-radius: ${borderRadius};`
    }
}
