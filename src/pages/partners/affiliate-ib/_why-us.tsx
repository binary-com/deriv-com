import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

type TextType = {
    props: { translate_text: string }
}

export type WhyUsType = {
    title: string | React.ReactElement
    subtitle: string | React.ReactElement
    image_name: string
    image_alt: TextType | React.ReactElement
}[]

type WhyUsProps = {
    items: WhyUsType
}

const query = graphql`
    query {
        multiple_income_opportunities: file(
            relativePath: { eq: "affiliate/multiple-income-opportunities.png" }
        ) {
            ...fadeIn
        }
        daily_ib_commission: file(relativePath: { eq: "affiliate/daily-ib-commission.png" }) {
            ...fadeIn
        }
        marketing_material: file(relativePath: { eq: "affiliate/marketing-material.png" }) {
            ...fadeIn
        }
    }
`
const StyledContainer = styled(SectionContainer)`
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

    h1 {
        margin-bottom: 2rem;
    }
    section:last-child {
        padding-bottom: 0;
    }

    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 0 !important;
    @media ${device.tabletL} {
        text-align: left !important;
        font-size: 20px;
    }
`

const WhyUsHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const Row = styled(SectionContainer)`
    display: flex;
    flex-direction: ${(props) => props.flex_direction};
    justify-content: space-between;
    padding: 2rem 0;

    div {
        width: 100%;
        max-width: 58.8rem;
    }

    @media ${device.tabletL} {
        flex-direction: column-reverse;

        div {
            max-width: unset;
        }
        ${Text} {
            text-align: justify;
            font-size: 16px;
        }
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    @media ${device.tabletL} {
        ${Text} {
            text-align: unset;
        }
        ${Header} {
            text-align: unset;
        }
    }
`

const WhyUs = ({ items }: WhyUsProps) => {
    const data = useStaticQuery(query)

    return (
        <StyledContainer>
            <Container direction="column">
                <WhyUsHeader as="h2" size="4.8rem" align="center">
                    {localize('Why partner with us')}
                </WhyUsHeader>
                {items.map((item, index) => {
                    const is_even = index % 2
                    return (
                        <Row flex_direction={is_even ? 'row-reverse' : 'row'} key={index}>
                            <Content>
                                <StyledHeader as="h4" size="2.4rem">
                                    {item.title}
                                </StyledHeader>
                                <Text mt="0.8rem">{item.subtitle}</Text>
                            </Content>
                            <QueryImage
                                data={data[item.image_name]}
                                alt={item.image_alt.props.translate_text}
                                width="100%"
                            />
                        </Row>
                    )
                })}
            </Container>
        </StyledContainer>
    )
}

export default WhyUs
