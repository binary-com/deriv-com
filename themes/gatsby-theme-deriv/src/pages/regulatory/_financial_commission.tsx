import React from 'react'
import { ContentText } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { useLivechat } from 'components/hooks/use-livechat'
import { deriv_app_url } from 'common/constants'
import { Localize, localize } from 'components/localization'
import useIsRowCpa from 'components/hooks/use-is-row-cpa'

const FinancialCommission = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const is_row_cpa = useIsRowCpa()

    return (
        <>
            {!is_row_cpa ? (
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
            ) : (
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
            )}
        </>
    )
}

export default FinancialCommission
