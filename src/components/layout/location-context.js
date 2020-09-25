import React from 'react'
import PropTypes from 'prop-types'

export const LocationContext = React.createContext(true) // undefined => true

export const LocationProvider = ({
    has_mounted,
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
                has_mounted,
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
    has_mounted: PropTypes.bool,
    is_eu_country: PropTypes.bool,
    is_livechat_interactive: PropTypes.bool,
    LC_API: PropTypes.object,
    setModalPayload: PropTypes.func,
    show_cookie_banner: PropTypes.bool,
    toggleModal: PropTypes.func,
}
