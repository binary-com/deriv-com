import { useContext } from 'react'
import { TQuestions, TQuestionsData } from './_data-types'
import { DerivStore } from 'store'

export const useFilteredQuestions = (data: TQuestions[]) => {
    const { is_eu_country } = useContext(DerivStore)

    return data.filter(({ hide_for_eu, hide_for_non_eu }) =>
        is_eu_country ? !hide_for_eu : !hide_for_non_eu,
    )
}

export const useFilteredCategory = (data: TQuestionsData[]) => {
    const { is_eu_country } = useContext(DerivStore)

    return data.filter((item) => (is_eu_country ? !item.hide_for_eu : item))
}
