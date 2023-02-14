import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { getLanguage } from 'common/utility'
// Icons
import General from 'images/svg/terms/business-general-tc.svg'
import Partners from 'images/svg/terms/business-partners-tc.svg'
import PA from 'images/svg/terms/payment-agents.svg'
import API from 'images/svg/terms/business-api-tc.svg'
import APIROW from 'images/svg/terms/api-users-row.svg'
import BugBounty from 'images/svg/terms/bug-bounty.svg'
import BugBountyRow from 'images/svg/terms/bug-bounty-row.svg'
import IG from 'images/svg/terms/important-guidelines.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

type ColProps = {
    Icon: string
    content: TString
    title: TString
    link_title: TString
    url: string
}

const Col = ({ Icon, content, link_title, title, url }: ColProps) => (
    <GridCol>
        <IconWrapper>
            <img src={Icon} alt={localize(title)} />
        </IconWrapper>
        <Header as="h4" type="sub-section-title">
            <Localize translate_text={title} />
        </Header>
        <Text lh="1.55">
            <Localize translate_text={content} />
        </Text>
        <Cta>
            <img src={PDF} alt="pdf icon black" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Localize translate_text={link_title} />
            </a>
        </Cta>
    </GridCol>
)

const PartnersGuidePdf = () => {
    const language = getLanguage()
    const supported_languages = ['fr', 'id', 'pt', 'ru', 'es', 'vi']
    const pdf_lang = supported_languages.includes(language) ? language : 'english'
    const url = `/tnc/business-partners-guide-${pdf_lang}.pdf`
    return (
        <Col
            Icon={IG}
            title="_t_Important Guidelines_t_"
            content="_t_Do's and don’ts for partners when promoting our products and services_t_"
            url={url}
            link_title="_t_Partners Guide_t_"
        />
    )
}

const BusinessGrid = () => {
    const { is_row } = useRegion()
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
                <Col
                    Icon={General}
                    title="_t_General terms of use_t_"
                    content="_t_Terms and ethical standards for all our affiliates, introducing brokers, API users, and payment agents_t_"
                    url="/tnc/business-partners-general-terms.pdf"
                    link_title="_t_General terms of use_t_"
                />
                <Col
                    Icon={Partners}
                    title="_t_Affiliates & introducing brokers (IBs)_t_"
                    content="_t_Additional terms for our affiliates and introducing brokers_t_"
                    url={
                        is_row
                            ? '/tnc/business-partners-affiliates-and-introducing-brokers-row.pdf'
                            : '/tnc/business-partners-affiliates-and-introducing-brokers-eu.pdf'
                    }
                    link_title="_t_Affiliates & introducing brokers (IBs)_t_"
                />

                <PartnersGuidePdf />
                {is_row && (
                    <Col
                        Icon={PA}
                        title="_t_Payment agents_t_"
                        content="_t_Additional terms for our payment agents_t_"
                        url="/tnc/business-partners-payment-agents.pdf"
                        link_title="_t_Payment agents_t_"
                    />
                )}
                <Col
                    Icon={is_row ? APIROW : API}
                    title="_t_API users_t_"
                    content="_t_Additional terms for our API users_t_"
                    url="/tnc/business-partners-api-user.pdf"
                    link_title="_t_API users_t_"
                />
                <Col
                    Icon={is_row ? BugBountyRow : BugBounty}
                    title="_t_Bug Bounty Program_t_"
                    content="_t_Additional terms for participants in our Bug Bounty Program_t_"
                    url="/tnc/business-partners-bug-bounty.pdf"
                    link_title="_t_Bug Bounty Program_t_"
                />
            </StyledGrid>
        </StyledContainer>
    )
}

export default BusinessGrid
