import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
// import device from 'themes/device.js'

const query = graphql`
    query {
        deriv_mt5_fav: file(relativePath: { eq: "binary-to-deriv/deriv-mt5-favorite.png" }) {
            ...fadeIn
        }
        dtrader_fav: file(relativePath: { eq: "binary-to-deriv/dtrader-favorite.png" }) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled(Flex)`
    max-width: 384px;

    :first-child {
        margin-right: 24px;
    }
`

const Favorite = () => {
    const data = useStaticQuery(query)
    return (
        <Container>
            <Flex fd="column" mb="120px">
                <Header type="heading-2" align="center" mb="40px">
                    {localize('Access your favourite platforms in one place')}
                </Header>
                <Flex>
                    <ImageWrapper>
                        <QueryImage
                            data={data['deriv_mt5_fav']}
                            alt="Deriv MT5 favorite"
                            width="100%"
                        />
                    </ImageWrapper>
                    <ImageWrapper>
                        <QueryImage
                            data={data['dtrader_fav']}
                            alt="Dtrader favorite"
                            width="100%"
                        />
                    </ImageWrapper>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Favorite
