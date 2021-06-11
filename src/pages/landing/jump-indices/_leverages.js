import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import TradingIcon from 'images/svg/jump-indices/jump-indices-24-7-trading.svg'
import LeverageIcon from 'images/svg/jump-indices/jump-indices-high-leverage.svg'

const MainWrapper = styled(Flex)`
    background: white;
    margin: 32px auto 0;
    padding: 0 120px 32px;
    flex-direction: column;

    @media ${device.tabletL} {
        margin: 0 auto;
        padding: 0 16px;
    }
`

const ParentWrapper = styled(Flex)`
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    padding-bottom: 80px;
    @media ${device.tabletL} {
        flex-direction: column;
        padding-bottom: 40px;
    }
`
const EachWrapper = styled(Flex)`
    width: 50%;
    align-items: center;
    flex-direction: column;

    :first-child {
        margin-right: 24px;
    }

    @media ${device.tabletL} {
        max-width: 58.8rem;
        width: 100%;
        padding: 0 16px;

        :first-child {
            margin-right: 0;
            margin-bottom: 40px;
        }
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    text-align: center;
`
const StyledHeaderSmall = styled(Header)`
    text-align: center;
    line-height: 36px;

    @media ${device.tabletL} {
        font-size: 18px;
        line-height: 26px;
    }
`
const ImgWrapper = styled.img`
    height: 100%;
    padding-bottom: 24px;
    @media ${device.tabletL} {
        padding-bottom: 16px;
    }
`
const BtnWrapper = styled(Flex)`
    padding-bottom: 80px;
    @media ${device.tabletL} {
        padding-bottom: 40px;
    }
`
const StyledLinkButton = styled(LinkButton)`
    border: unset;
    padding: 17px 24px;
    font-size: 20px;
    line-height: 30px;
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
        padding: 10px 16px;
    }
`

const Leverages = () => {
    return (
        <MainWrapper>
            <ParentWrapper>
                <EachWrapper>
                    <ImgWrapper src={TradingIcon} />
                    <StyledHeader type="section-title">{localize('Available 24/7')}</StyledHeader>
                    <StyledHeaderSmall type="sub-section-title" weight="normal">
                        {localize(
                            'As jump indices are synthetics, you can trade them 24/7, 365 days of the year.',
                        )}
                    </StyledHeaderSmall>
                </EachWrapper>
                <EachWrapper>
                    <ImgWrapper src={LeverageIcon} />
                    <StyledHeader type="section-title">{localize('High leverage')}</StyledHeader>
                    <StyledHeaderSmall type="sub-section-title" weight="normal">
                        {localize(
                            'Trade with high leverage ratios to have even more opportunities to increase your position size.',
                        )}
                    </StyledHeaderSmall>
                </EachWrapper>
            </ParentWrapper>
            <BtnWrapper>
                <StyledLinkButton
                    external="true"
                    type="deriv_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    secondary="true"
                >
                    {localize('Start trading')}
                </StyledLinkButton>
            </BtnWrapper>
        </MainWrapper>
    )
}

export default Leverages
