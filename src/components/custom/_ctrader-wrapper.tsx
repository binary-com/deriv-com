import React from 'react'
import styled from 'styled-components'
import Logo from 'images/svg/ctrader/logo.svg'
import Watermark from 'images/svg/ctrader/watermark.svg'
import device from 'themes/device'

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin: auto;
    gap: 10px;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 70vh;
    max-width: 600px;

    @media ${device.tabletS} {
        padding: 28px;
    }
`

const CtraderWrapper = ({ children }: { children: React.ReactNode }) => (
    <>
        <Nav>
            <img src={Logo} alt="ctrader" width="43" height="43" />
            <img src={Watermark} alt="deriv-ctrader" width="160" height="22" />
        </Nav>
        <Content>{children}</Content>
    </>
)

export default CtraderWrapper
