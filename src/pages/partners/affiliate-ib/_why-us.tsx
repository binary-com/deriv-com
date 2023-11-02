import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'

export type WhyUsType = {
    title: TString
    subtitle: TString
    image_name: string
    image_alt: TString
    only_row?: boolean
}[]

type WhyUsProps = {
    items: WhyUsType
}

type RowProps = {
    flex_direction?: string
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
        daily_ib_commission_eu: file(relativePath: { eq: "affiliate/daily-ib-commission-eu.png" }) {
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

const Row = styled(SectionContainer)<RowProps>`
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
                    <Localize translate_text="_t_Why partner with us_t_" />
                </WhyUsHeader>
                {items.map((item, index) => {
                    const is_even = index % 2
                    return (
                        <Row flex_direction={is_even ? 'row-reverse' : 'row'} key={index}>
                            <Content>
                                <StyledHeader as="h3" size="2.4rem">
                                    <Localize translate_text={item.title} />
                                </StyledHeader>
                                <Text mt="0.8rem">
                                    <Localize translate_text={item.subtitle} />
                                </Text>
                            </Content>
                            <QueryImage
                                data={data[item.image_name]}
                                alt={localize(item.image_alt)}
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
