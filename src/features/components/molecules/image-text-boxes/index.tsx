import React from 'react'
import { TAcuityFeatures } from './types'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import LinkButton from 'features/components/atoms/link-button'

interface TImageWithParagraph {
    contentData: TAcuityFeatures
}

const ImageWithParagraph = ({ contentData }: TImageWithParagraph) => {
    const { is_eu } = useRegion()
    const { mobileFlexDirection, data } = contentData
    return (
        <FlexBox.Box container="fluid" direction={'col'} mt={'20x'} md={{ mt: '40x' }}>
            {data.map((feature) => {
                return (
                    <FlexBox.Box
                        key={feature?.id}
                        direction={mobileFlexDirection}
                        mb={'10x'}
                        justify={'center'}
                        align="center"
                        md={{
                            direction: feature.direction,
                            justify: 'between',
                        }}
                    >
                        <FlexBox.Box direction={'col'} md={{ basis: '6-12' }}>
                            {feature?.title ? (
                                <Typography.Heading
                                    mb={'8x'}
                                    weight={'bold'}
                                    size="large"
                                    align="center"
                                    textcolor="primary"
                                >
                                    <Localize translate_text={feature?.title} />
                                </Typography.Heading>
                            ) : null}

                            <Typography.Paragraph
                                align={'center'}
                                mb={'8x'}
                                weight={'normal'}
                                size="large"
                            >
                                <Localize translate_text={feature?.subtitle} />
                            </Typography.Paragraph>
                            {feature?.system_url ? (
                                <FlexBox.Item
                                    align_self="center"
                                    margin_block="10x"
                                    md={{ basis: '4-12' }}
                                >
                                    <LinkButton.Primary
                                        url={{
                                            type: 'non-company',
                                            href:
                                                typeof feature.system_url === 'function'
                                                    ? feature.system_url({ is_eu })
                                                    : feature.system_url,
                                        }}
                                    >
                                        <Localize translate_text={feature.button_text} />
                                    </LinkButton.Primary>
                                </FlexBox.Item>
                            ) : null}

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
export default ImageWithParagraph
