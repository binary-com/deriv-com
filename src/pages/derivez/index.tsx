import React from 'react'
import styled from 'styled-components'
import Shape from '../../components/custom/_hero-shape'
import CommonHeaderSection from 'components/elements/common-header-section'
import DerivEZLogo from 'images/svg/deriv-ez/derivez-logo.svg'
import DerivGoMobile from 'images/common/deriv-ez/hero-image.png'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'

//TODO: (deriv-rebranding) to make the content section reusable .

const ImageStyle = styled.img`
    object-fit: contain;
    width: 100%;
    z-index: 1;
    src: ${({ src }) => src};
`

const ImageWrapper = styled.div`
    display: flex;
    padding: 64px 0;
    flex: 1;
    @media ${device.tablet} {
        padding: 64px 54px;
    }
`

const BackgroundStyle = styled.div`
    background-color: var(--color-white);
    flex: 1;
    height: 90vh;
    display: flex;
    justify-content: flex-end;

    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
`
const ContentWrapperStyle = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`
const SomethingStyle = styled.div`
    width: 60%;

    @media ${device.tablet} {
        width: 100%;
    }
`

const Content = styled.div`
    max-width: 632px;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding-left: 120px;
    @media ${device.tablet} {
        padding: 0 16px 64px;
    }
`

const Hero = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <BackgroundStyle>
            <ContentWrapperStyle>
                <Content>
                    <img width="237px" height="64px" src={DerivEZLogo} />
                    <CommonHeaderSection
                        title="An intuitive, easy-to-get-started CFDs trading platform"
                        title_font_size={`${is_mobile ? 32 : 64}px`}
                        color="var(--color-black-9)"
                    />
                </Content>
            </ContentWrapperStyle>
            <SomethingStyle>
                <Shape angle={is_mobile ? 101 : 193}>
                    <ImageWrapper>
                        <ImageStyle src={DerivGoMobile} />
                    </ImageWrapper>
                </Shape>
            </SomethingStyle>
        </BackgroundStyle>
    )
}

export default Hero
