import { TQuestions, TQuestionsData } from './_data-types'
import useBuildVariant from 'features/hooks/use-build-variant'
import useRegion from 'components/hooks/use-region'

// TODO: Need to update these hooks and the questions data structue

export const useFilteredQuestions = (data: TQuestions[]) => {
    const { region } = useBuildVariant()
    return data.filter(({ hide_for_eu, hide_for_non_eu }) =>
        region === "eu" ? !hide_for_eu : !hide_for_non_eu,
    )
}

export const useFilteredCategory = (data: TQuestionsData[]) => {
    const { region } = useBuildVariant()
    const { is_p2p_allowed_country } = useRegion()
    const hide_eu_data = data.filter((item) => (region === "eu" ? !item.hide_for_eu : item))
    return hide_eu_data.filter((item) => (!is_p2p_allowed_country ? !item.hide_non_p2p : item))
}
