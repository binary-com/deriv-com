import React from 'react'
import { CopyrightWrapper } from './common/style.js'
import { Localize } from 'components/localization'
import CopyrightIc from 'images/svg/copyright.svg'
import { Text } from 'components/elements'
const CopyrightSection = () => {
    const current_year = new Date().getFullYear()

    return (
        <CopyrightWrapper>
            <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                <Text ml="0.4rem">
                    <Localize
                        translate_text="{{current_year}} Deriv | All rights reserved"
                        values={{ current_year }}
                    />
                </Text>
    </CopyrightWrapper>
    )
}

export default CopyrightSection
