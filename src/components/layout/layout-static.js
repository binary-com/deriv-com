import React from 'react'
import PropTypes from 'prop-types'
import NavStatic from './nav-static'

const LayoutStatic = ({ children }) => (
    <>
        <NavStatic />
        <main>{children}</main>
    </>
)

LayoutStatic.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutStatic
