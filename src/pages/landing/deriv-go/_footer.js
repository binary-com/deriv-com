import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements/typography'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const BannerWrapper = styled(Flex)`
    overflow: hidden;
    background-color: var(--color-black);
    padding: 17px 16px;
    @media ${device.tabletL} {
        padding: 16px;
    }
`
const MainWrapper = styled(Flex)`
    /* max-width: 996px; */
    margin: 0 auto;
    flex-direction: row;
    justify-content: flex-start;
`
const FooterTxt = styled(Text)`
    font-size: 14px;
    color: var(--color-white);
    line-height: 1.5;
`

const GoFooter = () => {
    return (
        <BannerWrapper>
            <MainWrapper>
                <FooterTxt>{localize('© 2021 Deriv | All rights reserved')}</FooterTxt>
            </MainWrapper>
        </BannerWrapper>
    )
}

export default GoFooter
