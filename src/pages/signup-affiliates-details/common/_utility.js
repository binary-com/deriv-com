import validation from './_validation'

export const getSignupAffiliateValue = (input) => {
    return input
}

export const resetSignupAffiliateDetails = (values, is_input_country) => {
    const errors = {}
    const inputFields = Object.keys(values).filter((el) => el !== 'residence_list')
    inputFields.forEach((item) => {
        if (item !== 'country') {
            if (validation[item](values[item])) {
                errors[item] = validation[item](values[item])
            }
        } else {
            if (validation[item](values[item], is_input_country)) {
                errors[item] = validation[item](values[item], is_input_country)
            }
        }
    })
    return errors
}
