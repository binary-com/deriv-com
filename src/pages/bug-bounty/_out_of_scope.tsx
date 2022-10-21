import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// icons
import TickIcon from 'images/svg/bug-bounty/tick.svg'

const Card = styled.div`
    background-color: var(--color-white);
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.1);
    border-radius: 8px;
    padding: 2.4rem;
    display: flex;
    flex: 1 0 30%;
    align-items: center;
    @media ${device.tabletL} {
        padding: 16px 24px;
    }
`
const FlexContainer = styled(Flex)`
    flex-wrap: wrap;
    gap: 2.1rem;
`

const IconWrap = styled.img`
    margin-right: 0.8rem;
    margin-top: 0.5rem;
`

const out_of_scope_content = [
    <Localize key={0} translate_text="Clickjacking on pages with no sensitive actions" />,
    <Localize
        key={1}
        translate_text="Cross-site request forgery (CSRF) on unauthenticated forms or forms with no sensitive actions"
    />,
    <Localize
        key={2}
        translate_text="Attacks requiring man in the middle (MITM) or physical access to a user's device"
    />,
    <Localize
        key={3}
        translate_text="Previously known vulnerable libraries without a working proof of concept (PoC)"
    />,
    <Localize
        key={4}
        translate_text="Open redirect — unless an additional security impact can be demonstrated"
    />,
    <Localize
        key={5}
        translate_text="Output from automated vulnerability scanners without a PoC to demonstrate a specific vulnerability"
    />,
]

// Todo(mitra): can be merged with `scope` component into a generic component
const OutOfScope = () => {
    return (
        <SectionContainer background="grey-30">
            <Container direction="column">
                <Header tabletL={{ pb: '24px' }} as="h2" type="heading-2" align="center">
                    {localize('Out of scope vulnerabilities')}
                </Header>
                <FlexContainer tabletL={{ mt: '0', fd: 'column' }} mt="4rem">
                    {out_of_scope_content.map((item, index) => {
                        return (
                            <Card key={index}>
                                <Flex height="auto" ai="flex-start" jc="flex-start">
                                    <IconWrap src={TickIcon} />
                                    <div>
                                        <Header as="p" type="paragraph-2" weight="normal">
                                            {item}
                                        </Header>
                                    </div>
                                </Flex>
                            </Card>
                        )
                    })}
                </FlexContainer>
            </Container>
        </SectionContainer>
    )
}

export default OutOfScope
