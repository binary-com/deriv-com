import React from 'react'

// Fires a callback after a useState update
export const useStateWithCallback = (initialState, callback) => {
    const [state, setState] = React.useState(initialState)

    React.useEffect(() => {
        callback(state)
    }, [state, callback])

    return [state, setState]
}
