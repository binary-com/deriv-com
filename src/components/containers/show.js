import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { size } from 'themes/device.js'

const Show = ({ children, device }) => {
    const [deviceVisibility, setdeviceVisibility] = useState(false)
    useEffect(() => {
        if (device) {
            switch (device) {
                case 'laptop':
                    setdeviceVisibility(
                        window.innerWidth > size.tabletL.slice(0, -2),
                    )
                    break
                case 'mobile':
                    setdeviceVisibility(
                        window.innerWidth < size.tabletL.slice(0, -2),
                    )
                    break
                default:
                    break
            }
        }
    })
    return deviceVisibility ? <>{children}</> : null
}

Show.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    device: PropTypes.oneOf(['mobile', 'laptop']),
    to: PropTypes.oneOf(['eu', 'non-eu']),
}
export default Show
