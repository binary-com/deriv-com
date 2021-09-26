import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { Container, SectionContainer, Show } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { isIndexEven } from 'common/utility'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 16px 0;
    }
`
const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        @media ${device.tabletL} {
            font-size: 18px;
            text-align: center;
        }
    }

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const ImageWrapper = styled.div`
    max-width: 47.1rem;
    width: 100%;
    max-height: 30rem;
    margin-right: ${(props) => props.margin_right};

    @media ${device.tabletL} {
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
const Row = styled.div`
    flex-direction: ${(props) => props.flex_direction};
    width: 100%;
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
        buy_sell: file(relativePath: { eq: "landing/crypto1.png" }) {
            ...fadeIn
        }
        local_currency: file(relativePath: { eq: "landing/crypto2.png" }) {
            ...fadeIn
        }
    }
`
const ImageTextSwitching = ({ P2P, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection background="var(--color-white)" padding="5rem 0 0 0">
            <StyledContainer direction="column">
                <StyledText
                    align="center"
                    lh="4rem"
                    size="var(--text-size-l)"
                    mb="1rem"
                    weight="bold"
                >
                    {localize('Trade the markets that never sleep')}
                </StyledText>

                {P2P.map((item, index) => {
                    let is_even = isIndexEven(index, reverse)
                    return (
                        <Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                            <Content
                                width="100%"
                                max_width="58.8rem"
                                margin_right={!is_even ? '12.6rem' : '0'}
                            >
                                <StyledHeader type="heading-3" mb="1rem">
                                    {item.title}
                                </StyledHeader>
                                <Show.Desktop>
                                    <Text size="var(--text-size-m)">{item.subtitle}</Text>
                                </Show.Desktop>
                                <Show.Mobile>
                                    <Text>{item.subtitle_mobile}</Text>
                                </Show.Mobile>
                                {two_title && (
                                    <>
                                        <StyledHeader type="heading-3">
                                            {item.second_title}
                                        </StyledHeader>
                                        <Text>{item.second_subtitle}</Text>
                                    </>
                                )}
                            </Content>
                            <ImageWrapper margin_right={!is_even ? '0' : '12.6rem'}>
                                <QueryImage
                                    data={data[item.image_name]}
                                    alt={item.image_alt}
                                    width="100%"
                                />
                            </ImageWrapper>
                        </Row>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

ImageTextSwitching.propTypes = {
    P2P: PropTypes.array,
    reverse: PropTypes.bool,
    two_title: PropTypes.bool,
}

export default ImageTextSwitching
