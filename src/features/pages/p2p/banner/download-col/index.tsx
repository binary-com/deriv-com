import React from 'react'
import { os_apps } from '../data'
import DP2QRbox from './qr-box'
import { download_col } from './styles.module.scss'
import OsAppButton from 'features/components/molecules/os-app-button'
import Flex from 'features/components/atoms/flex-box'

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
                <DP2QRbox />
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
