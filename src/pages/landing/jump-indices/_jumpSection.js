import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import JumpSVG from 'images/svg/jump-indices/jump-indices-imagery.svg'

const MainWrapper = styled(Flex)`
    background: white;
    padding-bottom: 32px;
    max-width: 100%;
    @media ${device.tabletL} {
        padding-bottom: 40px;
    }
`

const ParentWrapper = styled(Flex)`
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const LeftWrapper = styled(Flex)`
    width: 50%;
    max-width: 48.6rem;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    margin-right: 126px;

    @media ${device.tabletL} {
        max-width: 100%;
        margin-right: 0;
    }
`
const RightWrapper = styled(Flex)`
    width: 50%;
    max-width: 486px;
    height: 100%;
    align-items: center;
`

const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    background: blue;
    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledHeaderSmall = styled(Header)`
    background: yellow;
    @media ${device.tabletL} {
        text-align: center;
    }
`
const ImgWrapper = styled.img`
    height: 100%;
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
                    <ImgWrapper src={JumpSVG} />
                </RightWrapper>
            </ParentWrapper>
        </MainWrapper>
    )
}

export default JumpSection
