type UtilityType = {
    category?: string
    label?: string
    articles?: string[] | number[]
    array?: any[]
    result?: any[]
    length?: number
}

export const convertToHash = ({ category, label }: UtilityType): string => {
    return '/help-centre/' + category.replace(/\s/g, '-').toLowerCase() + '/#' + label
}

export const getAllArticles = ({ articles }: UtilityType) =>
    articles
        .map((category) => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

export const splitArticles = ({ array, length }: UtilityType) =>
    array.reduce((result, item, index) => {
        if (index % length === 0) result.push([])
        result[Math.floor(index / length)].push(item)
        return result
    }, [])

export const euArticles = ({ result }: UtilityType) => {
    const second_array = [...result[1], result[2][0]]
    return [result[0], second_array, [result[2][1]], [result[2][2]]]
}
