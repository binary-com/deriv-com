import React from 'react'
import { StyledGrid, StyledContainer, IconWrapper, GridCol, Cta } from './_terms-conditions-style'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { getLanguage } from 'common/utility'
import { TString } from 'types/generics'
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
import useBuildVariant from 'features/hooks/use-build-variant'

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
            <img src={PDF} alt={localize('_t_pdf icon black_t_')} />
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Localize translate_text={link_title} />
            </a>
        </Cta>
    </GridCol>
)

const PartnersGuidePdf = () => {
    const language = getLanguage()
    const supported_languages = ['fr', 'ru', 'es', 'vi', 'pt']
    const pdf_lang = supported_languages.includes(language) ? language : 'english'
    const url = `/tnc/business-partners-guide-${pdf_lang}.pdf`

    return (
        <Col
            Icon={IG}
            title="_t_Important guidelines_t_"
            content="_t_Dos and don'ts of promoting our products and services_t_"
            url={url}
            link_title="_t_Partners' guide_t_"
        />
    )
}

const BusinessGrid = () => {
    const general_terms_url = `/tnc/business-partners-general-terms-es.pdf`
    const affiliate_brokers_url = `/tnc/business-partners-affiliates-and-introducing-brokers-es.pdf`
    const payment_agents_url = `/tnc/business-partners-payment-agents-es.pdf`
    const api_user_url = `/tnc/business-partners-api-user-es.pdf`
    const bug_bounty_url = `/tnc/business-partners-bug-bounty-es.pdf`
    const { region } = useBuildVariant()
    const language = getLanguage()

    const general_terms_url_region = region === "row"
        ? '/tnc/business-partners-general-terms.pdf'
        : '/tnc/business-partners-general-terms-eu.pdf'
    const affiliate_brokers_url_region = region === "row"
        ? '/tnc/business-partners-affiliates-and-introducing-brokers-row.pdf'
        : '/tnc/business-partners-affiliates-and-introducing-brokers-eu.pdf'
    const api_user_url_region = region === "row"
        ? '/tnc/business-partners-api-user.pdf'
        : '/tnc/business-partners-api-user-eu.pdf'
    const bug_bounty_url_region = region === "row"
        ? '/tnc/business-partners-bug-bounty.pdf'
        : '/tnc/business-partners-bug-bounty-eu.pdf'

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
                    url={region === "row" && language === 'es' ? general_terms_url : general_terms_url_region}
                    link_title="_t_General terms of use_t_"
                />
                <Col
                    Icon={Partners}
                    title="_t_Affiliates & introducing brokers (IBs)_t_"
                    content="_t_Additional terms for our affiliates and introducing brokers_t_"
                    url={
                        region === "row" && language === 'es'
                            ? affiliate_brokers_url
                            : affiliate_brokers_url_region
                    }
                    link_title="_t_Affiliates & introducing brokers (IBs)_t_"
                />

                <PartnersGuidePdf />
                {region === "row" && (
                    <Col
                        Icon={PA}
                        title="_t_Payment agents_t_"
                        content="_t_Additional terms for our payment agents_t_"
                        url={
                            region === "row" && language === 'es'
                                ? payment_agents_url
                                : '/tnc/business-partners-payment-agents.pdf'
                        }
                        link_title="_t_Payment agents_t_"
                    />
                )}
                <Col
                    Icon={region === "row" ? APIROW : API}
                    title="_t_API users_t_"
                    content="_t_Additional terms for our API users_t_"
                    url={region === "row" && language === 'es' ? api_user_url : api_user_url_region}
                    link_title="_t_API users_t_"
                />
                <Col
                    Icon={region === "row" ? BugBountyRow : BugBounty}
                    title="_t_Bug Bounty Program_t_"
                    content="_t_Additional terms for participants in our Bug Bounty Program_t_"
                    url={region === "row" && language === 'es' ? bug_bounty_url : bug_bounty_url_region}
                    link_title="_t_Bug Bounty Program_t_"
                />
            </StyledGrid>
        </StyledContainer>
    )
}

export default BusinessGrid
