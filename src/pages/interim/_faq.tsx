import React from 'react'
import styled from 'styled-components'
import { NeedSignUp, BinaryRemoved, DerivSecure, OtherChanges } from './_faq-data'
import { SectionContainer, Container } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import DotPattern from 'images/svg/partners/dot-pattern.svg'
import device from 'themes/device'

const AccordionWrapper = styled.div`
    max-width: 79.2rem;
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
    top: 8rem;
    left: 0;
`
const BottomRightDot = styled.img`
    position: absolute;
    bottom: 16px;
    right: 0;
`

const Faq = () => {
    const parent_style = {
        marginBottom: '2.4rem',
    }
    const item_style = {
        padding: '2.4rem 4rem',
        background: 'var(--color-grey-4)',
    }
    const header_style = {
        padding: '1.6rem 4rem',
        border: 'none',
    }
    return (
        <RelativeContainer>
            <Container>
                <Header as="h3" type="section-title" size="3.6rem" mb="4rem" align="center">
                    {localize('Frequently asked questions')}
                </Header>
            </Container>

            <AccordionWrapper>
                <Accordion has_single_state>
                    <AccordionItem
                        header={localize('Do I need to sign up for a Deriv.com account?')}
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                    >
                        <NeedSignUp />
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Will Binary.com be removed?')}
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                    >
                        <BinaryRemoved />
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Is Deriv.com secure?')}
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                    >
                        <DerivSecure />
                    </AccordionItem>
                    <AccordionItem
                        header={localize('What other changes will I be seeing?')}
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                    >
                        <OtherChanges />
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
            <TopLeftDot src={DotPattern} />
            <BottomRightDot src={DotPattern} />
        </RelativeContainer>
    )
}

export default Faq
