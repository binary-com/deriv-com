import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { employer_awards_wrapper, image_wrapper } from './who-we-are.module.scss'
import { employer_award_content } from './_data'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import LinkButton from 'features/components/atoms/link-button'
import useRegion from 'components/hooks/use-region'

const EmployerAwards = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <Flex.Box
            direction="col"
            container="fluid"
            padding_block="10x"
            md={{ padding_block: '20x' }}
        >
            {is_row && !is_region_loading && (
                <div>
                    <Typography.Heading size="medium" mb="10x" textcolor="black" align="center">
                        <Localize translate_text={'_t_UFAwards_t_'} />
                    </Typography.Heading>
                    <Flex.Box
                        justify="center"
                        direction="col"
                        align="center"
                        gap="10x"
                        mt="15x"
                        mb="40x"
                        md={{ direction: 'row', mt: '30x', gap: '30x' }}
                    >
                        <div className={image_wrapper}>
                            <StaticImage
                                src="../../images/common/who-we-are/uf-awards.png"
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                alt="banner"
                            />
                        </div>
                        <Flex.Box gap="0x" direction="col">
                            <Typography.Paragraph
                                size="xlarge"
                                mb="10x"
                                textcolor="black"
                                align="left"
                                margin_block="3x"
                            >
                                <Localize
                                    translate_text={'_t_Most Trusted Broker - APAC 2023_t_'}
                                />
                            </Typography.Paragraph>
                            <Typography.Paragraph
                                size="xlarge"
                                mb="10x"
                                textcolor="black"
                                align="left"
                            >
                                <Localize
                                    translate_text={'_t_ Best Forex Spreads - APAC 2023_t_'}
                                />
                            </Typography.Paragraph>
                        </Flex.Box>
                    </Flex.Box>
                </div>
            )}

            <Typography.Heading
                size="medium"
                mb="10x"
                textcolor="black"
                align="center"
                mt="10x"
                id="investors-in-people"
            >
                <Localize translate_text="_t_Employer awards_t_" />
            </Typography.Heading>

            <Flex.Box className={employer_awards_wrapper} direction="col">
                {employer_award_content.map((data) => {
                    return (
                        <div key={data.id}>
                            <Typography.Heading
                                size="small"
                                mb="10x"
                                textcolor="black"
                                align="center"
                                lg={{ align: 'left' }}
                            >
                                <Localize translate_text={data.title} />
                            </Typography.Heading>
                            <Typography.Paragraph
                                size="xlarge"
                                mb="10x"
                                textcolor="black"
                                align="left"
                            >
                                <Localize
                                    translate_text={data.text_with_link.text}
                                    components={data.text_with_link.components}
                                />
                            </Typography.Paragraph>
                            {data?.sub_text ? (
                                <Typography.Paragraph
                                    size="xlarge"
                                    mb="10x"
                                    textcolor="black"
                                    align="left"
                                >
                                    <Localize translate_text={data.sub_text} />
                                </Typography.Paragraph>
                            ) : null}
                        </div>
                    )
                })}
            </Flex.Box>
        </Flex.Box>
    )
}

export default EmployerAwards
