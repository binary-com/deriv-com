import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import JumpSVG from 'images/svg/jump-indices/jump-indices-imagery.svg'

const MainWrapper = styled(Flex)`
    background: var(--color-white);
    margin: 0 auto;
    padding: 0 120px 32px;
    @media ${device.tabletL} {
        padding: 0 16px 40px;
    }
`

const ParentWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const LeftWrapper = styled(Flex)`
    width: auto;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    margin-right: 126px;
    margin-left: 102px;

    @media ${device.laptopM} {
        margin: 0 auto 24px;
    }

    @media ${device.tabletL} {
        max-width: 58.8rem;
    }
`
const RightWrapper = styled(Flex)`
    width: 50%;
    max-width: 486px;
    align-items: center;
    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledHeaderSmall = styled(Header)`
    line-height: 36px;
    @media ${device.tabletL} {
        text-align: center;
        font-size: 18px;
        line-height: 26px;
        max-width: 328px;
    }
`
const ImgWrapper = styled(Flex)`
    flex-direction: flex-end;
`
const ImgDiv = styled.img`
    height: 100%;
    @media ${device.tabletL} {
        height: unset;
        max-width: 100%;
    }
`

const JumpSection = () => {
    return (
        <MainWrapper>
            <ParentWrapper>
                <LeftWrapper>
                    <StyledHeader type="section-title">{localize('Jumps')}</StyledHeader>
                    <StyledHeaderSmall type="sub-section-title" weight="normal">
                        {localize(
                            'Experience equal probability of an upward or downward price jump every 20 minutes on average.',
                        )}
                    </StyledHeaderSmall>
                </LeftWrapper>
                <RightWrapper>
                    <ImgWrapper>
                        <ImgDiv src={JumpSVG} />
                    </ImgWrapper>
                </RightWrapper>
            </ParentWrapper>
        </MainWrapper>
    )
}

export default JumpSection
