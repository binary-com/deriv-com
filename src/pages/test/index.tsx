import React from 'react'
// import 'jest-styled-components'
import { WithIntl } from 'components/localization'

const Test = () => {
    return (
        <div>
            <h1 style={{ color: 'white', fontSize: '120px' }}>Test</h1>
        </div>
    )
}

export default WithIntl()(Test)
