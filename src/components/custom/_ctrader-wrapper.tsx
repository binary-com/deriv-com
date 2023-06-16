import React from 'react'
import { nav_style, content_style } from './_ctrader-wrapper.module.scss'
import Logo from 'images/svg/ctrader/logo.svg'
import Watermark from 'images/svg/ctrader/watermark.svg'
import Flex from 'features/components/atoms/flex-box'

const CtraderWrapper = ({ children }: { children: React.ReactNode }) => (
    <>
        <Flex.Box className={nav_style} justify="center" align="center" gap="5x">
            <img src={Logo} alt="ctrader" width="43" height="43" />
            <img src={Watermark} alt="deriv-ctrader" width="160" height="22" />
        </Flex.Box>
        <div className={content_style}>{children}</div>
    </>
)

export default CtraderWrapper
