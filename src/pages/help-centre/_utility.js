export const convertToHash = (category, label) => {
    return '/help-centre/' + category.replace(/\s/g, '-').toLowerCase() + '#' + label
}

export const getAllArticles = (articles) =>
    articles
        .map((category) => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

export const splitArticles = (array, length) =>
    array.reduce((result, item, index) => {
        if (index % length === 0) result.push([])
        result[Math.floor(index / length)].push(item)
        return result
    }, [])

export const euArticles = (array) => {
    const second_array = [...array[1], array[2][0]]
    return [array[0], second_array, [array[2][1]]]
}