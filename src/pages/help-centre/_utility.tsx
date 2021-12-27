type UtilityType = {
    category?: string
    label?: string
    articles?: string[] | number[]
    array?: number | any
    length?: number | any
}

export const convertToHash = ({ category, label }: UtilityType): string => {
    return '/help-centre/' + category.replace(/\s/g, '-').toLowerCase() + '/#' + label
}

export const getAllArticles = ({ articles }: UtilityType): string[] =>
    articles
        .map((category) => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr: string, article_arr: string) => arr.concat(article_arr), [])

export const splitArticles = ({ array, length }: UtilityType): number[] =>
    array.reduce((result, item, index) => {
        if (index % length === 0) result.push([])
        result[Math.floor(index / length)].push(item)
        return result
    }, [])

export const euArticles = ({ array }: UtilityType): number[] => {
    const second_array = [...array[1], array[2][0]]
    return [array[0], second_array, [array[2][1]], [array[2][2]]]
}
