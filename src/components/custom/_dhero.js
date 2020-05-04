import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { deriv_app_url, isBrowser } from 'common/utility'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device, { size } from 'themes/device.js'

const Wrapper = styled.div`
    position: relative;
    background-color: var(--color-black);
    width: 100%;
    display: flex;
    height: 575px;
    padding: 12rem 0 9rem 12rem;

    @media ${device.laptopM} {
        max-height: 429px;
    }
    @media ${device.laptopM} {
        padding: 0 0 0 5rem;
    }
    @media ${device.tablet} {
        padding: unset;
        max-height: unset;
        height: 780px;
    }
    @media ${device.mobileL} {
        height: 640px;
    }
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 58.4rem;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 1.5rem;
        margin-bottom: 13.4rem;
    }
    @media ${device.laptopM} {
        ${Header} {
            margin-bottom: 100px;
            font-size: 32px;
            margin-left: 16px;
        }
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
    font-size: 2.4rem;

    @media ${device.laptopM} {
        margin-left: 16px;
    }
`

const LottieWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 606px;
    max-height: 360px;

    @media ${device.laptopM} {
        right: 0;
        top: 5rem;
        width: 58%;
    }
    @media ${device.laptop} {
        width: 88%;
    }
    @media ${device.tablet} {
        width: 67%;
        margin-bottom: 7rem;
    }
`

const GoToLiveDemo = styled(Button)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    margin-left: 2.4rem;

    @media ${device.laptopM} {
        font-size: 14px;
        margin-left: 0;
        min-height: 40px;
        width: 190px;
    }
    @media ${device.mobileL} {
        width: 160px;
    }
`
const DemoButton = styled(LinkButton)`
    @media ${device.laptopM} {
        width: 200px;
        font-size: 14px;
        min-height: 40px;
        margin-right: 2px;
    }
    @media ${device.mobileL} {
        width: 172px;
    }
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;
`
const InformationWrapper = styled(Flex)`
    width: 66%;

    @media ${device.laptop} {
        width: 77%;
    }
    @media ${device.tablet} {
        width: 100%;
    }
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 10.8rem;
    right: 12rem;
    width: 84%;

    @media ${device.laptop} {
        right: unset;
    }
    @media ${device.tablet} {
        flex-direction: column;
        flex-direction: column-reverse;
        top: 5rem;
        align-items: center;
        width: 100%;
    }
`
const LinkWrapper = styled.div`
    @media ${device.tabletL} {
        text-align: center;
        display: flex;
        justify-content: start;
    }
    @media ${device.mobileL} {
        justify-content: space-around;
    }
`

const query = graphql`
    query {
        dbot: file(relativePath: { eq: "dbot_trade.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "dmt5_trade.png" }) {
            ...fadeIn
        }
        dtrader: file(relativePath: { eq: "dtrader_trade.png" }) {
            ...fadeIn
        }
        dtrader_mobile: file(relativePath: { eq: "dtrader_trade_mobile.png" }) {
            ...fadeIn
        }
    }
`

