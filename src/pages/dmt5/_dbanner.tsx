import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'

type DBannerProps = {
    background_pattern?: string
    data?: string
    is_ppc?: boolean
    title?: string
    image_alt?: string
}

const Wrapper = styled(Flex)`
    padding-left: 12rem;
    position: relative;
    height: 40rem;
    justify-content: flex-start;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: var(--color-black);

    @media ${device.desktopS} {
        padding-left: 18%;
    }
    @media ${device.laptopM} {
        height: 384px;
        padding-left: 80px;
    }
    @media ${device.tabletL} {
        height: 277px;
    }
    @media ${device.tablet} {
        height: 226px;
        padding-left: 40px;
    }
    @media ${device.tabletS} {
        height: unset;
        padding: 0 16px 40px 16px;
    }
`

const ImageWrapper = styled(Flex)`
    position: absolute;
    width: 50rem;
    top: -2rem;
    right: 12rem;
    z-index: 1;
    height: 100%;

    div {
        width: 100%;
    }

    @media ${device.laptopM} {
        max-width: 430px;
    }
    @media ${device.tabletL} {
        max-width: 300px;
    }
    @media ${device.tablet} {
        max-width: 260px;
    }
    @media ${device.tabletS} {
        max-width: 250px;
        right: 0;
        height: unset;
        left: 50%;
        transform: translate(-50%, 0);
    }
`

const TextWrapper = styled.div`
    margin: auto 0;

    @media ${device.laptopM} {
        max-width: 37rem;
    }
    @media ${device.tablet} {
        max-width: 256px;
    }
    @media ${device.tabletS} {
        margin: 234px auto 0;
        max-width: 330px;
        text-align: center;
    }
`
const StyledLinkButton = styled(Button)`
    min-width: 20.2rem;
    width: auto;
    border: unset;
    line-height: 1.5;
    display: inline-block;

    @media ${device.tabletS} {
        margin: auto;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
    @media ${device.tabletS} {
        font-size: 40px;
        text-align: center;
    }
`

const DBanner = ({
    background_pattern = '',
    data = '',
    is_ppc = false,
    title = '',
    image_alt = '',
}: DBannerProps) => {
    const handleSignup = useHandleSignup(is_ppc)

    const BackgroundPattern = styled.img`
        position: absolute;
        top: 0;
        right: 0;

        @media ${device.laptopM} {
            width: 60rem;
            height: initial;
        }
        @media ${device.tabletL} {
            width: 54rem;
        }
        @media ${device.tablet} {
            width: 44rem;
        }
        @media ${device.tabletS} {
            width: 400px;
        }
        @media ${device.mobileL} {
            width: unset;
            max-width: unset;
        }
    `
    return (
        <Flex position="relative">
            <ImageWrapper ai="center">
                <QueryImage data={data['deriv_platform']} alt={image_alt} width="100%" />
            </ImageWrapper>
            <Wrapper>
                <TextWrapper>
                    <StyledHeader as="h2" color="white" size="5.6rem" mb="4rem" max_width="52rem">
                        {title}
                    </StyledHeader>
                    <StyledLinkButton
                        onClick={handleSignup}
                        id="dm-dbanner-signup-1"
                        type="submit"
                        secondary
                    >
                        {localize('Create free demo account')}
                    </StyledLinkButton>
                </TextWrapper>
                <BackgroundPattern src={background_pattern} alt="background pattern" />
            </Wrapper>
        </Flex>
    )
}

export default DBanner
