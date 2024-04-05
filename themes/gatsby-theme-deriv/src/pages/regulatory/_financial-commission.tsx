import React, { useEffect, useState } from 'react'
import { ContentText } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { deriv_app_url } from 'common/constants'
import { Localize, localize } from 'components/localization'
import { useLivechat } from 'components/hooks/use-livechat'
import useBuildVariant from 'features/hooks/use-build-variant'
import useRegion from 'components/hooks/use-region'

const FinancialCommission = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const {region} = useBuildVariant()
    const { is_cpa_plan } = useRegion()
    const [is_row_cpa, setIsRowCpa] = useState(true)

    useEffect(() => {
        if (region === "row" || is_cpa_plan) {
            setIsRowCpa(false)
        } else {
            setIsRowCpa(true)
        }
    }, [region, is_cpa_plan])

    console.log("==>", "FinancialCommission", is_row_cpa)

    if(is_row_cpa){
        return (
            <ContentText
                className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                title={localize(`_t_The Financial Commission_t_`)}
            >
                <Text className="text-start pb-800">
                    <Localize
                        translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                        components={[
                            <a
                                key={0}
                                href="/regulatory/deriv-com-ltd-membership.pdf"
                                className="underline text-typography-default inline text-base"
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </Text>
                <Text className="text-start">
                    <Localize
                        translate_text="_t_For fair resolution of any complaints, please contact us via <0>live chat</0>. To learn more, see our <1>complaint policy</1>._t_"
                        components={[
                            <span
                                key={0}
                                className="underline text-typography-default inline text-base cursor-pointer"
                                onClick={() => {
                                    is_livechat_interactive && LC_API.open_chat_window()
                                }}
                            />,
                            <a
                                key={1}
                                href={`${deriv_app_url}/complaints-policy`}
                                className="underline text-typography-default inline text-base"
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </Text>
            </ContentText>
        )
    }

    return (
        <ContentText
            className=" max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
            title={localize(`_t_The Financial Commission_t_`)}
        >
            <Text className="text-start">
                <Localize
                    translate_text="_t_We are registered with the Financial Commission, an international independent organisation dedicated to resolving disputes within the financial services industry (<0>view membership</0>)._t_"
                    components={[
                        <a
                            key={0}
                            href="/regulatory/deriv-com-ltd-membership.pdf"
                            className="underline text-typography-default inline text-base"
                            target="_blank"
                            rel="noopener noreferrer"
                        />,
                    ]}
                />
            </Text>
            <Text className="text-start">
                <Localize
                    translate_text="_t_For fair resolution of any complaints, please contact us via <0>live chat</0>._t_"
                    components={[
                        <span
                            key={0}
                            className="underline text-typography-default inline text-base cursor-pointer"
                            onClick={() => {
                                is_livechat_interactive && LC_API.open_chat_window()
                            }}
                        />,
                    ]}
                />
            </Text>
        </ContentText>
    )
}

export default FinancialCommission