import React from 'react'
import PropTypes from 'prop-types'

export const LocationContext = React.createContext(true) // undefined => true

export const LocationProvider = ({
    is_eu_country,
    show_cookie_banner,
    children,
    setModalPayload,
    toggleModal,
    is_livechat_interactive,
    LC_API,
    crypto_config,
}) => {
    return (
        <LocationContext.Provider
            value={{
                is_eu_country,
                show_cookie_banner,
                setModalPayload,
                toggleModal,
                is_livechat_interactive,
                LC_API,
                crypto_config,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

LocationProvider.propTypes = {
    children: PropTypes.node.isRequired,
    crypto_config: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    is_eu_country: PropTypes.bool,
    is_livechat_interactive: PropTypes.bool,
    LC_API: PropTypes.object,
    setModalPayload: PropTypes.object,
    show_cookie_banner: PropTypes.bool,
    toggleModal: PropTypes.func,
}
