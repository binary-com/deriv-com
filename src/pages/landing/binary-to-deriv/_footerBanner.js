import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
// import { LinkButton } from 'components/form'
// import { localize } from 'components/localization'
import device from 'themes/device.js'
import pattern from 'images/common/binary-to-deriv/pattern.png'

const query = graphql`
    {
        d_trader: file(relativePath: { eq: "binary-to-deriv/dtrader.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    background-image: url(${(props) => props.background_pattern});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right -10rem;
    height: 305px;
    max-width: 1440px;
    position: relative;
`
const ContentWrapper = styled(Container)`
    flex-direction: row;

    @media ${device.desktop} {
        width: 100%;
        max-width: 100%;
    }
`
const ImageWrapper = styled(Flex)`
    max-width: 609px;
    align-items: flex-end;
`
const DtraderWrapper = styled(Flex)`
    position: absolute;
    top: 50.01%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const FooterBanner = () => {
    const data = useStaticQuery(query)

    return (
        <Flex>
            <MainWrapper background_pattern={pattern}>
                <ContentWrapper jc="space-between">
                    <Flex width="377px" fd="column" ml="100px" mb="8px">
                        <Header type="heading-3">
                            Binary.com has moved to Deriv since 30 November
                        </Header>
                        <Header type="paragraph-1" weight="normal">
                            Start using Deriv with your Binary.com email and password.
                        </Header>
                    </Flex>
                    <Flex width="388px" fd="column" mr="50px">
                        <Header type="heading-3" color="white">
                            Want to continue trading?
                        </Header>
                    </Flex>
                </ContentWrapper>
            </MainWrapper>

            <DtraderWrapper>
                <ImageWrapper>
                    <QueryImage data={data['d_trader']} alt="DTrader" width="100%" />
                </ImageWrapper>
            </DtraderWrapper>
        </Flex>
    )
}

export default FooterBanner
