import { useContext } from 'react'
import { TQuestions } from './_data-types'
import { DerivStore } from 'store'

const useFilteredQuestions = (data: TQuestions[]) => {
    const { is_eu_country } = useContext(DerivStore)

    return data.filter(({ hide_for_eu, hide_for_non_eu }) =>
        is_eu_country ? !hide_for_eu : !hide_for_non_eu,
    )
}

export default useFilteredQuestions
