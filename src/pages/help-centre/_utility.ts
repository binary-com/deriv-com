// disable-translation
import { ArcticlesType } from './_help-articles'

export const convertToHash = (category, label, qparam) => {
    const regex = new RegExp(/(_t_)(?<pure_text>.*?)(_t_)/g)
    const result = regex.exec(category)
    // since we are passing the translation key to link generator, we have to remove the "_t_" prefix and postfix
    // TODO: this should be removed when the help center is updated with new translation approach
    const pure_category_text = result?.[2] ?? category

    const categoryFormatter = pure_category_text.replace(/\s/g, '-').toLowerCase()
    if (qparam) {
        return `/help-centre/${categoryFormatter}/?platform=${qparam}#${label}`
    } else {
        return `/help-centre/${categoryFormatter}/#${label}`
    }
}

export const getAllArticles = (articles: ArcticlesType[]) =>
    articles
        .map((category) => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

export const splitArticles = (array: ArcticlesType[], length: number): string[] =>
    array.reduce((result, item, index) => {
        if (index % length === 0) result.push([])
        result[Math.floor(index / length)].push(item)
        return result
    }, [])

export const euArticles = (array: string[]): [string, string[], string[], string[]] => {
    const second_array = [...array[1], array[2][0]]
    return [array[0], second_array, [array[2][1]], [array[2][2]]]
}
