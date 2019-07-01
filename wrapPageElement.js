import React from 'react'
import Layout from './src/components/layout/layout'

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export default wrapPageElement
