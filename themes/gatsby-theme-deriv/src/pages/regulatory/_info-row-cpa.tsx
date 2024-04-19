import React from 'react'
import { ContentText } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { Localize } from 'components/localization'
import useIsRowCpa from 'components/hooks/use-is-row-cpa'

const InfoRowCpa = () => {
    const is_row_cpa = useIsRowCpa()

    if(is_row_cpa) return null;

    return (
        <>
            <ContentText
                className="max-w-[816px] mx-auto bg-background-primary-container max-sm:px-800 max-lg:px-1200"
                title="Deriv Investments (Europe) Limited"
            >
                <Text className="text-start">
                    <Localize
                        translate_text="_t_Deriv Investments (Europe) Limited, incorporated on 22 April 2015 (Company No. C 70156), is based in Malta with its registered address at Level 3, W Business Centre, Triq Dun Karm, Birkirkara BKR9033, and is regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services (<0>view licence</0>)._t_"
                        components={[
                            <a
                                key={0}
                                href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                className="underline text-typography-default inline text-base"
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </Text>
            </ContentText>
        </>
    )
}

export default InfoRowCpa
