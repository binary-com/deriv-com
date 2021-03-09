import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { Container, Flex, Show, SectionContainer } from 'components/containers'
import { Header, QueryImage, BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { derivgo_google_play_url } from 'common/utility'
import device from 'themes/device.js'

const Wrapper = styled(Container)`
    display: flex;
    justify-content: flex-start;
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

    @media ${device.mobileL} {
        display: flex;
        margin-top: 26px;

        ${Header} {
            line-height: 1.35;
        }
    }
`

const LottieWrapper = styled.div`
    width: 597px;
    max-width: 384px;
    position: absolute;
    top: 24.8rem;
    right: 38rem;

    @media ${device.tabletL} {
        top: 20rem;
        right: unset;
        width: 288px;
        height: 487px;
    }

    @media ${device.laptopM} {
        max-width: 284px;
    }

    @media ${device.mobileL} {
        height: 487px;
        width: 288px;
        top: 400px;
        margin-left: 46px;
        right: unset;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    margin-top: 8rem;

    @media ${device.mobileL} {
        position: unset;
        top: unset;
        justify-content: center;
        margin-top: 3.8rem;
    }
`

const ImageWrapper = styled.div`
    width: 213px;
    height: 28px;
    margin: 50px 273px 71px 0;
    object-fit: contain;

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
    }

    @media ${device.laptopM} {
        margin: 0 35px 16px 0;
    }

    @media ${device.mobileL} {
        display: flex;
        justify-content: center;
        margin: 32px 84px 0 60px;
    }
`

const IosComingSoon = styled(LinkButton)`
    color: var(--color-white);
    font-size: 1.2rem;
    font-weight: normal;
    width: auto;

    @media ${device.mobileL} {
        font-size: 1.8rem;
        max-width: 100%;
        white-space: nowrap;
        margin-left: 0;
    }

    @media (max-width: 360px) {
        white-space: nowrap;
    }
`
const GooglePlay = styled(LinkButton)`
    background: transparent;
    border: 0;
    width: 141px;
    padding: 0;

    &:hover {
        background: transparent;
        border-color: var(--color-grey);
    }
`

const StyledContent = styled(Header)`
    font-size: 6.2rem;
    font-weight: bold;
    margin: 0 35px 16px 0;

    @media ${device.tabletL} {
        text-align: center;
    }

    @media ${device.laptopM} {
        margin: 0 35px 16px 0;
    }

    @media ${device.mobileL} {
        font-size: 4.6rem;
        text-align: center;
        justify-content: center;
    }
`

const NormalContent = styled(Header)`
    font-size: 2.8rem;
    font-weight: normal;

    @media ${device.mobileL} {
        justify-content: center;
        font-size: 18px;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 562px;

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
        bg_mobile: file(relativePath: { eq: "bg_copy.png" }) {
            ...fadeIn
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
    background-size: cover;
    height: 74rem;
    width: 100vw;
    max-width: 100%;
`
const MobileImage = styled(BackgroundImage)`
    background-color: var(--color-white);
    background-size: contain;
    padding: 0;
    height: 632px;

    @media ${device.mobileL} {
        width: 425px;
    }
    @media ${device.mobileM} {
        width: 375px;
    }
`

const Section = styled.div`
    background: var(--color-white);

    @media ${device.mobileL} {
        width: 425px;
        height: 280px;
    }
    @media ${device.mobileM} {
        width: 375px;
        height: 280px;
    }
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
        <div>
            <Show.Desktop>
                <SectionContainer backgroundColor="var(--color-white)" padding="0" height="50rem">
                    <StyledBackgroundImage data={data.image} alt={'derivgo image'}>
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
                                    <GooglePlay
                                        secondary="true"
                                        to={derivgo_google_play_url}
                                        external="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {google_play && (
                                            <QueryImage
                                                data={data.Dgoogle_play_Logo}
                                                alt={'Get it on Google Play'}
                                                height={'40px'}
                                                width={'138px'}
                                            />
                                        )}
                                    </GooglePlay>
                                    {ios_coming_soon && (
                                        <IosComingSoon>
                                            {localize('( iOS coming soon )')}
                                        </IosComingSoon>
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
            </Show.Desktop>
            <Show.Mobile>
                <MobileImage data={data.bg_mobile} alt={'mobile background'}>
                    <Wrapper>
                        <InformationWrapper direction="column">
                            <ImageWrapper>
                                {Logo && (
                                    <QueryImage
                                        data={data.dlogo}
                                        alt={'logo'}
                                        height={'25px'}
                                        width={'190px'}
                                    />
                                )}
                            </ImageWrapper>
                            <HeroContent>
                                <StyledContent>{content}</StyledContent>
                                <NormalContent>{description}</NormalContent>
                            </HeroContent>
                            <LinkWrapper>
                                <GooglePlay
                                    secondary="true"
                                    to={derivgo_google_play_url}
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {google_play && (
                                        <QueryImage
                                            data={data.Dgoogle_play_Logo}
                                            alt={'Get it on Google Play'}
                                            height={'40px'}
                                            width={'138px'}
                                        />
                                    )}
                                </GooglePlay>
                            </LinkWrapper>
                            {ios_coming_soon && (
                                <IosComingSoon>{localize('( iOS coming soon )')}</IosComingSoon>
                            )}
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
                </MobileImage>
                <Section />
            </Show.Mobile>
        </div>
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
