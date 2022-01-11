import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device'

const query = graphql`
    {
        deriv_platform: file(relativePath: { eq: "bug-bounty/devices.jpg" }) {
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

const WrapContainer = styled(Flex)`
    align-items: center;

    @media ${device.laptopM} {
        flex-direction: column;
    }
`

const WrapText = styled(Flex)`
    @media ${device.laptopM} {
        margin-bottom: 2.5rem;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        text-align: center;
    }
`

const SeparatorLine = styled.div`
    height: 24px;
    @media ${device.laptopM} {
        height: 20px;
    }
`

const AboutDeriv = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const image_width = is_mobile ? '328px' : '384px'
    const image_height = is_mobile ? '187px' : '224px'

    return (
        <Container>
            <WrapContainer p="8rem 0" tablet={{ p: '40px 0' }}>
                <WrapText direction="column" max_width="38.4rem" tablet={{ max_width: '100%' }}>
                    <StyledHeader mb="0.8rem" as="h2" type="heading-2">
                        {localize('About Deriv')}
                    </StyledHeader>
                    <Header type="paragraph-1" weight="normal" as="p">
                        <Localize
                            translate_text="We provide online trading services to over 2 million clients via desktop and mobile applications across multiple platforms. 
                            <0/>Security is important to us. We continuously improve our products and services by collaborating with independent security researchers worldwide."
                            components={[<SeparatorLine key={0} />]}
                        />
                    </Header>
                </WrapText>

                <ImageWrapper>
                    <QueryImage
                        data={data.deriv_platform}
                        alt={'Deriv platform'}
                        height={image_height}
                        width={image_width}
                    />
                </ImageWrapper>
            </WrapContainer>
        </Container>
    )
}

export default AboutDeriv
