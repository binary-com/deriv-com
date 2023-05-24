import React from 'react'
import { content_data } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const WhatIsDerivEZ = () => {
    return (
        <FlexBox.Box container="fluid" direction={'col'} pt={'20x'} md={{ pt: '40x' }}>
            {content_data.map((content, index) => {
                return (
                    <FlexBox.Box
                        key={content.id}
                        direction={'col'}
                        mb={'10x'}
                        justify={'center'}
                        align="center"
                        md={{
                            direction: index == 0 || index % 2 == 0 ? 'row' : 'row-reverse',
                            justify: 'between',
                        }}
                    >
                        <FlexBox.Box direction={'col'} md={{ basis: '6-12' }}>
                            <Typography.Heading mb={'6x'} align="left" textcolor="primary">
                                <Localize translate_text={content.title} />
                            </Typography.Heading>
                            <Typography.Paragraph align={'left'} mb={'8x'}>
                                <Localize translate_text={content.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                        <FlexBox.Item
                            margin_inline={'24x'}
                            margin_block={'14x'}
                            md={{ basis: '4-12' }}
                        >
                            {content.image}
                        </FlexBox.Item>
                    </FlexBox.Box>
                )
            })}
        </FlexBox.Box>
    )
}
export default WhatIsDerivEZ
