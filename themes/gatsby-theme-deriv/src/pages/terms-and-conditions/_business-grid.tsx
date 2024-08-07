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
    title: TString | string
    link_title: TString | string
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
    // const language = getLanguage()
    // const supported_languages = ['fr', 'ru', 'es', 'vi', 'pt']
    // const pdf_lang = supported_languages.includes(language) ? language : 'english'
    const url = `/tnc/business-partners-guide-english.pdf`
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
    
    const { region } = useBuildVariant();
    const language = getLanguage();
    const title = region === "row" 
    ? "_t_Affiliates & introduction brokers (IBs)_t_"
    : "Affiliates";
    const link_title = region === "row"
    ? "_t_Affiliates & introduction brokers (IBs)_t_"
    : "Affiliates";
    
    let general_terms_url_region, affiliate_brokers_url_region, api_user_url_region, bug_bounty_url_region;
    
    if (language === "es") {
        general_terms_url_region = '/tnc/business-partners-general-terms-es.pdf';
        affiliate_brokers_url_region = '/tnc/business-partners-affiliates-and-introducing-brokers-es.pdf';
        api_user_url_region = '/tnc/business-partners-api-user-es.pdf';
        bug_bounty_url_region = '/tnc/business-partners-bug-bounty-es.pdf';
    } else {
        general_terms_url_region = region === "row"
            ? '/tnc/business-partners-general-terms.pdf'
            : '/tnc/business-partners-general-terms-eu.pdf';
        affiliate_brokers_url_region = region === "row"
            ? '/tnc/business-partners-affiliates-and-introducing-brokers-row.pdf'
            : '/tnc/business-partners-affiliates-and-introducing-brokers-eu.pdf';
        api_user_url_region = region === "row"
            ? '/tnc/business-partners-api-user.pdf'
            : '/tnc/business-partners-api-user-eu.pdf';
        bug_bounty_url_region = region === "row"
            ? '/tnc/business-partners-bug-bounty.pdf'
            : '/tnc/business-partners-bug-bounty-eu.pdf';
    }
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
                        url={general_terms_url_region}
                        link_title="_t_General terms of use_t_"
                    />
                     <Col
                Icon={Partners}
                title={region === "row" ? "_t_Affiliates & introducing brokers (IBs)_t_" : "_t_Affiliates_t_"}
                content="_t_Additional terms for our affiliates and introducing brokers_t_"
                url={affiliate_brokers_url_region}
                link_title={link_title}
                />
    
                    <PartnersGuidePdf />
                    {region === "row" && (
                        <Col
                            Icon={PA}
                            title="_t_Payment agents_t_"
                            content="_t_Additional terms for our payment agents_t_"
                            url='/tnc/business-partners-payment-agents.pdf'
                            link_title="_t_Payment agents_t_"
                        />
                    )}
                    <Col
                        Icon={region === "row" ? APIROW : API}
                        title="_t_API users_t_"
                        content="_t_Additional terms for our API users_t_"
                        url={api_user_url_region}
                        link_title="_t_API users_t_"
                    />
                    <Col
                        Icon={region === "row" ? BugBountyRow : BugBounty}
                        title="_t_Bug Bounty Program_t_"
                        content="_t_Additional terms for participants in our Bug Bounty Program_t_"
                        url={bug_bounty_url_region}
                        link_title="_t_Bug Bounty Program_t_"
                    />
                </StyledGrid>
            </StyledContainer>
        )
    }
    
    export default BusinessGrid