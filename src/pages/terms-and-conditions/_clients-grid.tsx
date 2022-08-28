import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Show } from 'components/containers'
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

const Col = ({ Icon, content, title, eu_links, non_eu_links }: ColProps) => (
    <GridCol>
        <IconWrapper>
            <img src={Icon} />
        </IconWrapper>
        <Header as="h4" type="sub-section-title">
            {title}
        </Header>
        <Text lh="1.55">{content}</Text>
        <Show.NonEU>
            {non_eu_links?.map((link, index) => (
                <Cta key={index}>
                    <img src={PDF} alt="pdf icon black" />
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                    </a>
                </Cta>
            ))}
        </Show.NonEU>
        <Show.Eu>
            {eu_links?.map((link, index) => (
                <Cta key={index}>
                    <img src={PDF} alt="pdf icon black" />
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                    </a>
                </Cta>
            ))}
        </Show.Eu>
    </GridCol>
)

const IconGrid = () => {
    const columns = [
        {
            Icon: General,
            title: localize('_t_General terms of use_t_'),
            content: localize('_t_What you’re agreeing to when you sign up to use Deriv_t_'),
            eu_links: [
                {
                    url: '/tnc/general-terms.pdf',
                    title: localize('_t_General terms of use_t_'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/general-terms.pdf',
                    title: localize('_t_General terms of use_t_'),
                },
            ],
        },
        {
            Icon: Trading,
            title: localize('_t_Trading terms_t_'),
            content: localize('_t_Rules for making trades on any Deriv trading platform_t_'),
            eu_links: [
                {
                    url: '/tnc/trading-terms.pdf',
                    title: localize('_t_Trading terms_t_'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/trading-terms.pdf',
                    title: localize('_t_Trading terms_t_'),
                },
            ],
        },
        {
            Icon: Funds,
            title: localize('_t_Funds & transfers_t_'),
            content: localize(
                '_t_Terms that govern keeping and transferring funds in Deriv and the bonuses you might get_t_',
            ),
            eu_links: [
                {
                    url: '/tnc/funds-and-transfers.pdf',
                    title: localize('_t_Funds & transfers_t_'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/funds-and-transfers.pdf',
                    title: localize('_t_Funds & transfers_t_'),
                },
            ],
        },
        {
            Icon: Security,
            title: localize('_t_Security & privacy_t_'),
            content: localize('_t_How we use and protect the information you give us_t_'),

            eu_links: [
                {
                    url: '/tnc/security-and-privacy.pdf',
                    title: localize('_t_Security & privacy_t_'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/security-and-privacy.pdf',
                    title: localize('_t_Security & privacy_t_'),
                },
            ],
        },
        {
            Icon: Risk,
            title: localize('_t_Risk disclosure_t_'),
            content: localize(
                '_t_A notice to help you understand the risks that might arise when you trade on Deriv_t_',
            ),
            eu_links: [
                {
                    url: '/tnc/risk-disclosure.pdf',
                    title: localize('_t_Risk disclosure_t_'),
                },
            ],
            non_eu_links: [
                {
                    url: '/tnc/risk-disclosure.pdf',
                    title: localize('_t_Risk disclosure_t_'),
                },
            ],
        },
        {
            Icon: BFX,
            title: localize('_t_Additional terms_t_'),
            content: localize(
                '_t_Additional terms and restrictions for Deriv clients in certain countries_t_',
            ),

            eu_links: [
                {
                    url: '/tnc/deriv-investments-(europe)-limited.pdf',
                    title: localize('_t_Deriv Investments (Europe) Limited_t_'),
                },
            ],

            non_eu_links: [
                {
                    url: '/tnc/deriv-(fx)-ltd.pdf',
                    title: localize('_t_Deriv (FX) Ltd_t_'),
                },
                {
                    url: '/tnc/deriv-investments-(europe)-limited.pdf',
                    title: localize('_t_Deriv Investments (Europe) Limited_t_'),
                },
                {
                    url: '/tnc/deriv-(bvi)-ltd.pdf',
                    title: localize('_t_Deriv (BVI) Ltd_t_'),
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
