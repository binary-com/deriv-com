import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import { size } from 'themes/device'
import { isEuCountry } from 'common/country-base'
import { BinarySocketBase } from 'common/websocket/socket_base'

const handleEu = (setVisible, to) => (is_eu_country) => {
    switch (to) {
        case 'eu':
            setVisible(is_eu_country)
            break
        case 'non-eu':
            setVisible(!is_eu_country)
            break
        default:
            break
    }
}

const Location = ({ children, to }) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (!to) return

        const clients_country = Cookies.get('clients_country')

        if (clients_country) {
            const showEu = handleEu(setVisible, to)
            showEu(isEuCountry(clients_country))
            return
        }

        const binary_socket = BinarySocketBase.init()

        binary_socket.onopen = () => {
            binary_socket.send(JSON.stringify({ website_status: 1 }))
        }
        binary_socket.onmessage = (msg) => {
            const response = JSON.parse(msg.data)
            if (response.error) {
                const showEu = handleEu(setVisible, to)
                showEu(true)
                binary_socket.close()
                return
            }

            const showEu = handleEu(setVisible, to)
            showEu(isEuCountry(response.clients_country))

            Cookies.set('clients_country', response.clients_country)
            binary_socket.close()
        }
    }, [])
    return visible ? <>{children}</> : null
}

export const Eu = (props) => <Location {...props} to="eu" />

export const NonEu = (props) => <Location {...props} to="non-eu" />

const MaxWidth = styled.div`
    @media (max-width: ${(props) => props.max_width}px) {
        display: none !important;
    }
`

const MinWidth = styled.div`
    @media (min-width: ${(props) => props.min_width}px) {
        display: none !important;
    }
`

export const Desktop = ({ children, ...props }) => (
    <MaxWidth max_width={size.tabletL} {...props}>
        {children}
    </MaxWidth>
)
export const Mobile = ({ children, ...props }) => (
    <MinWidth min_width={size.tabletL} {...props}>
        {children}
    </MinWidth>
)

export default {
    Eu,
    NonEu,
    Mobile,
    Desktop,
}

Location.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    to: PropTypes.oneOf(['eu', 'non-eu']),
}

Desktop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Mobile.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
