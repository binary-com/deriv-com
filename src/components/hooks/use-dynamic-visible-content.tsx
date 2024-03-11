import { useEffect, useMemo, useRef, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { ObjectPropType, TSmartContent } from 'types/generics'

export interface IUseDynamicVisibleContent<T extends TSmartContent<unknown, object>> {
    config: {
        [key in keyof T['visibility']]?: (value: ObjectPropType<T['visibility'], key>) => boolean
    }
    content: T[]
}

function filterDynamicVisibleContent<T extends TSmartContent<unknown, object>, K extends object>(
    array: T[],
    filters: K,
) {
    const filterKeys = Object.keys(filters)
    return array.filter((item) => {
        // validates all filter criteria
        return filterKeys.every((key) => {
            // ignores non-function predicates
            if (typeof filters[key] !== 'function') return true
            return filters[key](item?.visibility?.[key])
        })
    })
}

function useDynamicVisibleContent<T extends TSmartContent<unknown, object>>({
    config,
    content,
}: IUseDynamicVisibleContent<T>): T[] {
    const visible_items = useMemo(() => {
        return filterDynamicVisibleContent(content, config)
    }, [content, config])

    const prevVisibleItemsRef = useRef<T[]>([])
    const [items, setItems] = useState<T[]>([])

    useEffect(() => {
        setItems(visible_items)
        prevVisibleItemsRef.current = visible_items
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useUpdateEffect(() => {
        setItems(visible_items)
        prevVisibleItemsRef.current = visible_items
    }, [visible_items])

    return items
}

export default useDynamicVisibleContent
