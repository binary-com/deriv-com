import React from 'react'
import { p2p_qr_container } from '../styles.module.scss'
import { Localize } from 'components/localization'
import Box from 'features/components/atoms/box'
import Typography from 'features/components/atoms/typography'
import P2PQrCodeImage from 'images/common/home/rebranding/p2p_banner_qr_code.png'
import Image from 'features/components/atoms/image'

const QRCode = () => {
    return (
        <Box className={p2p_qr_container} padding="12x" bgcolor="white">
            <Image src={P2PQrCodeImage} width={160} height={160} />
            <Typography.Paragraph size="small" mt="4x" align="center">
                <Localize translate_text="_t_Scan to download deriv P2P_t_" />
            </Typography.Paragraph>
        </Box>
    )
}

export default QRCode
