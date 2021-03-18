import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography'
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
    margin: 0 auto;
    justify-content: flex-start;
`

const GoFooter = () => {
    return (
        <BannerWrapper>
            <MainWrapper>
                <Header type="sub-paragraph" color="white" weight="normal">
                    {localize('© 2021 Deriv | All rights reserved')}
                </Header>
            </MainWrapper>
        </BannerWrapper>
    )
}

export default GoFooter
