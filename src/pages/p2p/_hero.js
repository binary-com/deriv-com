import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { Background } from 'components/elements/background-image'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const Wrapper = styled(Flex)`
    justify-content: space-between;
    background-color: transparent;
    max-width: 1600px;
    height: 70rem;
    padding: 8rem 12rem 9rem 12rem;
    margin: 0 auto;

    /* @media (max-width: 1254px) {
        padding: 8rem 12rem 12rem 4rem;
    } */
    @media ${device.laptopM} {
        height: 52.7rem;
        padding: 8rem 12rem 9rem 8rem;
    }
    @media ${device.laptop} {
        height: 56.8rem;
    }
    @media ${device.tabletL} {
        height: 53rem;
    }
    @media ${device.tablet} {
        height: 95.4rem;
        flex-direction: column-reverse;
    }
    @media ${device.tabletS} {
        height: 89.4rem;
    }
    @media ${device.mobileL} {
        height: 85rem;
        padding-left: 3rem;
    }
    @media ${device.mobileM} {
        height: 67.8rem;
        padding: 0 0 0 1rem;
    }
    @media ${device.mobileS} {
        padding: 0 1rem;
    }
`

const BackgroundWrapper = styled(Background)`
    height: 70rem;

    @media ${device.laptopM} {
        height: 52.7rem;
    }
    @media ${device.laptop} {
        height: 56.8rem;
    }
    @media ${device.tabletL} {
        height: 53rem;
    }
    @media ${device.tablet} {
        height: 95.4rem;
    }
    @media ${device.tabletS} {
        height: 89.4rem;
    }
    @media ${device.mobileL} {
        height: 85rem;
        padding-left: 3rem;
    }
    @media ${device.mobileM} {
        height: 67.8rem;
        padding: 0 0 0 1rem;
    }
    @media ${device.mobileS} {
        padding: 0 1rem;
    }
`

const HeroContent = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    height: unset;

    ${Header} {
        font-size: 24px;
        font-weight: 200;
        color: var(--color-white);
        display: flex;
        margin-top: 1.6rem;
        line-height: 3.6rem;
    }
    @media ${device.laptopM} {
        ${Header} {
            font-size: 22px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 16px;
        }
    }
    @media ${device.mobileM} {
        ${Header} {
            font-size: 14px;
            line-height: 2.8rem;
        }
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    line-height: 10rem;
    font-weight: 600;
    display: flex;
    font-size: 8rem;

    @media ${device.laptopM} {
        width: 40rem;
        font-size: 6rem;
        line-height: 8rem;
    }
    @media ${device.tabletL} {
        font-size: 4.5rem;
        line-height: 6rem;
    }
    @media ${device.tablet} {
        font-size: 20px;
    }
    @media ${device.mobileL} {
        font-size: 24px;
        line-height: 4rem;
        width: 300px;
    }
    @media ${device.mobileS} {
        width: 270px;
    }
`

// const LottieWrapper = styled.div`
//     width: 100%;
//     max-width: 57rem;
//     position: absolute;
//     top: 0;
//     right: 13.4rem;

//     @media ${device.laptopM} {
//         max-width: 51rem;
//     }
//     @media ${device.tabletL} {
//         max-width: 54rem;
//         right: 3rem;
//     }
//     @media ${device.mobileL} {
//         max-width: 425px;
//         top: 0;
//         right: 0;
//         margin-bottom: 25px;
//     }
// `

const ImgWrapper = styled.div`
    margin-top: -8rem;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }

    @media ${device.laptopL} {
        margin-left: 4rem;
    }

    @media ${device.laptopM} {
        width: 43.4rem;
        height: 52.7rem;
        margin-right: 4rem;

        .cHZypl {
            width: 43.4rem;
            height: 52.7rem;
        }
    }
    @media ${device.tabletL} {
        width: 349px;
        height: 424px;

        ..cHZypl {
            width: 349px;
            height: 424px;
        }
    }
    @media ${device.tablet} {
        margin-top: -20px;
        width: 288px;
        height: 350px;

        .cHZypl {
            width: 288px;
            height: 350px;
        }
    }
    @media ${device.mobileL} {
        width: 247px;
        height: 300px;

        .cHZypl {
            width: 247px;
            height: 300px;
        }
    }
    @media ${device.mobileM} {
        margin-top: 1.5rem;
        width: 240px;
        height: 292px;

        .cHZypl {
            width: 240px;
            height: 292px;
        }
    }
`

const ImageWrapper = styled(QueryImage)`
    width: 57.6rem;
    height: 70rem;
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 48.6rem;
    z-index: 1;

    @media ${device.tabletL} {
        max-width: 40rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 328px;
        padding: 0 16px;
    }
`

const TryButton = styled(LinkButton)`
    padding: 1.4rem 1.6rem;
    width: 125px;
    font-size: 14px;
    margin-top: 3.2rem;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
    }
    @media (max-width: 460px) {
        margin-bottom: 2rem;
    }
`

const query = graphql`
    query {
        p2p_hero_background: file(relativePath: { eq: "p2p_hero_background.png" }) {
            ...fadeIn
        }
        p2p_hero_img: file(relativePath: { eq: "p2p_hero_img.png" }) {
            ...fadeIn
        }
    }
`

const Hero = ({
    title,
    content,
    // image_name,
    // is_mobile,
    // background_alt,
    // Logo,
}) => {
    const data = useStaticQuery(query)

    // const DLogo = styled(Logo)`
    //     margin-right: 1.6rem;
    // `

    return (
        <BackgroundWrapper data={data['p2p_hero_background']}>
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={500}>
                        {title}
                    </StyledHeader>
                    <HeroContent>
                        <Header as="h1">{content}</Header>
                    </HeroContent>
                    <TryButton secondary="true" to="">
                        {localize('Try P2P now')}
                    </TryButton>
                </InformationWrapper>
                <ImgWrapper>
                    <ImageWrapper
                        data={data['p2p_hero_img']}
                        alt={'p2p background'}
                        height={'700px'}
                        width={'576px'}
                    />
                </ImgWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

Hero.propTypes = {
    background_alt: PropTypes.string,
    background_image_name: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default Hero
