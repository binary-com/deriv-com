import { useMemo } from 'react'
import useRegion from './use-region'
import { TSmartContent } from 'types/generics'
import { TRegions } from 'store/region-context'

export function filterVisibleContent<T extends TSmartContent<unknown, object>, K extends object>(
    array: T[],
    filters: K,
) {
    const filterKeys = Object.keys(filters)
    return array.filter((item) => {
        return filterKeys.every((key) => {
            if (item?.visibility?.[key] === undefined) return true
            return filters[key] === item.visibility[key]
        })
    })
}

function useNewContent<T extends TSmartContent<unknown, object>>(
    content: T[],
    config: TRegions[],
): T[] {
    const regions = useRegion()
    const visibility_config = config.reduce(
        (accumulator, current_value) => (
            (accumulator[current_value] = regions[current_value]), accumulator
        ),
        {},
    )
    console.log('new approach: ', visibility_config)
    const visible_items = useMemo(() => {
        return filterVisibleContent(content, visibility_config)
    }, [content, visibility_config])

    return visible_items
}

export default useNewContent
