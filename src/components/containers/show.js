import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { isEuCountry } from 'common/country-base'
import { BinarySocketBase } from 'common/websocket/socket_base'
import styled from 'styled-components'

const ConditionalShow = styled.div`
    display: ${props => (props.invisible ? 'none' : 'block')} !important;
`

const Show = ({ children, for_show }) => {
    const [invisible, setInvisible] = useState(true)

    useEffect(() => {
        BinarySocketBase.wait('website_status', 'landing_company').then(() => {
            switch (for_show) {
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
    })
    return <ConditionalShow invisible={invisible}>{children}</ConditionalShow>
}

Show.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    for_show: PropTypes.string,
}
export default Show
