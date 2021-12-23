import React from 'react'

export const Delayed = ({ children, delay }) => {
    const [isShown, setIsShown] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setIsShown(true)
        }, delay)
    }, [delay])

    return isShown ? children : null
}