const DHero = ({
    title,
    background_alt,
    background_svg,
    content,
    image_name,
    join_us_for_free,
    go_to_live_demo,
    Logo,
}) => {
    const data = useStaticQuery(query)
    const handleRedirect = () => {
        const path = image_name === 'dbot' ? '/bot' : '/'
        window.open(deriv_app_url + path, '_blank')
    }
    const DLogo = styled(Logo)`
        margin-right: 1.6rem;
    `
    const BackgroundSVG = styled(background_svg)`
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;

        @media ${device.laptopM} {
            max-width: 492px;
        }
        @media ${device.tablet} {
            max-width: 400px;
            height: 46%;
        }
        @media ${device.mobileL} {
            height: unset;
            top: 0;
        }
    `
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow)
    })
    return (
        <Wrapper>
            <BackgroundSVG />
            <ContentWrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={500}>
                        <DLogo />
                        {title}
                    </StyledHeader>
                    <HeroContent>
                        <StyledContent as="h2">{content}</StyledContent>
                    </HeroContent>
                    <LinkWrapper>
                        {join_us_for_free ? (
                            <DemoButton secondary="true" to="/signup/">
                                {is_mobile
                                    ? localize('Create demo account')
                                    : localize('Create free demo account')}
                            </DemoButton>
                        ) : null}
                        {go_to_live_demo ? (
                            <GoToLiveDemo tertiary onClick={handleRedirect}>
                                {localize('Go to live demo')}
                            </GoToLiveDemo>
                        ) : null}
                    </LinkWrapper>
                </InformationWrapper>
                <LottieWrapper>
                    <QueryImage
                        data={data[is_mobile ? image_name + '_mobile' : image_name]}
                        alt={background_alt}
                    />
                </LottieWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

DHero.propTypes = {
    background_alt: PropTypes.string,
    background_image_name: PropTypes.string,
    background_svg: PropTypes.func,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    go_to_live_demo: PropTypes.bool,
    image_name: PropTypes.string,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    title: PropTypes.string,
}

export default DHero

// import React from 'react'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { graphql, useStaticQuery } from 'gatsby'
// import { deriv_app_url } from 'common/utility'
// import { localize } from 'components/localization'
// import { Container, Show, Flex } from 'components/containers'
// import { Header, QueryImage } from 'components/elements'
// import { Button, LinkButton } from 'components/form'
// import device from 'themes/device.js'

// const HeroContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     max-width: 58.4rem;

//     ${Header} {
//         color: var(--color-white);
//         display: flex;
//         margin-top: 1.5rem;
//     }
// `
// const StyledHeader = styled(Header)`
//     color: var(--color-white);
//     display: flex;
//     margin-top: 0;
//     font-size: 2.4rem;
// `
// const Wrapper = styled.div`
//     position: relative;
//     overflow: hidden;
//     background-color: var(--color-black);
//     width: 100%;
//     padding: 10rem 12rem 9.1rem;
//     display: flex;
//     flex-direction: column;
//     max-height: 575px;

//     @media ${device.laptop} {
//         max-height: 640px;
//     }
// `

// const TryForFree = styled(LinkButton)`
//     @media ${device.tabletL} {
//         width: 100%;
//         margin-top: 18.5rem;
//         max-width: 47rem;
//         margin-bottom: 2.4rem;
//     }
// `
// const StyledContainer = styled.div`
//     display: flex;
//     align-items: flex-start;
//     width: 100%;
//     font-size: 5.6rem;

//     @media ${device.laptop} {
//         flex-direction: column;
//         height: 100%;
//     }
// `
// const LottieWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     max-width: 584px;
//     max-height: 375px;
// `
// const GoToLiveDemo = styled(Button)`
//     color: var(--color-white);
//     border-color: var(--color-black-5);
//     margin-left: 2.4rem;

//     @media ${device.tabletL} {
//         margin-left: 0;
//     }
//     @media ${device.tabletL} {
//         width: 100%;
//         max-width: 47rem;
//     }
// `
// const StyledContent = styled(Header)`
//     font-size: 5.6rem;
// `
// const InformationWrapper = styled(Flex)`
//     min-height: 36rem;
// `
// const LinkWrapper = styled.div`
//     @media ${device.tabletL} {
//         text-align: center;
//         display: flex;
//         flex-direction: column;
//     }
// `
// const query = graphql`
//     query {
//         dbot: file(relativePath: { eq: "dbot_trade.png" }) {
//             ...fadeIn
//         }
//         dmt5: file(relativePath: { eq: "dmt5_trade.png" }) {
//             ...fadeIn
//         }
//         dtrader: file(relativePath: { eq: "dtrader_trade.png" }) {
//             ...fadeIn
//         }
//     }
// `
// const DHero = ({
//     title,
//     background_alt,
//     background_svg,
//     content,
//     image_name,
//     join_us_for_free,
//     go_to_live_demo,
//     Logo,
// }) => {
//     const data = useStaticQuery(query)
//     const handleRedirect = () => {
//         const path = image_name === 'dbot' ? '/bot' : '/'
//         window.open(deriv_app_url + path, '_blank')
//     }
//     const DLogo = styled(Logo)`
//         margin-right: 1.6rem;
//     `
//     const BackgroundSVG = styled(background_svg)`
//         position: absolute;
//         top: 0;
//         right: 0;
//     `
//     return (
//         <Wrapper>
//             <BackgroundSVG />
//             <StyledContainer>
//                 <InformationWrapper direction="column" jc="space-between">
//                     <div>
//                         <StyledHeader as="h1" weight={500}>
//                             <DLogo />
//                             {title}
//                         </StyledHeader>
//                         <HeroContent>
//                             <StyledContent as="h2">{content}</StyledContent>
//                         </HeroContent>
//                     </div>
//                     <div>
//                         <LinkWrapper>
//                             {join_us_for_free ? (
//                                 <TryForFree secondary="true" to="/signup/">
//                                     {localize('Create free demo account')}
//                                 </TryForFree>
//                             ) : null}
//                             {go_to_live_demo ? (
//                                 <GoToLiveDemo tertiary onClick={handleRedirect}>
//                                     {localize('Go to live demo')}
//                                 </GoToLiveDemo>
//                             ) : null}
//                         </LinkWrapper>
//                     </div>
//                 </InformationWrapper>
//                 <LottieWrapper>
//                     <QueryImage data={data[image_name]} alt={background_alt} width="54.3rem" />
//                 </LottieWrapper>
//
//             </StyledContainer>
//         </Wrapper>

//         // <Wrapper>
//         //     <Show.Desktop>
//         //         <BackgroundSVG />
//         //     </Show.Desktop>
//         //     <StyledContainer>
//         //         <InformationWrapper direction="column" jc="space-between">
//         //             <div>
//         //                 <StyledHeader as="h1" weight={500}>
//         //                     <DLogo />
//         //                     {title}
//         //                 </StyledHeader>
//         //                 <HeroContent>
//         //                     <StyledContent as="h2">{content}</StyledContent>
//         //                 </HeroContent>
//         //             </div>
//         //             <div>
//         //                 <LinkWrapper>
//         //                     {join_us_for_free ? (
//         //                         <TryForFree secondary="true" to="/signup/">
//         //                             {localize('Create free demo account')}
//         //                         </TryForFree>
//         //                     ) : null}
//         //                     {go_to_live_demo ? (
//         //                         <GoToLiveDemo tertiary onClick={handleRedirect}>
//         //                             {localize('Go to live demo')}
//         //                         </GoToLiveDemo>
//         //                     ) : null}
//         //                 </LinkWrapper>
//         //             </div>
//         //         </InformationWrapper>
//         //         <div>
//         //             <Show.Desktop>
//         //                 <LottieWrapper>
//         //                     <QueryImage
//         //                         data={data[image_name]}
//         //                         alt={background_alt}
//         //                         width="54.3rem"
//         //                     />
//         //                 </LottieWrapper>
//         //             </Show.Desktop>
//         //         </div>
//         //     </StyledContainer>
//         // </Wrapper>
//     )
// }

// DHero.propTypes = {
//     background_alt: PropTypes.string,
//     background_image_name: PropTypes.string,
//     background_svg: PropTypes.func,
//     content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     go_to_live_demo: PropTypes.bool,
//     image_name: PropTypes.string,
//     join_us_for_free: PropTypes.bool,
//     Logo: PropTypes.func,
//     title: PropTypes.string,
// }

// export default DHero
