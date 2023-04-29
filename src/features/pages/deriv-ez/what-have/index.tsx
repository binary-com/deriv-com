import React from 'react'
import { features } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const WhatIsDerivEZ = () => {
    return (
        <FlexBox.Box justify={'center'}>
            <FlexBox.Box direction={'col'} mt={'20x'} md={{ mt: '40x' }}>
                {features.map((feature) => {
                    return (
                        <FlexBox.Box
                            key={feature.title}
                            direction={'col'}
                            margin_inline={'8x'}
                            md={{
                                margin_block: '10x',
                                direction: feature?.direction || 'row',
                                justify: 'evenly',
                                align: 'center',
                            }}
                        >
                            <FlexBox.Box direction={'col'} md={{ basis: '5-12' }}>
                                <Typography.Heading>
                                    <Localize translate_text={feature.title} />
                                </Typography.Heading>
                                <Typography.Paragraph pt={'6x'}>
                                    <Localize translate_text={feature.subtitle} />
                                </Typography.Paragraph>
                            </FlexBox.Box>
                            <FlexBox.Box
                                margin_inline={'24x'}
                                margin_block={'14x'}
                                md={{ basis: '4-12' }}
                            >
                                {feature.image}
                            </FlexBox.Box>
                        </FlexBox.Box>
                    )
                })}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}
export default WhatIsDerivEZ
