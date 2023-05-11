import React from 'react'
import { qr_box } from './styles.module.scss'
import Image from 'features/components/atoms/image'
import p2pQrImage from 'images/svg/p2p/p2p_qr.svg'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'

const DP2QRbox = () => {
    return (
        <Flex.Box
            align="center"
            gap="8x"
            padding="8x"
            className={qr_box}
            md={{ gap: '12x', padding: '12x' }}
        >
            <Image src={p2pQrImage} alt="p2p qr" width={64} height={64} />
            <div>
                <Typography.Paragraph textcolor="white" size="medium">
                    <Localize translate_text="_t_Scan to download Deriv P2P_t_" />
                </Typography.Paragraph>
                <Typography.Heading as="h5" size="xxs" textcolor="white">
                    <Localize translate_text="_t_Android, iOS, and Huawei_t_" />
                </Typography.Heading>
            </div>
        </Flex.Box>
    )
}

export default DP2QRbox
