import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        deriv_platform: file(relativePath: { eq: "security/devices.jpg" }) {
            ...fadeIn
        }
    }
`

const ImageWrapper = styled.div`
    width: 38.4rem;
    height: 22.4rem;
    margin-left: 2.4rem;

    @media ${device.laptopM} {
        margin-left: 0;
    }
`

const AboutDeriv = () => {
    const data = useStaticQuery(query)

    return (
        <Container>
            <Flex ai="center" p="8.2rem 0" laptopM={{ fd: 'column' }}>
                <Flex
                    direction="column"
                    max_width="38.4rem"
                    tablet={{ max_width: '100%' }}
                    laptopM={{ mb: '2.5rem' }}
                >
                    <Header mb="0.8rem" as="h2" type="heading-2" laptopM={{ align: 'center' }}>
                        {localize('About Deriv')}
                    </Header>
                    <Header as="p" type="paragraph-1" weight="normal">
                        {localize(
                            'We provide online trading services to over 2 million clients via desktop and mobile applications across multiple platforms.',
                        )}
                    </Header>

                    <Header as="p" type="paragraph-1" weight="normal" mt="2.4rem">
                        {localize(
                            'Security is important to us. We continuously improve our products and services by collaborating with independent security researchers worldwide.',
                        )}
                    </Header>
                </Flex>
                <ImageWrapper>
                    <QueryImage data={data.deriv_platform} alt={'Deriv platform'} />
                </ImageWrapper>
            </Flex>
        </Container>
    )
}

export default AboutDeriv
