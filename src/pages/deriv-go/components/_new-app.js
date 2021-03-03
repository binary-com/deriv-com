import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Header, LocalizedLinkText, Text, QueryImage } from 'components/elements'
import { Flex, Show } from 'components/containers'
import { Button } from 'components/form'
import device from 'themes/device'

const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    background-color: #f5f7fa;

    @media ${device.tabletL} {
        width: 768px;
        height: 65px;
    }

    @media ${device.mobileL} {
        width: 425px;
        height: 65px;
    }
    @media ${device.mobileM} {
        width: 375px;
        height: 65px;
    }
`

const StyledHeader = styled(Header)`
    font-size: 2.8rem !important;
    margin: 0 228px 8px 0;
    width: 528px;

    @media ${device.mobileL} {
        font-size: 1.8rem !important;
        margin-left: 10px;
        width: 65px;
    }
`

const ImageWrapper = styled(Flex)`
    display: flex;
`

const Content = styled.div`
    width: 100%;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Text} {
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: black;
    }

    @media ${device.mobileL} {
        max-width: 23.5rem;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 12px;
        margin-top: 12px;
    }
`

const Left = styled.div`
    margin-left: 400px;
    margin-top: 40px;
    margin-bottom: 40px;

    @media ${device.tabletL} {
        margin-left: 16px;
        margin-top: 17px;
        margin-bottom: 15px;
    }

    @media ${device.mobileL} {
        margin-left: 16px;
        margin-top: 17px;
        margin-bottom: 15px;
    }
`
const AndroidButton = styled(Button)`
    @media ${device.mobileL} {
        background: transparent;
        border: 1px solid var(--color-grey);
        width: 102px;
        padding: 1.6px;

        &:hover {
            background: transparent;
            border-color: var(--color-grey);
        }
    }
`

const Right = styled.div`
    margin-right: 420px;
    margin-top: 52px;
    margin-bottom: 52px;

    @media ${device.tabletL} {
        margin: 20px 20px 21px 400px;
    }

    @media ${device.mobileL} {
        margin: 20px 20px 21px 60px;
    }
    @media ${device.mobileM} {
        margin: 20px 20px 21px 18px;
    }
`

const query = graphql`
    query {
        dgo_logo: file(relativePath: { eq: "derivgo/dgo_logo.png" }) {
            ...fadeIn
        }
        qr_code: file(relativePath: { eq: "derivgo/qr_code.png" }) {
            ...fadeIn
        }
    }
`

const NewApp = () => {
    const data = useStaticQuery(query)

    return (
        <Section>
            <Show.Desktop>
                <Flex>
                    <ImageWrapper>
                        <Left>
                            <QueryImage
                                data={data['dgo_logo']}
                                alt={'logo'}
                                width="120px"
                                height="120px"
                            />
                        </Left>
                    </ImageWrapper>
                    <Content>
                        <StyledHeader>
                            <Localize translate_text="Get the new Deriv Go mobile app" />
                        </StyledHeader>
                        <Text size="20px" width="732px">
                            <Localize
                                translate_text="Scan this QR code to download the app from the <0>Google Play Store</0>."
                                components={[<LocalizedLinkText size={20} color="red" key={0} />]}
                            />
                        </Text>
                        <Text size="12px">
                            <Localize translate_text="(iOS users: We haven't forgrotten you. A version for you is in the works.)" />
                        </Text>
                    </Content>
                    <ImageWrapper>
                        <Right>
                            <QueryImage
                                data={data['qr_code']}
                                alt={'QR code'}
                                width="96px"
                                height="96px"
                            />
                        </Right>
                    </ImageWrapper>
                </Flex>
            </Show.Desktop>
            <Show.Mobile>
                <Flex>
                    <ImageWrapper>
                        <Left>
                            <QueryImage
                                data={data['dgo_logo']}
                                alt={'logo'}
                                width="32px"
                                height="32px"
                            />
                        </Left>
                    </ImageWrapper>
                    <Content>
                        <StyledHeader>
                            <Localize translate_text="Deriv Go" />
                        </StyledHeader>
                        <Text size="12px" ml="10px">
                            <Localize translate_text="Trade on the Go." />
                        </Text>
                    </Content>
                    <Right>
                        <AndroidButton>
                            <Text size="12px" width="85px" style={{ fontWeight: 'bold' }}>
                                <Localize translate_text="Get on Android" />
                            </Text>
                        </AndroidButton>
                    </Right>
                </Flex>
            </Show.Mobile>
        </Section>
    )
}

export default NewApp
