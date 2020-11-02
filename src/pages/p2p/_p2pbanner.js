import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import { Background } from 'components/elements/background-image'

const Wrapper = styled(Container)`
    padding-left: 16rem;
    height: 34rem;
    justify-content: flex-start;
    background-color: transparent;

    @media ${device.laptopM} {
        padding-left: 80px;
    }
    @media ${device.tabletL} {
        justify-content: center;
        align-items: flex-start;
        height: 402px;
        padding-left: 0;
        padding-right: 0;
    }
    @media ${device.tabletS} {
        height: unset;
        padding: 0 16px 40px 16px;
    }
`

const BackgroundWrapper = styled(Background)`
    background-position-x: 40%;
    background-position-y: ${(props) => (props.is_mobile ? '50%' : '20%')};
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
        max-width: 576px;
        margin-top: 2.5rem;
        align-items: center;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 576px;
        padding: 0 0;
    }
`

const StyledHeader = styled(Header)`
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.25;
    color: var(--color-white);

    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
    @media ${device.tabletL} {
        font-size: 40px;
        text-align: center;
        margin-top: 40px;
    }
    @media ${device.tabletS} {
        font-size: 32px;
        margin-top: 20px;
    }
    @media ${device.mobileL} {
        margin-top: 0;
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

    return (
        <BackgroundWrapper
            style={{ height: is_mobile ? '402px' : '340px' }}
            data={data[is_mobile ? 'p2p_banner_mobile' : 'p2p_banner']}
            is_mobile={is_mobile}
            key={is_mobile ? `mobile` : `desktop`}
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
        </BackgroundWrapper>
    )
}

P2PBanner.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    data: PropTypes.object.isRequired,
    image_name: PropTypes.string,
    is_mobile: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default P2PBanner
