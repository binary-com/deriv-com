import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import General from 'images/svg/terms/business-general-tc.svg'
import Partners from 'images/svg/terms/business-partners-tc.svg'
import PA from 'images/svg/terms/business-pa-tc.svg'
import API from 'images/svg/terms/business-api-tc.svg'
import BugBounty from 'images/svg/terms/bug-bounty.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'

type ColProps = {
    Icon: string
    content: string
    title: string
    link_title: string
    url: string
}

const Col = ({ Icon, content, link_title, title, url }: ColProps) => (
    <GridCol>
        <IconWrapper>
            <img src={Icon} />
        </IconWrapper>
        <Header as="h4" type="sub-section-title">
            {title}
        </Header>
        <Text lh="1.55">{content}</Text>
        <Cta>
            <img src={PDF} alt="pdf icon black" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {link_title}
            </a>
        </Cta>
    </GridCol>
)

const BusinessGrid = () => (
    <StyledContainer>
        <StyledGrid
            columns="repeat(3, 1fr)"
            column_gap="15.4rem"
            row_gap="8rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="10rem"
        >
            <Col
                Icon={General}
                title={localize('_t_General terms of use_t_')}
                content={localize(
                    '_t_Terms and ethical standards for all our affiliates, introducing brokers, API users, and payment agents_t_',
                )}
                url="/tnc/business-partners-general-terms.pdf"
                link_title={localize('_t_General terms of use_t_')}
            />
            <Col
                Icon={Partners}
                title={localize('_t_Affiliates & introducing brokers (IBs)_t_')}
                content={localize('_t_Additional terms for our affiliates and introducing brokers_t_')}
                url="/tnc/business-partners-affiliates-and-introducing-brokers.pdf"
                link_title={localize('_t_Affiliates & introducing brokers (IBs)_t_')}
            />
            <Col
                Icon={PA}
                title={localize('_t_Payment agents_t_')}
                content={localize('_t_Additional terms for our payment agents_t_')}
                url="/tnc/business-partners-payment-agents.pdf"
                link_title={localize('_t_Payment agents_t_')}
            />
            <Col
                Icon={API}
                title={localize('_t_API users_t_')}
                content={localize('_t_Additional terms for our API users_t_')}
                url="/tnc/business-partners-api-user.pdf"
                link_title={localize('_t_API users_t_')}
            />
            <Col
                Icon={BugBounty}
                title={localize('_t_Bug Bounty Program_t_')}
                content={localize('_t_Additional terms for participants in our Bug Bounty Program_t_')}
                url="/tnc/business-partners-bug-bounty.pdf"
                link_title={localize('_t_Bug Bounty Program_t_')}
            />
        </StyledGrid>
    </StyledContainer>
)

export default BusinessGrid
