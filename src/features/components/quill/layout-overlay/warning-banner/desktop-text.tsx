import React from 'react'
import { FluidContainer, Section, Text } from '@deriv/quill-design'
import { Localize } from 'components/localization'

type TextProps = {
    loss_percent: number
}

const DesktopText = ({ loss_percent }: TextProps) => {
    return (
        <div className="hidden sm:!block">
            <Section className="bg-solid-slate-700 py-general-md fixed left-general-none top-general-none w-full z-[60]">
                <FluidContainer>
                    <Text className="text-solid-slate-50" size="sm">
                        <Localize
                            translate_text="_t_The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money._t_"
                            values={{ loss_percent }}
                        />
                    </Text>
                </FluidContainer>
            </Section>
            <div className="w-full sm:h-[126px] min-[708px]:h-[104px] min-[952px]:h-[82px]" />
        </div>
    )
}

export default DesktopText
