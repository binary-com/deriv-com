import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

export const Desktop = ({ children }) => {
    const { mobileL } = size
    const [is_mobile] = useBrowserResize(mobileL)

    if (!is_mobile) {
        return <>{children}</>
    }

    return <></>
}

export const Mobile = ({ children }) => {
    const { mobileL } = size
    const [is_mobile] = useBrowserResize(mobileL)

    if (is_mobile) {
        return <>{children}</>
    }

    return <></>
}

Desktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Mobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
