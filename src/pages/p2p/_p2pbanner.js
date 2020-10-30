import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import { Background } from 'components/elements/background-image'

const Wrapper = styled(Flex)`
    padding-left: 22.2rem;
    position: relative;
    height: 34rem;
    justify-content: flex-start;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: transparent;

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

const TryButton = styled(LinkButton)`
    padding: 1.4rem 1.6rem;
    width: 125px;
    font-size: 14px;
    margin-top: 2.4rem;
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
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 48.6rem;
    z-index: 1;

    @media (max-width: 1376px) {
        max-width: 44rem;
    }
    @media ${device.tabletL} {
        max-width: 40rem;
        margin-top: 5rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 328px;
        padding: 0 16px;
        margin-top: 15rem;
    }
    @media ${device.tabletS} {
        max-width: 576px;
        margin-top: 2.5rem;
        align-items: center;
    }
    @media ${device.mobileM} {
        padding-left: 0;
        padding-right: 0;
    }
`

// const TextWrapper = styled.div`
//     margin-top: 8rem;

//     @media ${device.laptopM} {
//         max-width: 37rem;
//     }
//     @media ${device.tablet} {
//         max-width: 256px;
//         margin-top: 10px;
//     }
//     @media ${device.tabletS} {
//         margin: 234px auto 0;
//         max-width: 328px;
//         text-align: center;
//     }
// `
// const StyledLinkButton = styled(LinkButton)`
//     width: 20.2rem;
//     border: unset;
//     line-height: 1.5;
//     display: inline-block;

//     @media ${device.tabletS} {
//         margin: 0 auto;
//     }
// `
const StyledHeader = styled(Header)`
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.25;
    color: var(--color-white);

    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
    @media ${device.tabletS} {
        font-size: 40px;
        text-align: center;
    }
    @media ${device.mobileL} {
        font-size: 32px;
    }
    @media ${device.mobileS} {
        font-size: 32px;
    }
`

const query = graphql`
    query {
        p2p_banner: file(relativePath: { eq: "p2p_banner.png" }) {
            ...fadeIn
        }
        p2p_banner_mobile: file(relativePath: { eq: "p2p_banner_mobile.png" }) {
            ...fadeIn
        }
    }
`

const P2PBanner = ({ title, is_mobile }) => {
    const data = useStaticQuery(query)

    // const BackgroundPattern = styled(background_pattern)`
    //     position: absolute;
    //     top: 0;
    //     right: 0;

    //     @media ${device.laptopM} {
    //         width: 60rem;
    //         height: initial;
    //     }
    //     @media ${device.tabletL} {
    //         width: 54rem;
    //     }
    //     @media ${device.tablet} {
    //         width: 44rem;
    //     }
    //     @media ${device.tabletS} {
    //         width: 400px;
    //     }
    //     @media ${device.mobileL} {
    //         width: unset;
    //         max-width: unset;
    //     }
    // `
    return (
        <Background
            style={{ height: is_mobile ? '402px' : '340px' }}
            data={data[is_mobile ? 'p2p_banner_mobile' : 'p2p_banner']}
        >
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h3" weight={500}>
                        {title}
                    </StyledHeader>
                    <TryButton secondary="true" to="">
                        {localize('Try P2P now')}
                    </TryButton>
                </InformationWrapper>
            </Wrapper>
        </Background>
    )
}

P2PBanner.propTypes = {
    // background_pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    data: PropTypes.object.isRequired,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default P2PBanner
