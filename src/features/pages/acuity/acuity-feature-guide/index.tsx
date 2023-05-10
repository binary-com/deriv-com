import React from 'react'
import { acuity_feature_guide_data } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const AcuityFeatureGuide = () => {
    const { is_eu } = useRegion()

    return (
        <FlexBox.Box container="fluid" direction={'col'} mt={'20x'} md={{ mt: '40x' }}>
            {acuity_feature_guide_data.map((feature) => {
                return (
                    <FlexBox.Box
                        key={feature?.id}
                        direction="col-reverse"
                        mb={'10x'}
                        justify={'center'}
                        align="center"
                        md={{
                            direction: feature?.direction,
                            justify: 'between',
                        }}
                    >
                        <FlexBox.Box direction={'col'} md={{ basis: '5-12' }}>
                            <Typography.Paragraph
                                align={'center'}
                                mb={'8x'}
                                weight={'normal'}
                                size="large"
                            >
                                <Localize translate_text={feature?.description} />
                            </Typography.Paragraph>
                            <FlexBox.Item
                                align_self="center"
                                margin_block="10x"
                                md={{ basis: '4-12' }}
                            >
                                {typeof feature.button === 'function'
                                    ? feature.button({ is_eu })
                                    : feature.button}
                            </FlexBox.Item>

                            {feature?.info_title ? (
                                <Typography.Paragraph
                                    mt={'6x'}
                                    weight="normal"
                                    textcolor="light"
                                    align="center"
                                >
                                    <Localize translate_text={feature?.info_title} />
                                </Typography.Paragraph>
                            ) : null}
                        </FlexBox.Box>
                        <FlexBox.Box
                            margin_inline={'24x'}
                            margin_block={'14x'}
                            md={{ basis: '4-12' }}
                        >
                            {feature?.image}
                        </FlexBox.Box>
                    </FlexBox.Box>
                )
            })}
        </FlexBox.Box>
    )
}
export default AcuityFeatureGuide
