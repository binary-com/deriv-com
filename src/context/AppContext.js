import React from 'react'
const defaultState = {
    dark: false,
}

const AppContext = React.createContext(defaultState)

class AppProvider extends React.Component {
    state = {
        dark: 'themeprovider',
    }

    render() {
        const { children } = this.props
        const { dark } = this.state
        return (
            <AppContext.Provider
                value={{
                    dark,
                }}
            >
                {children}
            </AppContext.Provider>
        )
    }
}

export default AppContext

export { AppProvider }
