import React from 'react'
import PropTypes from 'prop-types'

export const LocationContext = React.createContext(null)

export const LocationProvider = ({ is_eu_country, children }) => (
    <LocationContext.Provider value={{ is_eu_country }}>{children}</LocationContext.Provider>
)

LocationProvider.propTypes = {
    children: PropTypes.node.isRequired,
    is_eu_country: PropTypes.boolean,
}
