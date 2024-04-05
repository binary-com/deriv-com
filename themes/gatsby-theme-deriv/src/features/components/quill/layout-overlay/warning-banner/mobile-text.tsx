import React from 'react'
import { qtJoin, Text } from '@deriv/quill-design'
import { LabelPairedChevronDownMdRegularIcon } from '@deriv/quill-icons/LabelPaired'
import { Localize } from 'components/localization'

type MobileTextProps = {
    loss_percent: number
    isExpand: boolean
    toggleExpansion: () => void
}

const MobileText = ({isExpand, loss_percent, toggleExpansion}: MobileTextProps) => {
    return (
        <div className="block sm:!hidden">
            {isExpand ? (
                <Text className="text-solid-slate-50 text-50 leading-100">
                    <Localize
                        translate_text="_t_The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money._t_"
                        values={{ loss_percent }}
                    />
                </Text>
            ) : (
                <Text className="text-solid-slate-50 text-50 leading-100">
                    <Localize
                        translate_text="_t_{{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv. Ensure you understand the high risk of loss before trading._t_"
                        values={{ loss_percent }}
                    />
                </Text>
            )}
            <button
                onClick={toggleExpansion}
                className={qtJoin(
                    'block mx-auto will-change-transform',
                    isExpand && 'rotate-180',
                )}
                aria-label="Click here to expand banner text"
            >
                <LabelPairedChevronDownMdRegularIcon className="fill-solid-slate-50" />
            </button>
        </div>
    )
}

export default MobileText