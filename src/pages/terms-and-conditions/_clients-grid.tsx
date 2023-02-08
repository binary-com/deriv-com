import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
// Icons
import General from 'images/svg/terms/general-tc.svg'
import Trading from 'images/svg/terms/trading-tc.svg'
import Funds from 'images/svg/terms/funds-transfers-tc.svg'
import Security from 'images/svg/terms/security-privacy-tc.svg'
import Risk from 'images/svg/terms/risk-tc.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'
import BFX from 'images/svg/terms/bfx-tc.svg'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

type ColProps = {
    Icon: string
    content: TString
    title: TString
    non_eu_links: Link[]
    eu_links?: Link[]
}

type Link = {
    url: string
    title: TString
}

const Col = ({ Icon, content, title, eu_links, non_eu_links }: ColProps) => {
    const { is_non_eu, is_eu } = useRegion()
    return (
        <GridCol>
            <IconWrapper>
                <img src={Icon} />
            </IconWrapper>
            <Header as="h4" type="sub-section-title">
                <Localize translate_text={title} />
            </Header>
            <Text lh="1.55">
                <Localize translate_text={content} />
            </Text>
            {is_non_eu &&
                non_eu_links?.map((link, index) => (
                    <Cta key={index}>
                        <img src={PDF} alt="pdf icon black" />
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <Localize translate_text={link.title} />
                        </a>
                    </Cta>
                ))}
            {is_eu &&
                eu_links?.map((link, index) => (
                    <Cta key={index}>
                        <img src={PDF} alt="pdf icon black" />
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <Localize translate_text={link.title} />
                        </a>
                    </Cta>
                ))}
        </GridCol>
    )
}

const columns: ColProps[] = [
    {
        Icon: General,
        title: '_t_General terms of use_t_',
        content: '_t_What you’re agreeing to when you sign up to use Deriv_t_',
        eu_links: [{ url: '/tnc/eu/general-terms.pdf', title: '_t_General terms of use_t_' }],
        non_eu_links: [{ url: '/tnc/general-terms.pdf', title: '_t_General terms of use_t_' }],
    },
    {
        Icon: Trading,
        title: '_t_Trading terms_t_',
        content: '_t_Rules for making trades on any Deriv trading platform_t_',
        eu_links: [{ url: '/tnc/eu/trading-terms.pdf', title: '_t_Trading terms_t_' }],
        non_eu_links: [{ url: '/tnc/trading-terms.pdf', title: '_t_Trading terms_t_' }],
    },
    {
        Icon: Funds,
        title: '_t_Funds & transfers_t_',
        content:
            '_t_Terms that govern keeping and transferring funds in Deriv and the bonuses you might get_t_',
        eu_links: [{ url: '/tnc/eu/funds-and-transfers.pdf', title: '_t_Funds & transfers_t_' }],
        non_eu_links: [{ url: '/tnc/funds-and-transfers.pdf', title: '_t_Funds & transfers_t_' }],
    },
    {
        Icon: Security,
        title: '_t_Security & privacy_t_',
        content: '_t_How we use and protect the information you give us_t_',
        eu_links: [{ url: '/tnc/eu/security-and-privacy.pdf', title: '_t_Security & privacy_t_' }],
        non_eu_links: [{ url: '/tnc/security-and-privacy.pdf', title: '_t_Security & privacy_t_' }],
    },
    {
        Icon: Risk,
        title: '_t_Risk disclosure_t_',
        content:
            '_t_A notice to help you understand the risks that might arise when you trade on Deriv_t_',
        eu_links: [{ url: '/tnc/risk-disclosure-eu.pdf', title: '_t_Risk disclosure_t_' }],
        non_eu_links: [{ url: '/tnc/risk-disclosure.pdf', title: '_t_Risk disclosure_t_' }],
    },
    {
        Icon: BFX,
        title: '_t_Additional terms_t_',
        content: '_t_Additional terms and restrictions for Deriv clients in certain countries_t_',
        eu_links: [
            {
                url: '/tnc/deriv-investments-(europe)-limited.pdf',
                title: '_t_Deriv Investments (Europe) Limited_t_',
            },
        ],
        non_eu_links: [
            { url: '/tnc/deriv-(fx)-ltd.pdf', title: '_t_Deriv (FX) Ltd_t_' },
            {
                url: '/tnc/deriv-investments-(europe)-limited.pdf',
                title: '_t_Deriv Investments (Europe) Limited_t_',
            },
            { url: '/tnc/deriv-(bvi)-ltd.pdf', title: '_t_Deriv (BVI) Ltd_t_' },
        ],
    },
]

const IconGrid = () => (
    <StyledContainer>
        <StyledGrid
            columns="repeat(3, 1fr)"
            column_gap="15.4rem"
            row_gap="8rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="10rem"
        >
            {columns.map((col, index) => {
                return <Col {...col} key={index} />
            })}
        </StyledGrid>
    </StyledContainer>
)

export default IconGrid
