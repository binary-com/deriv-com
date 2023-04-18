import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { p2p_qr_container } from '../styles.module.scss'
import { Localize } from 'components/localization'
import Box from 'features/components/atoms/box'
import Typography from 'features/components/atoms/typography'

const QRCode = () => {
    return (
        <Box className={p2p_qr_container} padding="12x" bgcolor="white">
            <StaticImage
                src="../../../../../images/common/home/p2p_qr_code.png"
                alt="p2p qr code"
                width={160}
                height={160}
                layout="fixed"
                placeholder="none"
                formats={['avif', 'webp', 'auto']}
            />
            <Typography.Paragraph size="small" mt="4x" align="center">
                <Localize translate_text="_t_Scan to download deriv P2P_t_" />
            </Typography.Paragraph>
        </Box>
    )
}

export default QRCode
