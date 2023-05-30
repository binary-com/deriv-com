import React, { ReactNode } from 'react'
import { download_col } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'

const DP2BannerDownload = ({ children }: { children: ReactNode }) => {
    return (
        <Flex.Box
            direction="col"
            basis="full"
            align="center"
            padding_block="15x"
            md={{ basis: '5-12', align: 'end' }}
        >
            <div className={download_col}>{children}</div>
        </Flex.Box>
    )
}

export default DP2BannerDownload
