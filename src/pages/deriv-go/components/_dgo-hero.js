import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const Wrapper = styled(Container)`
    margin-bottom: 4rem;

    @media ${device.laptopM} {
        max-height: 429px;
        padding: 8rem 12rem 8rem 4rem;
    }
    @media ${device.tabletL} {
        min-height: 304px;
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: column-reverse;
        max-height: 640px;
        padding: 0 16px 40px 16px;
    }
`

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 1.5rem;
        line-height: 1.25;
    }

    @media ${device.laptopM} {
        ${Header} {
            font-size: 32px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 24px;
        }
    }
    @media ${device.tablet} {
        ${Header} {
            font-size: 32px;
        }
    }
`

const LottieWrapper = styled.div`
    width: 597px;
    max-width: 384px;
    position: absolute;
    top: 10.8rem;
    right: 38rem;

    @media ${device.laptopM} {
        max-width: 500px;
        top: 8rem;
        right: 8rem;
    }
    @media ${device.laptop} {
        max-width: 450px;
        right: 10rem;
    }
    @media ${device.tabletL} {
        max-width: 390px;
        top: 5rem;
        right: 2rem;
    }
    @media ${device.tabletS} {
        max-width: 380px;
        top: 5rem;
        right: 2rem;
    }
    @media ${device.mobileL} {
        max-width: 328px;
        top: 34px;
        left: 50%;
        right: unset;
        transform: translateX(-50%);
    }
    @media ${device.mobileM} {
        max-width: 280px;
        top: 34px;
        left: 50%;
        right: unset;
        transform: translateX(-50%);
    }
`

const LinkWrapper = styled.div`
    display: flex;
    margin-top: 3.8rem;

    @media (max-width: 1420px) {
        top: 480px;
    }
    @media ${device.laptopM} {
        top: 350px;
    }
    @media ${device.tabletL} {
        top: 236px;
    }
    @media ${device.tablet} {
        position: unset;
        top: unset;
        justify-content: start;
    }
    @media (max-width: 360px) {
        flex-wrap: wrap;
    }
`

const ImageWrapper = styled.div`
    width: 213px;
    height: 28px;
    margin: 0 273px 71px 0;
    object-fit: contain;
`

const IosComingSoon = styled(LinkButton)`
    color: var(--color-white);
    font-size: 1.2rem;
    font-weight: normal;
    width: auto;

    @media ${device.mobileL} {
        max-width: 100%;
        white-space: nowrap;
        margin-left: 0;
    }

    @media (max-width: 360px) {
        white-space: nowrap;
    }
`

const StyledContent = styled(Header)`
    font-size: 5.2rem;
    font-weight: bold;
    margin: 0 35px 16px 0;

    @media (max-width: 1322px) {
        font-size: 4.2rem;
    }
`

const NormalContent = styled(Header)`
    font-size: 2rem;
    font-weight: normal;

    @media (max-width: 1322px) {
        font-size: 1.2rem;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 562px;

    @media (max-width: 1320px) {
        max-width: 450px;
    }
    @media ${device.laptop} {
        max-width: 390px;
    }
    @media ${device.laptopM} {
        max-width: 410px;
    }
    @media ${device.tabletL} {
        width: 46%;
        max-width: 400px;
        top: 60px;
    }
    @media ${device.tablet} {
        width: 100%;
        top: 350px;
    }
    @media ${device.mobileL} {
        top: 280px;
        max-width: 328px;
    }
    @media ${device.mobileM} {
        top: 230px;
    }
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "derivgo_background.png" }) {
            childImageSharp {
                fluid(maxWidth: 1024, srcSetBreakpoints: [1440]) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
        mobile_float: file(relativePath: { eq: "mobile_float.png" }) {
            childImageSharp {
                fluid(maxWidth: 1024, srcSetBreakpoints: [1440]) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
        Dgoogle_play_Logo: file(relativePath: { eq: "derivgo/derivgo_gogleplay.png" }) {
            ...fadeIn
        }
        dlogo: file(relativePath: { eq: "derivgo/derivgo_logo.png" }) {
            ...fadeIn
        }
    }
`

const StyledBackgroundImage = styled(BackgroundImage)`
    background-color: var(--color-white);
    background-size: contain;
    padding: 32px 732px 103px 222px;
`

const DGoHero = ({
    background_alt,
    content,
    description,
    google_play,
    image_name,
    is_mobile,
    ios_coming_soon,
    Logo,
}) => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer background="var(--color-white)" height="448px" width="1440px">
            <StyledBackgroundImage data={data.image} alt={'background image'}>
                <Wrapper>
                    <InformationWrapper height="unset" direction="column">
                        <ImageWrapper>
                            {Logo && (
                                <QueryImage
                                    data={data.dlogo}
                                    alt={'logo'}
                                    height={'27px'}
                                    width={'213px'}
                                />
                            )}
                        </ImageWrapper>
                        <HeroContent>
                            <StyledContent>{content}</StyledContent>
                            <NormalContent>{description}</NormalContent>
                        </HeroContent>
                        <LinkWrapper>
                            {google_play && (
                                <QueryImage
                                    data={data.Dgoogle_play_Logo}
                                    alt={'Get it on Google Play'}
                                    height={'40px'}
                                    width={'138px'}
                                />
                            )}
                            {ios_coming_soon && (
                                <IosComingSoon>{localize('( iOS coming soon )')}</IosComingSoon>
                            )}
                        </LinkWrapper>
                    </InformationWrapper>
                </Wrapper>
                <LottieWrapper>
                    {image_name === 'mobile_float' ? (
                        <QueryImage data={data['mobile_float']} alt={background_alt} />
                    ) : (
                        <QueryImage
                            data={data[is_mobile ? image_name + '_mobile' : image_name]}
                            alt={background_alt}
                        />
                    )}
                </LottieWrapper>
            </StyledBackgroundImage>
        </SectionContainer>
    )
}

DGoHero.propTypes = {
    background_alt: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    google_play: PropTypes.func,
    image_name: PropTypes.string,
    ios_coming_soon: PropTypes.bool,
    is_mobile: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    Logo: PropTypes.func,
}

export default DGoHero
