import React from 'react'
import { Features } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import IconWithList from '../component/icon-list'
import { leftImage, leftImageEU, EUlistData, ROWlistData } from './data'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type listDataType = {
    id: number
    text: TString
}

const HowTradingLimits = () => {
    const { region } = useBuildVariant()

    const listData = region === 'row' ? ROWlistData : EUlistData
    return (
        <Features.ContentLeft
            title={localize('_t_How trading limits and self-exclusion work_t_')}
            content={region === 'eu' ? leftImageEU : leftImage}
            contentTop={true}
            className="[&>div]:lg:gap-gap-l [&>div>div:first-child]:lg:pl-general-3xl"
        >
            <div className="flex gap-gap-xl  flex-col">
                <div className="flex gap-gap-lg  flex-col">
                    {listData.map((item: listDataType) => {
                        return <IconWithList content={item.text} key={item.id} />
                    })}
                </div>
                {region === 'row' && (
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
            </div>
        </Features.ContentLeft>
    )
}

export default HowTradingLimits
