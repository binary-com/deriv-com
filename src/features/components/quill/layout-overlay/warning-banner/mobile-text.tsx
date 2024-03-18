import React, { useState } from 'react'
import { FluidContainer, Section, Text, qtJoin } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { LabelPairedChevronDownMdRegularIcon } from '@deriv/quill-icons/LabelPaired'
import { Localize } from 'components/localization'

type TextProps = {
    loss_percent: number
}

const MobileText = ({ loss_percent }: TextProps) => {
    const [expanded, setExpanded] = useState(false)

    const toggleExpansion = () => {
        setExpanded((prev) => !prev)
    }

    return (
        <div className="block sm:!hidden">
            <Section className="bg-solid-slate-700 py-general-sm fixed left-general-none top-general-none w-full z-[60]">
                <FluidContainer>
                    {expanded ? (
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
                            expanded && 'rotate-180',
                        )}
                        aria-label="Click here to expand banner text"
                    >
                        <LabelPairedChevronDownMdRegularIcon className="fill-solid-slate-50" />
                    </button>
                </FluidContainer>
            </Section>
            <div
                className={qtJoin(
                    'w-full',
                    expanded ? 'h-[184px] min-[402px]:h-[148px]' : 'h-[94px] min-[402px]:h-[76px]',
                )}
            ></div>
        </div>
    )
}

export default MobileText
