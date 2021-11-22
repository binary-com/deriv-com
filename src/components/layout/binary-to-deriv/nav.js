import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LocalizedLink, localize } from 'components/localization'
import { CFDWarning } from 'components/layout'
import { QueryImage } from 'components/elements'
import { Container, Flex, SectionContainer } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

export const Section = styled(SectionContainer)`
    background-color: ${(props) => (props.background ? 'transparent' : 'var(--color-black)')};
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    padding: 16px 1%;
    height: 72px;

    @media ${device.tabletL} {
        padding: 16px;
        height: 64px;
    }

    @media ${device.mobileL} {
        padding: 16px 0;
    }
`

const ContentContainer = styled(Container)`
    justify-content: space-between;

    @media ${device.tabletL} {
        justify-content: center;
    }
`

const LogoWrapper = styled(Flex)`
    align-items: center;
    width: 138px;
`
export const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 100%;
`
const BtnWrapper = styled(Flex)`
    justify-content: flex-end;

    @media ${device.tabletL} {
        display: none;
    }
`
const StyledLinkRightButton = styled(LinkButton)`
    padding: 10px 16px;
    background: var(--color-green-3);
    border: 2px solid var(--color-green-3);
`
const query = graphql`
    query {
        binary: file(relativePath: { eq: "binary.png" }) {
            ...fadeIn
        }
    }
`
const BinaryToDerivNav = ({ is_ppc }) => {
    const data = useStaticQuery(query)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
                currentScrollPos < 10,
        )
        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    return (
        <>
            <Section background={visible}>
                <ContentContainer>
                    <LogoWrapper>
                        <LogoLink to="https://deriv.com/" aria-label={localize('Home')}>
                            <QueryImage
                                data={data['binary']}
                                alt={localize('Binary')}
                                max_width="16.4rem"
                                width="100%"
                                height="auto"
                            />
                        </LogoLink>
                    </LogoWrapper>
                    <BtnWrapper>
                        <StyledLinkRightButton
                            to="https://deriv.com/signup/"
                            rel="noopener noreferrer"
                            secondary="true"
                        >
                            {localize('Take me to Deriv')}
                        </StyledLinkRightButton>
                    </BtnWrapper>
                </ContentContainer>
            </Section>
            <CFDWarning is_ppc={is_ppc} />
        </>
    )
}

BinaryToDerivNav.propTypes = {
    is_ppc: PropTypes.bool,
}

export default BinaryToDerivNav
