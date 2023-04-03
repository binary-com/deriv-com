import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { p2p_box_container, p2p_qr_container } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Box from 'features/components/atoms/box'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

const P2PBanner = () => {
    return (
        <Container.Fixed as="section" bgcolor="tertiary">
            <FlexBox
                container="fixed"
                direction="col-reverse"
                md={{ direction: 'row', justify: 'between' }}
            >
                <Box mt="9x" md={{ mt: '0x' }}>
                    <StaticImage
                        src="../../../../images/common/home/p2p_home_banner.png"
                        alt="p2p banner"
                        height={400}
                        objectFit="cover"
                        placeholder="none"
                        formats={['avif', 'webp', 'auto']}
                    />
                </Box>
                <FlexBox
                    align="center"
                    gap="12x"
                    padding_inline="8x"
                    padding_block="40x"
                    md={{ mr: '10x', padding: '0x' }}
                    lg={{ mr: '40x' }}
                >
                    <FlexBox className={p2p_box_container} gap="8x" direction="col">
                        <StaticImage
                            src="../../../../images/common/home/deriv_p2p.png"
                            alt="deriv p2p"
                            width={147}
                            height={64}
                            layout="fixed"
                            placeholder="none"
                            formats={['avif', 'webp', 'auto']}
                        />
                        <Typography.Heading as="h3" size="small" mt="15x" md={{ mt: '0x' }}>
                            <Localize translate_text="_t_Hassle-free deposits and withdrawals_t_" />
                        </Typography.Heading>
                        <Typography.Paragraph size="large">
                            <Localize translate_text="_t_Connect with fellow traders and transfer money in minutes._t_" />
                        </Typography.Paragraph>
                        <Link url={{ type: 'internal', to: '/' }} size="large" textcolor="brand">
                            <Localize translate_text="_t_Learn more >_t_" />
                        </Link>
                    </FlexBox>
                    <Box
                        className={dclsx('typography-align-center', p2p_qr_container)}
                        padding="12x"
                        bgcolor="white"
                        lg={{ mr: '22x' }}
                    >
                        <StaticImage
                            src="../../../../images/common/home/p2p_qr_code.png"
                            alt="p2p qr code"
                            width={160}
                            height={160}
                            layout="fixed"
                            placeholder="none"
                            formats={['avif', 'webp', 'auto']}
                        />
                        <Typography.Paragraph size="small" mt="4x">
                            <Localize translate_text="_t_Scan to download deriv P2P_t_" />
                        </Typography.Paragraph>
                    </Box>
                </FlexBox>
            </FlexBox>
        </Container.Fixed>
    )
}

export default P2PBanner
