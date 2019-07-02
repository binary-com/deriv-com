import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const has_document = typeof document !== 'undefined'
const el_portal_root = has_document ? document.getElementById('modal') : null
const el_gatsby_root = has_document
    ? document.getElementById('___gatsby')
    : null
const blur_style = 'blur(2px)'

class Portal extends Component {
    constructor() {
        super()

        this.el_portal = has_document ? document.createElement('div') : null
    }

    componentDidMount = () => {
        el_portal_root.appendChild(this.el)
    }

    componentWillUnmount = () => {
        el_portal_root.removeChild(this.el)
    }

    render() {
        const { children, is_open, is_blurred } = this.props

        if (el_gatsby_root && is_blurred) {
            el_gatsby_root.style.filter = is_open ? blur_style : 'none'
        }
        if (this.el_div) {
            return ReactDOM.createPortal(children, this.el_portal)
        }

        return null
    }
}

Portal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    is_blurred: PropTypes.bool,
    is_open: PropTypes.bool.isRequired,
}

export default Portal
