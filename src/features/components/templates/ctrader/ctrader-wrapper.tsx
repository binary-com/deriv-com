import React from 'react'
import { nav_style, content_style } from './ctrader-wrapper.module.scss'
import Logo from 'images/svg/ctrader/logo.svg'
import Watermark from 'images/svg/ctrader/watermark.svg'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'

const CtraderWrapper = ({ children }: { children: React.ReactNode }) => (
    <Flex.Box justify="center" align="center" direction="col">
        <Flex.Box className={nav_style} justify="center" align="center" gap="5x">
            <Image src={Logo} alt="ctrader" width="43" height="43" />
            <Image src={Watermark} alt="deriv-ctrader" width="160" height="22" />
        </Flex.Box>
        <Flex.Box className={content_style}>{children}</Flex.Box>
    </Flex.Box>
)

export default CtraderWrapper
