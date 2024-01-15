import React from 'react'
import { Localize } from 'components/localization'

const WhoCanApply = () => {
    return (
        <div>
            <h1>
                <Localize translate_text="Updated header text" />
            </h1>
            <p>
                <Localize translate_text="Updated paragraph text" />
            </p>
        </div>
    )
}

export default WhoCanApply
