import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

export type WhyUsType = {
    title: TString
    subtitle: TString
    image_name: string
    image_alt: TString
    only_row?: boolean
}[]

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

type contentType = {
    [T: string]: TString
}

const WhyUs = () => {
    const data = useStaticQuery(query)
    const { region } = useBuildVariant()

    const content_data: contentType = region === "eu"
        ? {
              payout_title: '_t_Zero charges with prompt monthly payouts_t_',
              payout_text:
                  '_t_Deriv Affiliate Programme is free. Enjoy reliable payouts by getting your affiliate commissions paid to your Deriv account._t_',
          }
        : {
              payout_title: '_t_Zero charges with prompt monthly and daily payouts_t_',
              payout_text:
                  '_t_All Deriv partnership programmes are free. Get your affiliate commissions paid to your method of choice every month and IB commissions paid to your Deriv MT5 account daily._t_',
          }

    const why_partner_with_us_items: WhyUsType = [
        {
            title: '_t_Multiple income opportunities and generous commissions_t_',
            subtitle:
                '_t_Start off as an affiliate and get ensuing access to our IB programme. Earn commission for as long as your referred clients keep trading._t_',
            image_name: 'multiple_income_opportunities',
            image_alt: '_t_DMT5 and Dtrader trading platform at Deriv_t_',
            only_row: true,
        },
        {
            title: content_data.payout_title,
            subtitle: content_data.payout_text,
            image_name: region === "eu" ? 'daily_ib_commission_eu' : 'daily_ib_commission',
            image_alt: '_t_Check your daily IB commission_t_',
        },
        {
            title: '_t_Optimise conversions with great user experience and creative support_t_',
            subtitle:
                '_t_We’ve designed a customer-centric and intuitive trading experience for Deriv that’s optimised to convert visitors into clients. We’ll also provide you with the tools and creative materials you need to drive traffic to Deriv._t_',
            image_name: 'marketing_material',
            image_alt: '_t_Marketing creative material_t_',
        },
    ]

    const why_partner_data = region === "eu"
        ? why_partner_with_us_items.filter((item) => !item.only_row)
        : why_partner_with_us_items

    return (
        <StyledContainer>
            <Container direction="column">
                <WhyUsHeader as="h2" size="4.8rem" align="center">
                    <Localize translate_text="_t_Why partner with us_t_" />
                </WhyUsHeader>
                {why_partner_data.map((item, index) => {
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
