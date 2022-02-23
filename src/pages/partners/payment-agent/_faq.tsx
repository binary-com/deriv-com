import React from 'react'
import styled from 'styled-components'
import { General, AccountManagement } from './_faq-data'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import DotPattern from 'images/svg/partners/dot-pattern.svg'
import device from 'themes/device'

const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media ${device.tablet} {
        margin: 0 16px;
    }
`

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
            <Header as="h2" size="3.6rem" mb="4rem" align="center">
                {localize('FAQs')}
            </Header>
            <AccordionWrapper>
                <Accordion has_single_state>
                    <AccordionItem
                        header={localize('General')}
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                    >
                        {<General />}
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Account management')}
                        style={item_style}
                        header_style={header_style}
                        plus
                    >
                        {<AccountManagement />}
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
            <TopLeftDot src={DotPattern} />
            <BottomRightDot src={DotPattern} />
        </RelativeContainer>
    )
}

export default Faq
