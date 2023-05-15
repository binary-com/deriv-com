import React from 'react'
import { os_apps } from './data'
import { download_col } from './styles.module.scss'
import OsAppButton from 'features/components/molecules/os-app-button'
import Flex from 'features/components/atoms/flex-box'
import QRScanbox from 'features/components/molecules/qr-scan-box'
import p2pQrImage from 'images/svg/p2p/p2p_qr.svg'

const DP2BannerDownload = () => {
    return (
        <Flex.Box
            direction="col"
            basis="full"
            align="center"
            padding_block="15x"
            md={{ basis: '5-12', align: 'end' }}
        >
            <div className={download_col}>
                <QRScanbox
                    img_src={p2pQrImage}
                    heading_one="_t_Scan to download Deriv P2P_t_"
                    heading_two="_t_Android, iOS, and Huawei_t_"
                />
                <Flex.Box
                    wrap="wrap"
                    pl="5x"
                    pt="20x"
                    gap="20x"
                    justify="between"
                    md={{ pl: '9x' }}
                >
                    {os_apps.map((app) => (
                        <OsAppButton key={app.id} item={app.data} basis="5-12" />
                    ))}
                </Flex.Box>
            </div>
        </Flex.Box>
    )
}

export default DP2BannerDownload
