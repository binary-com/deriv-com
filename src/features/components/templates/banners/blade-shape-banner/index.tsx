import React from 'react'
import * as styles from './blade-shape-banner.module.scss'
import { BannerType } from './types'
import Container from 'features/components/atoms/container'
import FlexBox from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'

const BladeShapeBanner = ({ data }: { data: BannerType }) => {
    const { is_mobile } = useBreakpoints()
    return (
        <Container.Fixed
            className={styles.banner_section}
            as={'section'}
            bgcolor={'black'}
            padding_block={'16x'}
            padding_inline={'8x'}
            md={{ padding_inline: '0x', padding_block: '32x' }}
        >
            <FlexBox.Box
                container={'fluid'}
                direction={'col'}
                align={'center'}
                justify={'between'}
                md={{ direction: 'row' }}
            >
                <FlexBox.Box direction={'col'} align={'center'} md={{ basis: '3-6' }}>
                    <FlexBox.Box
                        direction={'col'}
                        align={'center'}
                        md={{ direction: 'row', align: 'start' }}
                    >
                        <FlexBox.Item mt={'7x'} pb={'8x'}>
                            <Image
                                src={data.information.icon}
                                alt="_t_banner information_t_"
                                width={is_mobile ? 48 : 64}
                                height={is_mobile ? 48 : 64}
                            />
                        </FlexBox.Item>
                        <FlexBox.Box
                            className={styles.heading_box}
                            direction={'col'}
                            align={'start'}
                            md={{ ml: '8x' }}
                        >
                            <Typography.Heading
                                as={'h2'}
                                size={'xlarge'}
                                textcolor={'inverted'}
                                align={'center'}
                                md={{ align: 'left' }}
                            >
                                <Localize translate_text={data.information.heading} />
                            </Typography.Heading>
                            {data?.extra_info && (
                                <FlexBox.Box
                                    direction={'row'}
                                    align={'start'}
                                    mt={'8x'}
                                    md={{ align: 'center' }}
                                >
                                    <Image src={data.extra_info.icon} alt="_t_extra info icon_t_" />
                                    <Typography.Paragraph
                                        size={'xlarge'}
                                        textcolor={'inverted'}
                                        ml={'8x'}
                                    >
                                        <Localize
                                            translate_text={data.extra_info.where}
                                            components={[<strong key={0} />]}
                                        />
                                    </Typography.Paragraph>
                                </FlexBox.Box>
                            )}
                        </FlexBox.Box>
                    </FlexBox.Box>
                </FlexBox.Box>
                <FlexBox.Box direction={'col'} align={'center'}>
                    {data?.traders_hub_info && (
                        <Link url={data?.traders_hub_info.url} no_hover>
                            <FlexBox.Box
                                className={styles.qr_box}
                                align={'start'}
                                padding={'8x'}
                                mb={'12x'}
                                mt={'16x'}
                                md={{ mt: '0x', padding: '12x' }}
                            >
                                <Image
                                    src={data.traders_hub_info.icon}
                                    alt={'_t_qr code_t_'}
                                    width={64}
                                    height={64}
                                />
                                <FlexBox.Box
                                    direction={'col'}
                                    align={'start'}
                                    ml={'8x'}
                                    md={{ ml: '12x' }}
                                >
                                    <Typography.Paragraph textcolor={'white'}>
                                        <Localize
                                            translate_text={data.traders_hub_info.heading_one}
                                        />
                                    </Typography.Paragraph>
                                    <Typography.Heading
                                        size={'xxs'}
                                        textcolor={'white'}
                                        align={'left'}
                                    >
                                        <Localize
                                            translate_text={data.traders_hub_info.heading_two}
                                        />
                                    </Typography.Heading>
                                </FlexBox.Box>
                            </FlexBox.Box>
                        </Link>
                    )}
                    <FlexBox.Box
                        className={styles.qr_box}
                        direction={'col'}
                        align={'start'}
                        padding={'8x'}
                        md={{ padding: '12x' }}
                    >
                        <FlexBox.Box direction={'row'} align={'center'} md={{ mb: '3x' }}>
                            <Image
                                src={data.scan_box.icon}
                                alt={'_t_qr code_t_'}
                                width={64}
                                height={64}
                            />
                            <FlexBox.Box direction={'col'} ml={'8x'} md={{ ml: '12x' }}>
                                <Typography.Paragraph textcolor={'white'}>
                                    <Localize translate_text={data.scan_box.heading_one} />
                                </Typography.Paragraph>
                                <Typography.Heading size={'xxs'} textcolor={'white'}>
                                    <Localize translate_text={data.scan_box.heading_two} />
                                </Typography.Heading>
                            </FlexBox.Box>
                        </FlexBox.Box>
                        <FlexBox.Box wrap={'wrap'}>
                            {data.os_apps.map((item) => (
                                <FlexBox.Box key={item.id} pt={'12x'} basis={'6-12'}>
                                    <Link pl={'3x'} url={item.data.url} no_hover>
                                        <FlexBox.Box align={'center'}>
                                            <Image
                                                src={item.data.icon}
                                                alt={item.data.text}
                                                width={is_mobile ? 24 : 32}
                                                height={is_mobile ? 24 : 32}
                                            />
                                            <Typography.Paragraph
                                                textcolor={'white'}
                                                weight={'bold'}
                                                ml={'4x'}
                                            >
                                                {item.data.text}
                                            </Typography.Paragraph>
                                        </FlexBox.Box>
                                    </Link>
                                </FlexBox.Box>
                            ))}
                        </FlexBox.Box>
                    </FlexBox.Box>
                </FlexBox.Box>
            </FlexBox.Box>
        </Container.Fixed>
    )
}

export default BladeShapeBanner
