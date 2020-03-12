export const convertToHash = (category, label) => {
    return '/help-centre/' + category.replace(/\s/g, '-').toLowerCase() + '#' + label
}