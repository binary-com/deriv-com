import React from 'react'
import { what_have_text, what_have_wrapper } from '../deriv-ctrader.module.scss'
import { content_data } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const WhatIsDerivEZ = () => {
    const mobile_flex_direction = 'col-reverse'
    return (
        <FlexBox.Box container="fluid" direction={'col'} mt={'20x'} md={{ mt: '40x' }}>
            {content_data.map((feature, index) => {
                return (
                    <FlexBox.Box
                        key={feature.id}
                        direction={mobile_flex_direction}
                        justify={'center'}
                        align="center"
                        md={{
                            direction: index == 0 || index % 2 == 0 ? 'row' : 'row-reverse',
                            justify: 'between',
                        }}
                    >
                        <FlexBox.Box direction={'col'} md={{ basis: '5-12' }}>
                            {feature?.title ? (
                                <Typography.Heading mb={'8x'} size="large" textcolor="primary">
                                    <Localize translate_text={feature?.title} />
                                </Typography.Heading>
                            ) : null}

                            <Typography.Paragraph>
                                <Localize translate_text={feature?.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                        <FlexBox.Box
                            margin_inline={'24x'}
                            margin_block={'14x'}
                            md={{ basis: '5-12', margin: '10x' }}
                        >
                            {feature?.image}
                        </FlexBox.Box>
                    </FlexBox.Box>
                )
            })}
        </FlexBox.Box>
    )
}
export default WhatIsDerivEZ
