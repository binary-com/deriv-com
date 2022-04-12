import React from 'react'
// import 'jest-styled-components'
import { WithIntl } from 'components/localization'
import { getWindowWidth } from 'common/utility'

const x = () => {
    return getWindowWidth()
}

const Test = () => {
    return (
        <div>
            {x()}
            <h1 style={{ color: 'white', fontSize: '120px' }}>Test</h1>
        </div>
    )
}

export default WithIntl()(Test)
