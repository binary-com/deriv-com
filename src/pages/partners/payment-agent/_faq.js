import React from 'react'
import styled from 'styled-components'
import { General, AccountManagement } from './_faq-data'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'

const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    margin: 0 auto;

    div:first-child {
        box-shadow: unset;
    }
`

const Faq = () => {
    const parent_style = {
        padding: '2.8rem 0 0',
    }
    const item_style = {
        borderBottom: '1px solid var(--color-grey-2)',
        display: 'flex',
        justifyContent: 'flex-end',
    }
    return (
        <SectionContainer>
            <Header font_size="3.6rem" align="center">
                {localize('Browse our FAQ')}
            </Header>
            <Header as="h4" align="center" margin="4rem 0 6.4rem 0 " weight="500">
                {localize('Deriv Payment Agent Programme')}
            </Header>
            <AccordionWrapper>
                <Accordion>
                    <AccordionItem
                        header={localize('General')}
                        parent_style={parent_style}
                        style={item_style}
                    >
                        {General}
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Account management')}
                        parent_style={parent_style}
                        style={item_style}
                    >
                        {AccountManagement}
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
        </SectionContainer>
    )
}

export default Faq
