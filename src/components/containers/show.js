import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEuCountry } from 'common/country-base'
import { BinarySocketBase } from 'common/websocket/socket_base'
import styled from 'styled-components'

const ConditionalShow = styled.div`
    display: ${props => (props.invisible ? 'none' : 'block')} !important;
`
class Show extends Component {
    state = {
        invisible: true,
    }

    componentDidMount() {
        BinarySocketBase.wait('website_status', 'landing_company').then(() => {
            switch (this.props.for_show) {
                case 'eu':
                    this.setState({
                        invisible: isEuCountry(),
                    })
                    break
                case 'non-eu':
                    this.setState({
                        invisible: !isEuCountry(),
                    })
                    break
                default:
                    break
            }
        })
    }
    render() {
        return (
            <ConditionalShow invisible={this.state.invisible}>
                {this.props.children}
            </ConditionalShow>
        )
    }
}

Show.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    for_show: PropTypes.string,
}
export default Show
