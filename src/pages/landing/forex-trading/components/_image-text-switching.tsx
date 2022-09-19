import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer, Desktop, Mobile } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { isIndexEven } from 'common/utility'
import { ContentType, StyledProps } from 'pages/landing/_types'

type ImageTextSwitchingProps = {
    P2P: ContentType[]
    reverse: boolean
    two_title?: string
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`
const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`

const Content = styled.div<StyledProps>`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};
    @media ${device.tabletL} {
        width: 90%;
    }

    ${Text} {
        font-weight: 350;
        @media ${device.tabletL} {
            font-weight: 400;
            font-size: 18px;
            text-align: center;
        }
    }

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const ImageWrapper = styled.div<StyledProps>`
    width: 40%;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
        width: 100%;
        max-width: 400px;
        margin: 2rem auto;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        width: 98%;
        margin-top: 0;
        text-align: center;
    }
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        line-height: 30px;
    }
`
const Row = styled.div<StyledProps>`
    justify-content: space-around;
    flex-direction: ${(props) => props.flex_direction};
    width: 85%;
    display: flex;
    margin-top: 9rem;

    &:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 40px;
    }
`

const query = graphql`
    query {
        login: file(relativePath: { eq: "landing/login.png" }) {
            ...fadeIn
        }
        dmt5_acc: file(relativePath: { eq: "landing/dmt5-acc.png" }) {
            ...fadeIn
        }
        dmt5_login: file(relativePath: { eq: "landing/dmt5-login.png" }) {
            ...fadeIn
        }
    }
`
const ImageTextSwitching = ({ P2P, reverse, two_title }: ImageTextSwitchingProps) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection background="var(--color-white)" padding="10rem 0">
            <StyledContainer direction="column">
                <StyledText
                    align="center"
                    lh="4rem"
                    size="var(--text-size-l)"
                    mb="1rem"
                    weight="bold"
                >
                    {localize('Trade forex with ultra-low spreads in 3 simple steps:')}
                </StyledText>

                {P2P.map((item, index) => {
                    const is_even = isIndexEven(index, reverse)
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content margin_right={!is_even ? '12.6rem' : '0'}>
                                <StyledHeader type="heading-3" mb="1rem">
                                    {item.title}
                                </StyledHeader>
                                <Desktop>
                                    <Text size="var(--text-size-m)" pb="2rem">
                                        {item.subtitle1}
                                    </Text>
                                </Desktop>
                                <Mobile>
                                    <Text pb="2rem">{item.subtitle_mobile1}</Text>
                                </Mobile>
                                {two_title && (
                                    <>
                                        <StyledHeader type="heading-3">
                                            {item.second_title}
                                        </StyledHeader>
                                        <Text>{item.second_subtitle1}</Text>
                                    </>
                                )}
                            </Content>
                            <ImageWrapper margin_right={!is_even ? '0' : '12.6rem'}>
                                <QueryImage data={data[item.image_name]} alt={item.image_alt} />
                            </ImageWrapper>
                        </Row>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

export default ImageTextSwitching
