import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import SEO from 'components/containers/seo'
import Container from 'components/containers/container'
import queryString from 'query-string'

const Redirect = ({ location }) => {
    useEffect(() => {
        const config = queryString.parseUrl(location.href)
        const action = config.query.action
        const token = config.query.code
        const string_params = queryString.stringify(config.query)

        const actions_map = {
            signup: { path: `https://deriv.app/` },
        }

        const redirect_config = actions_map[action]
        if (redirect_config && token) {
            window.location.href = `${redirect_config.path}?${string_params}`
        } else {
            navigate('/')
        }
    }, [])

    return (
        <Container>
            <SEO title="About" />
            <h1>Hi Redirect</h1>
        </Container>
    )
}

Redirect.propTypes = {
    location: PropTypes.object,
}

export default Redirect
