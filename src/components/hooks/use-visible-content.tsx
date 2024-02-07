import { useEffect, useMemo, useRef, useState } from 'react'
import isEqual from 'lodash.isequal'
import { useUpdateEffect } from 'usehooks-ts'
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
    const visible_items = useMemo(() => {
        return filterVisibleContent(content, config)
    }, [content, config])

    const prevVisibleItemsRef = useRef<T[]>([])
    const [items, setItems] = useState<T[]>([])

    useEffect(() => {
        setItems(visible_items)
        prevVisibleItemsRef.current = visible_items
    }, [])

    useUpdateEffect(() => {
        if (!isEqual(prevVisibleItemsRef.current, visible_items)) {
            setItems(visible_items)
            prevVisibleItemsRef.current = visible_items
        }
    }, [visible_items])

    return items
}

export default useVisibleContent
