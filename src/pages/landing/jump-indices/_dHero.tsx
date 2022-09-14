import React, { createRef, useEffect } from 'react'
import lottie from 'lottie-web'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device'
import GridSVG from 'images/svg/jump-indices/jump-indices-grid.svg'
import JumpIndicesAnimation from 'lotties/JumpIndicesChart.json'

const MainWrapper = styled(Flex)`
    background: linear-gradient(120.16deg, var(--color-black) 34.11%, var(--color-blue-8) 115.35%);
    flex-direction: column;
    overflow: hidden;
    position: relative;

    @media ${device.tabletL} {
        background: linear-gradient(179deg, var(--color-black) 34.11%, var(--color-blue-8) 115.35%);
        margin-top: -8px;
    }
`
const ParentWrapperBackground = styled.img`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    @media ${device.tabletL} {
        height: 50%;
    }
    @media ${device.mobileM} {
        height: 41%;
    }
`
const ParentWrapper = styled(Container)`
    position: relative;
    height: 100%;
    z-index: 2;
    padding: 8rem 0;
    justify-content: flex-start;

    @media ${device.tabletL} {
        height: unset;
        max-width: 58.8rem;
        padding: 16px 0 40px;
        flex-direction: column-reverse;
    }
`
const LeftWrapper = styled(Flex)`
    width: 50%;
    max-width: 588px;
    flex-direction: column;
    z-index: 1;

    @media (max-width: 1365px) {
        width: 65%;
        max-width: 100%;
    }
    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
        margin-top: 16px;
    }
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
        margin-bottom: 24px;
    }
`
const BtnDiv = styled(Flex)`
    height: unset;
    justify-content: start;
`

const RigthWrapper = styled(Flex)`
    width: 60%;
    position: absolute;
    right: 0;
    z-index: 0;

    @media ${device.tabletL} {
        width: 100%;
        position: unset;
        right: unset;
        z-index: unset;
        max-width: 58.8rem;
    }
`
const StyledLinkButton = styled(LinkButton)`
    border: unset;
    font-size: 20px;
    line-height: 30px;
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
    }
`
const StyledAnimationWrapper = styled(Flex)`
    align-items: center;
    margin-right: -120px;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 25%);

    @media (max-width: 1365px) {
        mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 65%);
    }
    @media ${device.tabletL} {
        mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        margin-right: -30px;
    }
`

const DHero = () => {
    const animation_container = createRef<HTMLElement>()
    // the is mounted check is used for making sure the localized link text
    // properly renders the correct domain url
    const [is_mounted] = usePageLoaded()

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animation_container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: JumpIndicesAnimation,
        })
        return () => anim.destroy()
    }, [])

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
                        {is_mounted && (
                            <StyledLinkButton
                                external
                                type="deriv_app"
                                to="/mt5"
                                target="_blank"
                                rel="noopener noreferrer"
                                secondary
                                hero
                            >
                                {localize('Start trading')}
                            </StyledLinkButton>
                        )}
                    </BtnDiv>
                </LeftWrapper>
                <RigthWrapper>
                    <StyledAnimationWrapper ref={animation_container} />
                </RigthWrapper>
            </ParentWrapper>

            <ParentWrapperBackground src={GridSVG} />
        </MainWrapper>
    )
}

export default DHero
