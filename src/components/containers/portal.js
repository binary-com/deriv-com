import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
    typeof document !== `undefined` ? document.getElementById('modal') : null
const gatsbyRoot =
    typeof document !== `undefined`
        ? document.getElementById('___gatsby')
        : null

class Portal extends Component {
    constructor() {
        super()
        // Use a ternary operator to make sure that the document object is defined
        this.el =
            typeof document !== `undefined`
                ? document.createElement('div')
                : null
    }

    componentDidMount = () => {
        portalRoot.appendChild(this.el)
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el)
    }

    render() {
        const { children, is_open } = this.props
        if (gatsbyRoot) {
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
    is_open: PropTypes.bool,
}

export default Portal
