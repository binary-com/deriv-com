import { all_questions } from './_constants'
import { TString } from 'types/generics'

export const getUntranslatedCategory = (category: TString) =>
    category.substring(3, category.length - 3)

export const convertToHash = (category: string, label: string, platform?: string) => {
    const format_category = category.replace(/\s/g, '-').toLowerCase()
    if (format_category.includes('deriv-mt5')) {
        return platform
            ? `/help-centre/dmt5/?platform=${platform}#${label}`
            : `/help-centre/dmt5/#${label}`
    }
    return platform
        ? `/help-centre/${format_category}/?platform=${platform}#${label}`
        : `/help-centre/${format_category}/#${label}`
}

export const getQuestionsBySection = (question_section: string) =>
    all_questions.filter(({ section }) => section === question_section)
