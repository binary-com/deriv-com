import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import General from 'images/svg/business-general-tc.svg'
import Partners from 'images/svg/business-partners-tc.svg'
import PA from 'images/svg/business-pa-tc.svg'
import API from 'images/svg/business-api-tc.svg'
import PDF from 'images/svg/pdf-icon-black.svg'

const StyledContainer = styled(GridContainer)`
    margin-top: 8rem;
`

const IconWrapper = styled.div`
    margin-left: -2.4rem;

    @media ${device.tabletS} {
        margin-left: 0;
    }
`

const GridCol = styled(CssGridColumn)`
    width: 100%;

    ${Text} {
        margin-top: 1.6rem;

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
const Cta = styled.div`
    margin-top: 2rem;
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
        <IconWrapper>
            <Icon />
        </IconWrapper>
        <StyledHeader as="h4">{title}</StyledHeader>
        <Text lh="1.55">{content}</Text>
        <Cta>
            <PDF />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {link_title}
            </a>
        </Cta>
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
    <StyledContainer>
        <CssGrid
            columns="repeat(3, 1fr)"
            column_gap="15.4rem"
            row_gap="8rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="10rem"
        >
            <Col
                Icon={General}
                title={localize('General terms of use')}
                content={localize(
                    'Terms and ethical standards for all our affiliates, introducing brokers, API users, and payment agents',
                )}
                url="/tnc/business-partners-general-terms.pdf"
                link_title={localize('General terms of use')}
            />
            <Col
                Icon={Partners}
                title={localize('Affiliates & introducing brokers (IBs)')}
                content={localize('Additional terms for our affiliates and introducing brokers')}
                url="/tnc/business-partners-affiliates-and-introducing-brokers.pdf"
                link_title={localize('Affiliates & introducing brokers (IBs)')}
            />
            <Col
                Icon={PA}
                title={localize('Payment agents')}
                content={localize('Additional terms for our payment agents')}
                url="/tnc/business-partners-payment-agents.pdf"
                link_title={localize('Payment agents')}
            />
            <Col
                Icon={API}
                title={localize('API users')}
                content={localize('Additional terms for our API users')}
                url="/tnc/business-partners-api-user.pdf"
                link_title={localize('API users')}
            />
        </CssGrid>
    </StyledContainer>
)

export default IconGrid
