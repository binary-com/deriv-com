import React from 'react'

// Pass in callback that will be fired on outside click of the ref
export const useOutsideClick = <T extends HTMLElement>(
    ref: React.MutableRefObject<T>,
    callback: () => void,
    other_ref?: React.MutableRefObject<T>,
    event = 'click',
) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            if (other_ref && other_ref.current.contains(e.target)) return
            callback()
        }
    }

    React.useEffect(() => {
        document.addEventListener(event, handleClick)

        return () => {
            document.removeEventListener(event, handleClick)
        }
    }, [])
}
