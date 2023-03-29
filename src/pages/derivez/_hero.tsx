import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import HeroImageMobile from 'images/common/deriv-ez/background-image-mobile.png'
import { Header, QueryImage } from 'components/elements'
import HeroImage from 'images/common/deriv-ez/background-derivez.png'
import DerivEZLogo from 'images/svg/deriv-ez/derivez-logo.svg'
import { TString } from 'types/generics'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        deriv_ez: file(relativePath: { eq: "deriv-ez/hero-phone.png" }) {
            ...bannerImage
        }
    }
`
const Wrapper = styled.div`
    display: flex;
    background-image: url(${HeroImage});
    background-position: right;
    background-repeat: no-repeat;
    background-color: var(--color-black);
    justify-content: center;
    align-items: center;
    padding: 3rem 24rem;

    @media ${device.tablet} {
        background-image: url(${HeroImageMobile});
        background-position: top;
        background-size: 100% 60%;
        flex-direction: column-reverse;
        padding: 1.2rem;
        align-items: center;
    }
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    flex: 2;

    @media ${device.tablet} {
        margin-top: 68px;
    }
`
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const DLogo = styled.img`
    margin-right: 1.6rem;
    margin-bottom: 6px;
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    align-items: center;
    margin-top: 0;
    font-size: 2.4rem;

    @media ${device.laptopM} {
        font-size: 24px;
    }
    @media ${device.tablet} {
        font-size: 20px;
        font-weight: normal;
    }
`
const StyledHeaderTitle = styled.div`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    max-width: 80%;

    @media ${device.laptopM} {
        font-size: 32px;
        line-height: 48px;
    }
`
const ImageWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 70%;
    }
`
const hero_logo_title: TString = '_t_Deriv EZ_t_'
const hero_header: TString = '_t_An intuitive, easy-to-get-started CFDs trading platform_t_'
const hero_background_alt: TString = '_t_Deriv EZ online trading platform_t_'

const DerivEZHero = () => {
    const data = useStaticQuery(query)
    return (
        <Wrapper>
            <ContentWrapper>
                <LogoWrapper>
                    <DLogo src={DerivEZLogo} alt="logo" width="32" height="32" />
                    <StyledHeader as="h4" type="sub-section-title" weight="500">
                        <Localize translate_text={hero_logo_title} />
                    </StyledHeader>
                </LogoWrapper>
                <StyledHeaderTitle>
                    <Localize translate_text={hero_header} />
                </StyledHeaderTitle>
            </ContentWrapper>
            <ImageWrapper>
                <QueryImage data={data['deriv_ez']} alt={localize(hero_background_alt)} />
            </ImageWrapper>
        </Wrapper>
    )
}
export default DerivEZHero
