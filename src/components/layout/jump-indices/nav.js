import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { localize } from 'components/localization'
import LogoCombinedShape from 'images/svg/logo-combined-shape.svg'
import { QueryImage } from 'components/elements'
import { Container, Flex, SectionContainer } from 'components/containers'
import device from 'themes/device.js'

export const Section = styled(SectionContainer)`
    background-color: var(--color-black);
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    padding: 22px 1%;
    height: 72px;

    @media ${device.tablet} {
        padding: 16px;
        height: unset;
    }

    @media ${device.mobileL} {
        padding: 16px 0;
    }
`

const ContentContainer = styled(Container)`
    align-items: center;
    justify-content: space-between;

    @media ${device.tabletL} {
        justify-content: center;
    }
`

const LogoWrapper = styled(Flex)`
    flex-direction: row;
    align-items: center;
    width: 293px;
`
const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);
`
const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`
const JumpIndiceNav = () => {
    const data = useStaticQuery(query)
    return (
        <Section>
            <ContentContainer>
                <LogoWrapper>
                    <QueryImage
                        data={data['deriv']}
                        alt={localize('Deriv')}
                        max_width="16.4rem"
                        width="100%"
                        height="auto"
                    />
                    <Line />
                    <img
                        src={LogoCombinedShape}
                        alt="logo combined shape"
                        width="120"
                        height="16"
                    />
                </LogoWrapper>
            </ContentContainer>
        </Section>
    )
}
export default JumpIndiceNav
