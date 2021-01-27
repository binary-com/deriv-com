import React from 'react'
import PropTypes from 'prop-types'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Show } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import General from 'images/svg/general-tc.svg'
import Trading from 'images/svg/trading-tc.svg'
import Funds from 'images/svg/funds-transfers-tc.svg'
import Security from 'images/svg/security-privacy-tc.svg'
import Risk from 'images/svg/risk-tc.svg'
import PDF from 'images/svg/pdf-icon-black.svg'
import BFX from 'images/svg/bfx-tc.svg'

const Col = ({ Icon, content, title, eu_links, non_eu_links }) => (
    <GridCol>
        <IconWrapper>
            <img src={Icon} />
        </IconWrapper>
        <Header as="h4" type="sub-section-title">
            {title}
        </Header>
        <Text lh="1.55">{content}</Text>

        {non_eu_links?.map((link, index) => (
            <Cta key={index}>
                <img src={PDF} alt="pdf icon black" />
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                </a>
            </Cta>
        ))}

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
Col.propTypes = {
    content: PropTypes.string,
    eu_links: PropTypes.array,
    Icon: PropTypes.elementType,
    non_eu_links: PropTypes.array,
    title: PropTypes.string,
}

const IconGrid = () => {
    const columns = [
        {
            Icon: General,
            title: localize('General terms of use'),
            content: localize('What you’re agreeing to when you sign up to use Deriv'),
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
            eu_links: [
                {
                    url: '/tnc/deriv-(europe)-limited.pdf',
                    title: localize('Deriv (Europe) Limited'),
                },
                {
                    url: '/tnc/deriv-(mx)-ltd.pdf',
                    title: localize('Deriv (MX) Ltd'),
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
