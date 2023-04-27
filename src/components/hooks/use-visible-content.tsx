// import { useMemo } from 'react'
import { TSmartContent } from 'types/generics'

export interface IUseVisibleContent<T extends TSmartContent<unknown, object>> {
    config: T['visibility']
    content: T[]
}

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

function useVisibleContent<T extends TSmartContent<unknown, object>>({
    config,
    content,
}: IUseVisibleContent<T>): T[] {
    // const visible_items = useMemo(() => {
    //     return filterVisibleContent(content, config)
    // }, [content, config])

    // return visible_items
    return filterVisibleContent(content, config)
}

export default useVisibleContent
