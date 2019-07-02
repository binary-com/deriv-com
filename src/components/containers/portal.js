import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Check these element is not null before accessing them
const has_document = typeof document !== 'undefined'
const portalRoot = has_document ? document.getElementById('modal') : null
const gatsbyRoot = has_document ? document.getElementById('___gatsby') : null

class Portal extends Component {
    constructor() {
        super()

        this.el = has_document ? document.createElement('div') : null
    }

    componentDidMount = () => {
        portalRoot.appendChild(this.el)
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el)
    }

    render() {
        const { children, is_open, is_blurred } = this.props
        if (gatsbyRoot && is_blurred) {
            gatsbyRoot.style.filter = is_open ? 'blur(2px)' : 'none'
        }
        // Check that this.el is not null before using ReactDOM.createPortal
        if (this.el) {
            return ReactDOM.createPortal(children, this.el)
        } else {
            return null
        }
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
