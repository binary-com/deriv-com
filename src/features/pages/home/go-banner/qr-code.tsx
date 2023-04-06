import React from 'react'
import { qr_container } from './styles.module.scss'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import DerivGOQRCode from 'images/common/home/deriv-go-qr.png'

const QRCode = () => {
    return (
        <Flex.Box
            className={qr_container}
            direction="col"
            justify="center"
            align="center"
            align_self="center"
            gap="4x"
        >
            <Image src={DerivGOQRCode} width="169px" height="169px" />
            <Typography.Paragraph size="small" textcolor="inverted" align="center">
                <Localize translate_text="_t_Scan to download Deriv GO Ultimate Android APK (Android 5.0 and above)_t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default QRCode
