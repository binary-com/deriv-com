import React from 'react'
import { Features } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import IconWithList from '../component/icon-list'
import { leftImage, leftImageEU, listData } from './data'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'
import useRegion from 'components/hooks/use-region'

type listDataType = {
    id: number
    text: TString
}

const HowTradingLimits = () => {
    const { is_eu, is_row } = useRegion()
    return (
        <Features.ContentLeft
            title={localize('_t_How trading limits and self-exclusion work_t_')}
            content={is_eu ? leftImageEU : leftImage}
            contentTop={true}
            className="[&>div]:lg:gap-gap-3xl"
        >
            <div className="flex gap-gap-lg  flex-col">
                {listData.map((item: listDataType) => {
                    return <IconWithList content={item.text} key={item.id} />
                })}
            </div>
            {is_row && (
                <Text size="md">
                    <Localize
                        translate_text="_t_If you wish to reduce or remove the self-exclusion period, contact <0>Customer Support</0>._t_"
                        components={[
                            <CustomLink
                                key={0}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/contact_us/"
                                size="md"
                                className="text-typography-default inline underline"
                            />,
                        ]}
                    />
                </Text>
            )}
        </Features.ContentLeft>
    )
}

export default HowTradingLimits
