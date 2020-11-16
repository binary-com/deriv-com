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
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import DotPattern from 'images/svg/dot-pattern.svg'

const RelativeContainer = styled(SectionContainer)`
    position: relative;
    overflow: hidden;
`

const TopLeftDot = styled.img`
    position: absolute;
    top: 4px;
    left: 0;
`
const BottomRightDot = styled.img`
    position: absolute;
    bottom: 16px;
    right: 0;
`
const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`

const Faq = () => {
    const parent_style = {
        marginBottom: '4rem',
    }
    const item_style = {
        padding: '4rem',
        background: 'var(--color-grey-4)',
    }
    const header_style = {
        padding: '1.6rem 4rem',
        border: 'none',
    }
    return (
        <RelativeContainer>
            <Header size="3.6rem" align="center">
                {localize('Browse our FAQ')}
            </Header>
            <Header as="h4" align="center" m="4rem 0" weight="500">
                {localize('Deriv Affiliate Programme')}
            </Header>
            <AccordionWrapper>
                <Accordion has_single_state>
                    <AccordionItem
                        header={localize('General')}
                        parent_style={parent_style}
                        header_style={header_style}
                        style={item_style}
                        plus
                    >
                        {<AffiliateGeneral />}
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Account management')}
                        parent_style={parent_style}
                        header_style={header_style}
                        style={item_style}
                        plus
                    >
                        {<AffiliateAccountManagement />}
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Referral tools')}
                        parent_style={parent_style}
                        header_style={header_style}
                        style={item_style}
                        plus
                    >
                        {<AffiliateReferralTools />}
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
            <Header as="h4" align="center" m="8rem 0 4rem 0 " weight="500">
                {localize('Deriv IB Programme')}
            </Header>
            <AccordionWrapper>
                <Accordion has_single_state>
                    <AccordionItem
                        header={localize('General')}
                        parent_style={parent_style}
                        header_style={header_style}
                        style={item_style}
                        plus
                    >
                        {<IBGeneral />}
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Account management')}
                        parent_style={parent_style}
                        header_style={header_style}
                        style={item_style}
                        plus
                    >
                        {<IBAccountManagement />}
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Referral tools')}
                        parent_style={parent_style}
                        header_style={header_style}
                        style={item_style}
                        plus
                    >
                        {<IBReferralTools />}
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
            <TopLeftDot src={DotPattern} />
            <BottomRightDot src={DotPattern} />
        </RelativeContainer>
    )
}

export default Faq
