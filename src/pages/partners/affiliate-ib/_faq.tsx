import React from 'react'
import styled from 'styled-components'
import {
    AffiliateGeneral,
    AffiliateAccountManagement,
    AffiliateReferralTools,
    IBGeneral,
    IBAccountManagement,
    IBReferralTools,
} from './_faq-data'
import device from 'themes/device'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import DotPattern from 'images/svg/partners/dot-pattern.svg'

const FaqHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const FaqSubHeader = styled(Header)`
    @media ${device.tabletL} {
        margin-top: 24px;
    }
`

const RelativeContainer = styled(SectionContainer)`
    position: relative;
    overflow: hidden;

    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const TopLeftDot = styled.img`
    width: 730px;
    position: absolute;
    top: 4px;
    left: 0;

    @media ${device.laptopL} {
        width: 630px;
        left: -50px;
    }

    @media ${device.laptop} {
        left: -250px;
    }

    @media ${device.tabletL} {
        left: -500px;
    }
`
const BottomRightDot = styled.img`
    position: absolute;
    bottom: 16px;
    right: 0;
    height: 154px;

    @media ${device.laptopL} {
        right: 0;
    }

    @media ${device.laptop} {
        right: -200px;
    }

    @media ${device.tabletL} {
        right: -450px;
    }
`
const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media ${device.tablet} {
        margin: 0 16px;
    }
`
const parent_style = {
    marginBottom: '2.4rem',
}
const item_style = {
    padding: '4rem',
    background: 'rgba(133, 147, 164, 0.08)',
}
const header_style = {
    padding: '1.6rem 4rem',
    border: 'none',
    borderRadius: '8px',
    position: 'relative',
    boxShadow: '0 4px 8px 0 rgba(14, 14, 14, 0.1)',
}

type TFaqContent = {
    deriv_affiliate: {
        header: string
        component: React.ReactElement
        class_name: string
    }[]
    deriv_ib: { header: string; component: React.ReactElement; class_name: string }[]
}
const faq_content: TFaqContent = {
    deriv_affiliate: [
        {
            header: 'General',
            component: <AffiliateGeneral />,
            class_name: 'general-affiliate',
        },
        {
            header: 'Account management',
            component: <AffiliateAccountManagement />,
            class_name: 'account-management-affiliate',
        },
        {
            header: 'Referral tools',
            component: <AffiliateReferralTools />,
            class_name: 'referal-tools-affiliate',
        },
    ],
    deriv_ib: [
        { header: 'General', component: <IBGeneral />, class_name: 'general-ib' },
        {
            header: 'Account management',
            component: <IBAccountManagement />,
            class_name: 'account-management-ib',
        },
        {
            header: 'Referral tools',
            component: <IBReferralTools />,
            class_name: 'referal-tools-ib',
        },
    ],
}

const StyledAccordionWrapper = styled(AccordionWrapper)`
    p,
    h1,
    h5 {
        font-size: 16px !important;
    }
`
const Faq = () => {
    return (
        <RelativeContainer>
            <FaqHeader as="h2" size="4.8rem" align="center">
                {localize('Browse our FAQ')}
            </FaqHeader>
            <FaqSubHeader
                as="h4"
                type="sub-section-title"
                align="center"
                m="4rem 0"
                weight="normal"
            >
                {localize('Deriv Affiliate Programme')}
            </FaqSubHeader>
            <StyledAccordionWrapper id="faq-list">
                <Accordion has_single_state>
                    {faq_content.deriv_affiliate.map((item) => {
                        return (
                            <AccordionItem
                                key={item.class_name}
                                header={localize(`${item.header}`)}
                                parent_style={parent_style}
                                header_style={header_style}
                                style={item_style}
                                classname={item.class_name}
                                plus
                            >
                                {item.component}
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </StyledAccordionWrapper>
            <FaqSubHeader
                as="h4"
                type="sub-section-title"
                align="center"
                m="8rem 0 4rem 0 "
                weight="normal"
            >
                {localize('Deriv IB Programme')}
            </FaqSubHeader>
            <StyledAccordionWrapper>
                <Accordion has_single_state is_faq>
                    {faq_content.deriv_ib.map((item) => {
                        return (
                            <AccordionItem
                                key={item.class_name}
                                header={localize(`${item.header}`)}
                                parent_style={parent_style}
                                header_style={header_style}
                                style={item_style}
                                classname={item.class_name}
                                plus
                            >
                                {item.component}
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </StyledAccordionWrapper>
            <TopLeftDot src={DotPattern} />
            <BottomRightDot src={DotPattern} />
        </RelativeContainer>
    )
}

export default Faq
