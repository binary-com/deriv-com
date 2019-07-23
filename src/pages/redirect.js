import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import queryString from 'query-string'
import { getDerivAppLink } from 'common/utility'

const Redirect = ({ location }) => {
    useEffect(() => {
        const config = queryString.parseUrl(location.href)
        const { action, code: token } = config.query
        const string_params = queryString.stringify(config.query)

        const actions_map = {
            signup: { path: getDerivAppLink() },
        }

        const redirect_config = actions_map[action]
        if (redirect_config && token) {
            window.location.href = `${redirect_config.path}?${string_params}`
        } else {
            navigate('/')
        }
    }, [])

    return <></>
}

Redirect.propTypes = {
    location: PropTypes.object,
}

export default Redirect
