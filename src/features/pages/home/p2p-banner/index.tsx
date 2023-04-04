import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import P2PTextBox from './text-box'
import QRCode from './qr-code'
import Container from 'features/components/atoms/container'
import Box from 'features/components/atoms/box'
import Flex from 'features/components/atoms/flex-box'

const P2PBanner = () => {
    return (
        <Container.Fixed as="section" bgcolor="tertiary">
            <Flex.Box
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
                <Flex.Box
                    align="center"
                    gap="12x"
                    padding_inline="8x"
                    padding_block="40x"
                    md={{ mr: '10x', padding: '0x' }}
                    lg={{ mr: '40x' }}
                >
                    <P2PTextBox />
                    <QRCode />
                </Flex.Box>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default P2PBanner
