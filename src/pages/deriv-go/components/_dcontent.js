import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    width: 100vw;
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

const ImageWrapper = styled.div`
    width: 486px;
    height: 310px;
    margin: 0 126px 0 0;
    object-fit: contain;
`

const Content = styled.div`
    width: 100%;
    max-width: 30.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: ${(props) => props.margin_right};

    ${Text} {
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        color: #333333;
    }
`

const Row = styled.div`
    flex-direction: ${(props) => props.flex_direction};
    width: 100%;
    display: flex;
    margin-top: 4rem;

    &:first-child {
        margin-top: 0;
    }
`

const StyledHeader = styled(Header)`
    line-height: 1.25;
    font-size: 3rem !important;
`

const query = graphql`
    query {
        derivgo_trade: file(relativePath: { eq: "derivgo/derivgo_trade.png" }) {
            ...fadeIn
        }
        derivgo_notification: file(relativePath: { eq: "derivgo/derivgo_notification.png" }) {
            ...fadeIn
        }
        derivgo_mobile: file(relativePath: { eq: "derivgo/derivgo_mobile.png" }) {
            ...fadeIn
        }
    }
`

const DContent = ({ items, reverse, two_title }) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <StyledContainer>
                {items.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (
                        <Row flex_direction={is_even ? 'row-reverse' : 'row'} key={index}>
                            <ImageWrapper margin_right={is_even ? '13rem' : '0'}>
                                <QueryImage
                                    data={data[item.image_name]}
                                    alt={item.image_alt}
                                    width="100%"
                                />
                            </ImageWrapper>
                            <Content margin_right={!is_even ? '13rem' : '0'}>
                                <StyledHeader type="section-title">{item.title}</StyledHeader>
                                <Text>{item.subtitle}</Text>
                                {two_title && (
                                    <>
                                        <StyledHeader type="page-title" mt="2.4rem">
                                            {item.second_title}
                                        </StyledHeader>
                                    </>
                                )}
                            </Content>
                        </Row>
                    )
                })}
            </StyledContainer>
        </StyledSection>
    )
}

DContent.propTypes = {
    items: PropTypes.array,
    reverse: PropTypes.bool,
    two_title: PropTypes.bool,
}

export default DContent
