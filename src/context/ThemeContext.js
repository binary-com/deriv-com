import React from 'react'
import { socket } from '../common/binary_socket'

const defaultState = {
    dark: false,
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
    state = {
        dark: 'themeprovider',
    }

    componentDidMount() {
        // Getting dark mode value from localStorage!
    }

    render() {
        const { children } = this.props
        const { dark } = this.state
        return (
            <ThemeContext.Provider
                value={{
                    dark,
                }}
            >
                {children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext

export { ThemeProvider }
