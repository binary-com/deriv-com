import React from 'react'
import { os_apps } from '../data'
import OsAppButton from './os-app-button'
import DP2QRbox from './qr-box'
import { download_col } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'

const DP2BannerDownload = () => {
    return (
        <Flex.Box direction="col" basis="5-12" align="end" padding_block="15x">
            <div className={download_col}>
                <DP2QRbox />
                <Flex.Box wrap="wrap" pl="9x" pt="16x" gap="18x" justify="between">
                    {os_apps.map((app) => (
                        <OsAppButton key={app.id} item={app.data} />
                    ))}
                </Flex.Box>
            </div>
        </Flex.Box>
    )
}

export default DP2BannerDownload
