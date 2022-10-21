import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import General from 'images/svg/terms/general-tc.svg'
import Trading from 'images/svg/terms/trading-tc.svg'
import Funds from 'images/svg/terms/funds-transfers-tc.svg'
import Security from 'images/svg/terms/security-privacy-tc.svg'
import Risk from 'images/svg/terms/risk-tc.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'
import BFX from 'images/svg/terms/bfx-tc.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

type ColProps = {
    Icon: string
    content: string
    title: string
    non_eu_links: Link[]
    eu_links?: Link[]
}

type Link = {
    url: string
    title: string
}

const Col = ({ Icon, content, title, eu_links, non_eu_links }: ColProps) => {
    const { is_non_eu, is_eu } = useCountryRule()
    return (
        <GridCol>
            <IconWrapper>
                <img src={Icon} />
            </IconWrapper>
            <Header as="h4" type="sub-section-title">
                {title}
            </Header>
            <Text lh="1.55">{content}</Text>
            {is_non_eu &&
                non_eu_links?.map((link, index) => (
                    <Cta key={index}>
                        <img src={PDF} alt="pdf icon black" />
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </a>
                    </Cta>
                ))}
            {is_eu &&
                eu_links?.map((link, index) => (
                    <Cta key={index}>
                        <img src={PDF} alt="pdf icon black" />
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </a>
                    </Cta>
                ))}
        </GridCol>
    )
}

const IconGrid = () => {
    const columns = [
        {
            Icon: General,
            title: localize('General terms of use'),
            content: localize('What you’re agreeing to when you sign up to use Deriv'),
            eu_links: [
                {
                    url: '/tnc/eu/general-terms.pdf',
                    title: localize('General terms of use'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/general-terms.pdf',
                    title: localize('General terms of use'),
                },
            ],
        },
        {
            Icon: Trading,
            title: localize('Trading terms'),
            content: localize('Rules for making trades on any Deriv trading platform'),
            eu_links: [
                {
                    url: '/tnc/trading-terms.pdf',
                    title: localize('Trading terms'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/trading-terms.pdf',
                    title: localize('Trading terms'),
                },
            ],
        },
        {
            Icon: Funds,
            title: localize('Funds & transfers'),
            content: localize(
                'Terms that govern keeping and transferring funds in Deriv and the bonuses you might get',
            ),
            eu_links: [
                {
                    url: '/tnc/eu/funds-and-transfers.pdf',
                    title: localize('Funds & transfers'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/funds-and-transfers.pdf',
                    title: localize('Funds & transfers'),
                },
            ],
        },
        {
            Icon: Security,
            title: localize('Security & privacy'),
            content: localize('How we use and protect the information you give us'),

            eu_links: [
                {
                    url: '/tnc/security-and-privacy.pdf',
                    title: localize('Security & privacy'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/security-and-privacy.pdf',
                    title: localize('Security & privacy'),
                },
            ],
        },
        {
            Icon: Risk,
            title: localize('Risk disclosure'),
            content: localize(
                'A notice to help you understand the risks that might arise when you trade on Deriv',
            ),
            eu_links: [
                {
                    url: '/tnc/risk-disclosure-eu.pdf',
                    title: localize('Risk disclosure'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/risk-disclosure.pdf',
                    title: localize('Risk disclosure'),
                },
            ],
        },
        {
            Icon: BFX,
            title: localize('Additional terms'),
            content: localize(
                'Additional terms and restrictions for Deriv clients in certain countries',
            ),

            eu_links: [
                {
                    url: '/tnc/deriv-investments-(europe)-limited.pdf',
                    title: localize('Deriv Investments (Europe) Limited'),
                },
            ],

            non_eu_links: [
                {
                    url: '/tnc/deriv-(fx)-ltd.pdf',
                    title: localize('Deriv (FX) Ltd'),
                },
                {
                    url: '/tnc/deriv-investments-(europe)-limited.pdf',
                    title: localize('Deriv Investments (Europe) Limited'),
                },
                {
                    url: '/tnc/deriv-(bvi)-ltd.pdf',
                    title: localize('Deriv (BVI) Ltd'),
                },
            ],
        },
    ]

    return (
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
}

export default IconGrid
