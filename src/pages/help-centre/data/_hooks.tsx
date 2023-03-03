import React from 'react'
import { TNewQuestions, TNewQuestionsData } from './_data-types'
import useRegion from 'components/hooks/use-region'

export const useFilteredQuestions = (data: TNewQuestions[]) => {
    const { is_eu } = useRegion()
    return data.filter(({ hide_for_eu, hide_for_non_eu }) =>
        is_eu ? !hide_for_eu : !hide_for_non_eu,
    )
}

export const useFilteredCategory = (data: TNewQuestionsData[]) => {
    const { is_eu } = useRegion()
    return data.filter((item) => (is_eu ? !item.hide_for_eu : item))
}
