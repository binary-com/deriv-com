import { TQuestions, TQuestionsData } from './_data-types'
import { useCountryRule } from 'components/hooks/use-country-rule'

export const useFilteredQuestions = (data: TQuestions[]) => {
    const { is_eu } = useCountryRule()
    return data.filter(({ hide_for_eu, hide_for_non_eu }) =>
        is_eu ? !hide_for_eu : !hide_for_non_eu,
    )
}

export const useFilteredCategory = (data: TQuestionsData[]) => {
    const { is_eu } = useCountryRule()
    return data.filter((item) => (is_eu ? !item.hide_for_eu : item))
}
