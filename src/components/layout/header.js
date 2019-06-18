import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `#000`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                    padding: `0.5rem`,
                }}
            >
                Home
            </Link>
            <Link
                to="/about/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                    padding: `0.5rem`,
                }}
            >
                About
            </Link>
            <Link
                to="/contact/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                    padding: `0.5rem`,
                }}
            >
                Contact
            </Link>
            <Link
                to="/terms-and-conditions/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                    padding: `0.5rem`,
                }}
            >
                Terms and Conditions
            </Link>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
