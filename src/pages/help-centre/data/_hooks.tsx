import React from 'react'
import { TTranslatedQuestions, TTranslatedQuestionsData } from './_data-types'
import useRegion from 'components/hooks/use-region'

export const useFilteredQuestions = (data: TTranslatedQuestions[]) => {
    const { is_eu } = useRegion()
    return data.filter(({ hide_for_eu, hide_for_non_eu }) =>
        is_eu ? !hide_for_eu : !hide_for_non_eu,
    )
}

export const useFilteredCategory = (data: TTranslatedQuestionsData[]) => {
    const { is_eu, is_p2p_allowed_country } = useRegion()
    const hide_eu_data = data.filter((item) => (is_eu ? !item.hide_for_eu : item))
    return hide_eu_data.filter((item) => (!is_p2p_allowed_country ? !item.hide_non_p2p : item))
}
