import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { LocalizedLink, localize } from 'components/localization'
import { CFDWarning } from 'components/layout'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import { QueryImage } from 'components/elements'
import { Container, Flex, SectionContainer } from 'components/containers'
import device from 'themes/device.js'

const ContentContainer = styled(Container)`
    justify-content: space-between;
    @media ${device.tabletL} {
        justify-content: center;
    }
`
const LogoWrapper = styled(Flex)`
    align-items: center;
    width: 293px;
    @media ${device.tabletL} {
        width: 176px;
    }
`
const ImgWrapper = styled.img`
    width: 120px;
    height: 16px;
    @media ${device.tabletL} {
        width: 75px;
        height: 10px;
    }
`
const Section = styled(SectionContainer)`
    background-color: var(--color-black);
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    padding: 22px 1%;
    height: 72px;
    @media ${device.tabletL} {
        padding: 16px;
        height: 48px;
    }
    @media ${device.mobileL} {
        padding: 16px 0;
    }
`
const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);
    @media ${device.tabletL} {
        height: 16px;
    }
`
const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 100%;
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

type NavJumpIndiceProps = {
    is_ppc?: boolean
}

const NavJumpIndice = (props: NavJumpIndiceProps) => {
    const data = useStaticQuery(query)

    return (
        <>
            <Section>
                <ContentContainer>
                    <LogoWrapper>
                        <LogoLink to="/" aria-label={localize('Home')}>
                            <QueryImage
                                data={data['deriv']}
                                alt={localize('Deriv')}
                                max_width="16.4rem"
                                width="100%"
                                height="auto"
                            />
                        </LogoLink>
                        <Line />
                        <ImgWrapper src={LogoCombinedShape} />
                    </LogoWrapper>
                </ContentContainer>
            </Section>
            <CFDWarning {...props} />
        </>
    )
}

export default NavJumpIndice
