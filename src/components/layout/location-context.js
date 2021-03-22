import React from 'react'
import PropTypes from 'prop-types'

export const LocationContext = React.createContext(true) // undefined => true

export const LocationProvider = ({
    has_mounted,
    show_cookie_banner,
    children,
    setModalPayload,
    toggleModal,
}) => {
    return (
        <LocationContext.Provider
            value={{
                has_mounted,
                show_cookie_banner,
                setModalPayload,
                toggleModal,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

LocationProvider.propTypes = {
    children: PropTypes.node.isRequired,
    has_mounted: PropTypes.bool,
    LC_API: PropTypes.object,
    setModalPayload: PropTypes.func,
    show_cookie_banner: PropTypes.bool,
    toggleModal: PropTypes.func,
}
