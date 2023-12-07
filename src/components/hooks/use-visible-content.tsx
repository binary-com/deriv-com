import { useEffect, useMemo, useState } from 'react'
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
    const [items, setItems] = useState<T[]>([])
    const visible_items = useMemo(() => {
        return filterVisibleContent(content, config)
    }, [content, config])

    useEffect(() => {
        setItems(visible_items)
    }, [visible_items.length])

    return items
}

export default useVisibleContent
