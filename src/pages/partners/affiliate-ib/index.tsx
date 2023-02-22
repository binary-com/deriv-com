import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import { Helmet } from 'react-helmet'
import Hero from './_hero'
import { WhyUsType } from './_why-us'
import { faq_schema } from './_faq-schema'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { SectionContainer, Container, SEO } from 'components/containers'
import { localize, Localize, WithIntl } from 'components/localization'
import { affiliate_signup_url } from 'common/constants'
import device from 'themes/device'
import { MetaAttributesType } from 'types/page.types'
import { TString } from 'types/generics'

const WhyUs = Loadable(() => import('./_why-us'))
const WhoCanAplly = Loadable(() => import('./_who-can-apply'))
const DerivAffiliateProgramme = Loadable(() => import('./_deriv-affiliate-programme'))
const DerivIBProgramme = Loadable(() => import('./_deriv-ib-programme'))
const MinimumVolume = Loadable(() => import('./_minimum-volume'))
const MoreReason = Loadable(() => import('./_more-reason'))
const Faq = Loadable(() => import('./_faq'))
const PartnerCTA = Loadable(() => import('./_partner-cta'))

type ItemsType = {
    title: TString
    subtitle: TString
}[]

type StyledLinkButtonProps = {
    id?: string
}

const meta_attributes: MetaAttributesType = {
    og_title: localize('_t_Affiliate and IB programme | Deriv_t_'),
    og_description: localize(
        '_t_Join Deriv’s affiliate and IB programmes and get a chance to be a partner with a trusted online trading provider._t_',
    ),
}

const StyledHeader = styled(Header)`
    white-space: pre-line;
    width: 100%;
    max-width: 70rem;
    margin-bottom: 4rem;
    @media ${device.tabletS} {
        font-size: 40px;
        text-align: start;
    }
`

const StyledLinkButton = styled(LinkButton)<StyledLinkButtonProps>`
    border-radius: 4px;
    @media ${device.tabletS} {
        font-size: 14px;
        padding: 12px 10px;
        white-space: nowrap;
    }

    @media ${device.mobileL} {
        font-size: 12px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding-top: 40px;
        padding-bottom: 40px;
        padding-right: 16px;
        padding-left: 16px;
    }
`

const SubtitleHeader = styled(Header)`
    width: 1170px;
    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        font-size: 16px;
        text-align: justify;
    }
`
const SectionContainerWrapper = styled(SectionContainer)`
    padding: 4rem;
    @media ${device.tabletL} {
        padding: 0;
    }
`

const StyledContainer = styled(Container)`
    width: 100%;
    direction: ltr;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        margin: 20px 0;
    }
`

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
    @media ${device.tabletL} {
        padding: 15px;
        width: auto;
    }
    @media ${device.mobileS} {
        padding: 10px;
        width: auto;
    }
`

const StyledText = styled(Text)`
    padding-top: 8px;

    @media ${device.tabletL} {
        padding-top: 0;
        margin: 12px 0;
    }
`

const items: ItemsType = [
    { title: '_t_60K+_t_', subtitle: '_t_members_t_' },
    { title: '_t_$47M+_t_', subtitle: '_t_paid out since inception_t_' },
    { title: '_t_190+_t_', subtitle: '_t_countries_t_' },
    { title: '_t_1M+_t_', subtitle: '_t_clients_t_' },
]

const why_partner_with_us_items: WhyUsType = [
    {
        title: '_t_Multiple income opportunities and generous commissions_t_',
        subtitle:
            '_t_Start off as an affiliate and get ensuing access to our IB programme. Earn commission for as long as your referred clients keep trading._t_',
        image_name: 'multiple_income_opportunities',
        image_alt: '_t_DMT5 and Dtrader trading platform at Deriv_t_',
    },
    {
        title: '_t_Zero charges with prompt monthly and daily payouts_t_',
        subtitle:
            '_t_All Deriv partnership programmes are free. Get your affiliate commissions paid to your method of choice every month and IB commissions paid to your Deriv MT5 account daily._t_',
        image_name: 'daily_ib_commission',
        image_alt: '_t_Check your daily IB commission_t_',
    },
    {
        title: '_t_Optimise conversions with great user experience and creative support_t_',
        subtitle:
            '_t_We’ve designed a customer-centric and intuitive trading experience for Deriv that’s optimised to convert visitors into clients. We’ll also provide you with the tools and creative materials you need to drive traffic to Deriv._t_',
        image_name: 'marketing_material',
        image_alt: '_t_Marketing creative material_t_',
    },
]
const AffiliateIb = () => {
    return (
        <Layout type="partners" margin_top={10}>
            <SEO
                title={localize('_t_Affiliate partnership and IB programme | Deriv_t_')}
                description={localize(
                    '_t_Deriv’s affiliate and IB programmes offer exciting income opportunities. Earn commission from your referred clients’ trades on our platforms._t_',
                )}
                meta_attributes={meta_attributes}
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
            <Hero>
                <StyledHeader as="h1" color="white" align="center" lh="1.25" type="display-title">
                    <Localize translate_text="_t_Partner with a trusted online trading provider_t_" />
                </StyledHeader>
                <StyledLinkButton
                    id="dm-hero-affiliate-signup"
                    to={affiliate_signup_url}
                    external
                    target="_blank"
                    type="affiliate_sign_up"
                    secondary
                >
                    <Localize translate_text="_t_Sign up as our affiliate and IB_t_" />
                </StyledLinkButton>
            </Hero>
            <StyledSectionContainer padding="8rem 0 4rem">
                <Container direction="column">
                    <SubtitleHeader as="h4" type="sub-section-title" weight="normal" align="center">
                        <Localize translate_text="_t_Earn up to 45% lifetime commission with an online trading provider that enables anyone to trade on popular financial markets with the utmost convenience. Deriv Group Ltd — the owner of Binary.com and Deriv.com — has a proven track record of running successful referral programmes with prompt payouts._t_" />
                    </SubtitleHeader>
                    <SectionContainerWrapper>
                        <StyledContainer justify="space-around">
                            {items.map(({ title, subtitle }, index) => (
                                <NumberWrapper key={index}>
                                    <Header as="p" type="page-title" align="center">
                                        <Localize translate_text={title} />
                                    </Header>
                                    <StyledText align="center">
                                        <Localize translate_text={subtitle} />
                                    </StyledText>
                                </NumberWrapper>
                            ))}
                        </StyledContainer>
                    </SectionContainerWrapper>
                </Container>
            </StyledSectionContainer>
            <DerivAffiliateProgramme />
            <DerivIBProgramme />
            <MinimumVolume />
            <WhyUs items={why_partner_with_us_items} />
            <WhoCanAplly />
            <MoreReason />
            <Faq />
            <PartnerCTA />
        </Layout>
    )
}

export default WithIntl()(AffiliateIb)
