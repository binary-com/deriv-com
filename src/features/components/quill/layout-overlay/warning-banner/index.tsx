import React from 'react'
import { FluidContainer, Section, Text } from '@deriv/quill-design'
import { Localize } from 'components/localization'

const WarningBanner = () => {
    return (
        <Section className="bg-solid-slate-700 py-general-sm">
            <FluidContainer>
                <Text className="text-solid-slate-50" size="sm">
                    <Localize translate_text="_t_The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. 70.1% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money._t_" />
                </Text>
            </FluidContainer>
        </Section>
    )
}

export default WarningBanner
