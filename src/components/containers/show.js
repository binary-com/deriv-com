import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { isEuCountry } from 'common/country-base'
import { BinarySocketBase } from 'common/websocket/socket_base'

const Show = ({ children, to, device }) => {
    const [invisible, setInvisible] = useState(true)

    useEffect(() => {
        BinarySocketBase.wait('website_status', 'landing_company').then(() => {
            switch (to) {
                case 'eu':
                    setInvisible(isEuCountry())
                    break
                case 'non-eu':
                    setInvisible(!isEuCountry())
                    break
                default:
                    break
            }
        })
        switch (device) {
            case 'laptop':
                //TODO: add breakpoints for laptop > window.innerwidth here, and update setInvisible memoized state
                break
            case 'mobile':
                //TODO: add breakpoints for mobile > window.innerwidth here, and update setInvisible memoized state
                break
            default:
                break
        }
    })
    return !invisible ? <div>{children}</div> : null
}

Show.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    device: PropTypes.string,
    to: PropTypes.string,
}
export default Show
