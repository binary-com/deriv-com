import React from 'react'
import QRCode from './qr-code'
import P2PTextBox from './text-box'
import Flex from 'features/components/atoms/flex-box'

const P2PBannerDescription = () => {
    return (
        <Flex.Box
            justify="between"
            align="center"
            grow="1"
            padding_block="40x"
            md={{ padding_block: '0x' }}
        >
            <P2PTextBox />
            <QRCode />
        </Flex.Box>
    )
}

export default P2PBannerDescription
