import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import CtaBinary from './_cta-binary'
import { Container, Flex, Box } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import Platform from 'images/common/interim/check-interim-bg.png'
import PlatformMobile from 'images/common/interim/interim-mobile-bg.png'

const Section = styled(Box)`
    width: 100%;
    height: 350px;
    background-image: url(${(props) => props.image || Platform});
    background-size: 65% 100%;
    background-position-x: right;
    background-repeat: no-repeat;
    position: relative;

    @media ${device.tabletL} {
        height: 700px;
        background-image: url(${(props) => props.mobile_image || PlatformMobile});
        background-size: 100% 63%;
        background-position-y: bottom;
        background-repeat: no-repeat;
    }
`

const Responsive = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const AbsoluteWrapper = styled(Box)`
    width: 54rem;
    position: absolute;
    left: 30%;
    bottom: 0;

    @media (max-width: 1565px) {
        left: 28%;

        .gatsby-image-wrapper {
            width: 50rem;
        }
    }
    @media (max-width: 1390px) {
        .gatsby-image-wrapper {
            width: 44rem;
        }
    }
    @media (max-width: 1300px) {
        .gatsby-image-wrapper {
            width: 35rem;
        }
    }
    @media (max-width: 1146px) {
        .gatsby-image-wrapper {
            width: 30rem;
        }
    }
    @media ${device.tabletL} {
        display: none;
    }
`

const MobileWrapper = styled.div`
    display: none;

    @media ${device.tabletL} {
        display: block;
        margin: 3.2rem 0;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const query = graphql`
    query {
        affiliate: file(relativePath: { eq: "interim/affiliate.png" }) {
            ...fadeIn
        }
        smart_trader: file(relativePath: { eq: "interim/smarttrader.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "interim/interim-dmt5.png" }) {
            ...fadeIn
        }
        dbot: file(relativePath: { eq: "interim/interim-dbot.png" }) {
            ...fadeIn
        }
    }
`

const StyledLeftContainer = styled(Flex)`
    @media ${device.tabletL} {
        height: 210px;
        max-width: unset;
    }
`

const LeftCTASection = ({ params }) => {
    const { button_text, button_url, cta_props, header, hide_cta } = params
    return (
        <>
            <Header as="h3" type="section-title" mb="4rem" align="center" tabletL={{ mb: '34px' }}>
                {header}
            </Header>
            <FitButton secondary to={button_url}>
                {button_text}
            </FitButton>
            {!hide_cta && <CtaBinary {...(cta_props || {})} />}
        </>
    )
}

LeftCTASection.propTypes = {
    params: PropTypes.object,
}

const RightCTASection = ({ params }) => {
    const { button_props, button_text, button_url, cta_props, header, hide_cta } = params
    return (
        <Flex width="auto" fd="column" ai="center" ml="0" max_width="38.4rem">
            <Header as="h3" color="white" type="section-title" mb="3rem" align="center">
                {header}
            </Header>
            <FitButton
                external="true"
                white
                to={button_url}
                target="_blank"
                rel="noopener noreferrer"
                {...(button_props || {})}
            >
                {button_text}
            </FitButton>
            {!hide_cta && <CtaBinary {...(cta_props || {})} />}
        </Flex>
    )
}

RightCTASection.propTypes = {
    params: PropTypes.object,
}

export const LoveTradingComponent = ({ bg_image, bg_image_mobile, image, left, right }) => {
    const data = useStaticQuery(query)
    return (
        <Section p="3.2rem 0" image={bg_image} mobile_image={bg_image_mobile}>
            <AbsoluteWrapper>
                <QueryImage data={data[image]} width="54rem" />
            </AbsoluteWrapper>
            <Responsive jc="space-between" position="relative">
                <StyledLeftContainer fd="column" ai="center" max_width="28.2rem">
                    {left.custom_content || <LeftCTASection params={left} />}
                </StyledLeftContainer>
                <MobileWrapper>
                    <QueryImage data={data[image]} width="30rem" />
                </MobileWrapper>
                {right.custom_content || <RightCTASection params={right} />}
            </Responsive>
        </Section>
    )
}

LoveTradingComponent.propTypes = {
    bg_image: PropTypes.object,
    bg_image_mobile: PropTypes.object,
    image: PropTypes.string,
    left: PropTypes.object,
    right: PropTypes.object,
}
