import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import General from 'images/svg/general-tc.svg'
import Trading from 'images/svg/trading-tc.svg'
import Funds from 'images/svg/funds-transfers-tc.svg'
import Security from 'images/svg/security-privacy-tc.svg'
import Business from 'images/svg/business-terms-tc.svg'
import Risk from 'images/svg/risk-tc.svg'
import PDF from 'images/svg/pdf-icon-black.svg'
import BFX from 'images/svg/bfx-tc.svg'

const GridCol = styled(CssGridColumn)`
    width: 100%;

    ${Text} {
        margin-top: 1.8rem;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
        @media ${device.tabletS} {
            text-align: center;
        }
    }
    @media ${device.tabletS} {
        text-align: center;
    }

    * {
        max-width: 100%;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        text-align: center;
    }
`
const Container = styled.div`
    padding: 0 2rem;
`
const Cta = styled.div`
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: 3.2rem 1fr;
    grid-column-gap: 0.8rem;
    align-items: center;

    & a {
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: bold;
        color: var(--color-red);
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
    @media ${device.tabletS} {
        display: inline-grid;
    }
`
const Col = ({ Icon, content, link_title, title, url }) => (
    <GridCol>
        <Icon />
        <Container>
            <StyledHeader as="h4">{title}</StyledHeader>
            <Text lh="1.55">{content}</Text>
            <Cta>
                <PDF />
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {link_title}
                </a>
            </Cta>
        </Container>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.elementType,
    link_title: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}

const IconGrid = () => (
    <GridContainer>
        <CssGrid
            columns="repeat(3, 1fr)"
            column_gap="13rem"
            row_gap="10rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="10rem"
        >
            <Col
                Icon={General}
                title={localize('General terms')}
                content={localize('The main agreement you’re making with us to use Deriv')}
                url="/general_terms_deriv_tnc.pdf"
                link_title={localize('General terms')}
            />
            <Col
                Icon={Trading}
                title={localize('Trading terms')}
                content={localize(
                    'Our platforms and the transactions you can make on them plus other important details about trading on Deriv',
                )}
                url="/trading_deriv_tnc.pdf"
                link_title={localize('Trading terms')}
            />
            <Col
                Icon={Funds}
                title={localize('Funds and transfers ')}
                content={localize(
                    'How we keep your funds, transfers between your accounts, and our bonuses to you',
                )}
                url="/funds_and_transfers_deriv_tnc.pdf"
                link_title={localize('Funds and transfers')}
            />
            <Col
                Icon={Security}
                title={localize('Security and privacy')}
                content={localize('What we do and don’t do with your data and how we use cookies')}
                url="/security_and_privacy_deriv_tnc.pdf"
                link_title={localize('Security and privacy')}
            />
            <Col
                Icon={Business}
                title={localize('Business terms')}
                content={localize(
                    'Our agreement with affiliates, introducing brokers, developers who use our API, and payment agents',
                )}
                url="/business_deriv_tnc.pdf"
                link_title={localize('Business terms')}
            />
            <Col
                Icon={Risk}
                title={localize('Risk disclosure')}
                content={localize(
                    'Risks associated with trading that you need to be familiar with',
                )}
                url="/risk_disclosure_deriv_tnc.pdf"
                link_title={localize('Risk disclosure')}
            />
            <Col
                Icon={BFX}
                title={localize('Supplementary terms')}
                content={localize('Additional terms related to some of our companies')}
                url="/bfx_deriv_tnc.pdf"
                link_title={localize('Supplementary terms')}
            />
        </CssGrid>
    </GridContainer>
)

export default IconGrid
