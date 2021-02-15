import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Header, LocalizedLinkText, Text, QueryImage } from 'components/elements'
import { Flex } from 'components/containers'
import device from 'themes/device'

const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    background-color: #f5f7fa;

    @media ${device.tablet} {
        padding: 0 16px 40px 16px;
    }
`

const StyledHeader = styled(Header)`
    font-size: 2.8rem !important;
    margin: 0 228px 8px 0;
    width: 528px;
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
        color: #333333;
    }
`

const Left = styled.div`
    margin-right: 1.8rem;
    margin-top: 40px;
    margin-bottom: 40px;
`

const Right = styled.div`
    margin-top: 52px;
    margin-bottom: 52px;
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
            <Flex>
                <ImageWrapper>
                    <Left margin-left="222px">
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
                    <Right ml="20px">
                        <QueryImage
                            data={data['qr_code']}
                            alt={'QR code'}
                            width="96px"
                            height="96px"
                        />
                    </Right>
                </ImageWrapper>
            </Flex>
        </Section>
    )
}

export default NewApp
