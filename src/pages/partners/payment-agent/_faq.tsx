import React from 'react'
import styled from 'styled-components'
import { General, AccountManagement } from './_faq-data'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import useRegion from 'components/hooks/use-region'

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
    padding-bottom: 8rem;
`

const Faq = () => {
    const parent_style = {
        marginBottom: '4rem',
    }
    const item_style = {
        padding: '8px 24px 24px',
        background: 'var(--color-grey-4)',
    }
    const header_style = {
        padding: '1.6rem 4rem',
        borderRadius: '8px',
        border: 'none',
    }
    const { is_p2p_allowed_country } = useRegion()
    const [is_mobile] = useBrowserResize()

    return (
        <RelativeContainer padding={is_p2p_allowed_country ? '5rem 0' : '0 0 5rem'}>
            <Header
                as="h2"
                size="3.6rem"
                mb="3.2rem"
                mt={is_mobile ? '4rem' : '8rem'}
                align="center"
            >
                <Localize translate_text="_t_FAQs_t_" />
            </Header>
            <AccordionWrapper id="payment-agent-faq-list">
                <Accordion has_single_state>
                    <AccordionItem
                        header="_t_General_t_"
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                        class_name="general"
                    >
                        <General />
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Account management_t_"
                        style={item_style}
                        header_style={header_style}
                        plus
                        class_name="account-management"
                    >
                        <AccountManagement />
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
        </RelativeContainer>
    )
}

export default Faq
