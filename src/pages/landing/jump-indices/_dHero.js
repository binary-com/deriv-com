import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import GridSVG from 'images/svg/jump-indices/jump-indices-grid.svg'

const MainWrapper = styled(Flex)`
    background: linear-gradient(120.16deg, #0e0e0e 34.11%, #003b81 115.35%);
    flex-direction: column;
    overflow: hidden;
    position: relative;
`
const ParentWrapperBackground = styled.img`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
`
const ParentWrapper = styled(Container)`
    position: relative;
    height: 100%;
    z-index: 2;
    padding: 8rem 0;

    @media ${device.tabletL} {
        height: unset;
        max-width: 58.8rem;
        flex-direction: column;
        margin-top: 41px;
    }
`
const LeftWrapper = styled(Flex)`
    width: 50%;
    max-width: 588px;
    flex-direction: column;
`

const StyledHeader = styled(Header)`
    margin-bottom: 16px;
    line-height: 100px;
    @media ${device.tabletL} {
        font-size: 32px;
        line-height: 40px;
    }
`
const StyledHeaderSmall = styled(Header)`
    line-height: 36px;
    margin-bottom: 32px;
    @media ${device.tabletL} {
        font-size: 18px;
        line-height: 26px;
    }
`
const BtnDiv = styled(Flex)`
    height: unset;
    justify-content: start;
`

const RigthWrapper = styled(Flex)`
    width: 50%;
`
const StyledLinkButton = styled(LinkButton)`
    border: unset;
    line-height: 20px;
    padding: 17px 24px;
`
const DHero = () => {
    return (
        <MainWrapper>
            <ParentWrapper>
                <LeftWrapper>
                    <StyledHeader type="main-landing-title" color="white">
                        {localize('Trade jump indices, the new synthetics with a twist')}
                    </StyledHeader>
                    <StyledHeaderSmall type="sub-section-title" color="white" weight="normal">
                        {localize(
                            'Brand new synthetic indices are now available on DTrader and Deriv MT5 (DMT5)',
                        )}
                    </StyledHeaderSmall>
                    <BtnDiv>
                        <StyledLinkButton
                            external="true"
                            type="deriv_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            secondary="true"
                        >
                            {localize('Start trading')}
                        </StyledLinkButton>
                    </BtnDiv>
                </LeftWrapper>
                <RigthWrapper></RigthWrapper>
            </ParentWrapper>

            <ParentWrapperBackground src={GridSVG} />
        </MainWrapper>
    )
}

export default DHero
