import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
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
    line-height: 1.25;
    font-size: 3rem !important;
`

const ImageWrapper = styled(Flex)`
    display: flex;
`

const Left = styled.div`
    margin-right: 1.6rem;
    margin-top: 40px;
    margin-bottom: 40px;
`

const Right = styled.div`
    justify-content: flex-end;
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
                <StyledHeader align="center" mt="40px">
                    <Localize translate_text="Get the new Deriv Go mobile app" />
                </StyledHeader>
                <ImageWrapper>
                    <Right margin="12px 0 8px 24px">
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
