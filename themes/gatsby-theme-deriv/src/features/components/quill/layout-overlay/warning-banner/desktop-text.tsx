import React from 'react'
import { Text } from '@deriv/quill-design'
import { Localize } from 'components/localization'

const DesktopText = ({ loss_percent }: { loss_percent: number }) => {
    return (
        <div className="hidden sm:!block">
            <Text className="text-solid-slate-50" size="md">
                <Localize
                    translate_text="_t_The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money._t_"
                    values={{ loss_percent }}
                />
            </Text>
        </div>
    )
}

export default DesktopText
