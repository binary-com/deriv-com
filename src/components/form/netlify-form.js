import React from 'react'
import PropTypes from 'prop-types'

const NetlifyForm = ({ children, name }) => (
    <form
        method="post"
        name={name}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value={name} />
        {children}
    </form>
)

export default NetlifyForm

NetlifyForm.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
}
