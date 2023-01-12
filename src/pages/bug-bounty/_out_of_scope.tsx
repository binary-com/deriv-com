import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
// icons
import TickIcon from 'images/svg/bug-bounty/tick.svg'
import { TString } from 'types/generics'

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

type Tout_of_scope = {
    id: number
    text: TString
}[]

const out_of_scope_content: Tout_of_scope = [
    { id: 0, text: '_t_Clickjacking on pages with no sensitive actions_t_' },
    {
        id: 1,
        text: '_t_Cross-site request forgery (CSRF) on unauthenticated forms or forms with no sensitive actions_t_',
    },
    {
        id: 2,
        text: "_t_Attacks requiring man in the middle (MITM) or physical access to a user's device_t_",
    },
    {
        id: 3,
        text: '_t_Previously known vulnerable libraries without a working proof of concept (PoC)_t_',
    },
    {
        id: 4,
        text: '_t_Open redirect — unless an additional security impact can be demonstrated_t_',
    },
    {
        id: 5,
        text: '_t_Output from automated vulnerability scanners without a PoC to demonstrate a specific vulnerability_t_',
    },
]

const header_text: TString = '_t_Out of scope vulnerabilities_t_'
// Todo(mitra): can be merged with `scope` component into a generic component
const OutOfScope = () => (
    <SectionContainer background="grey-30">
        <Container direction="column">
            <Header tabletL={{ pb: '24px' }} as="h2" type="heading-2" align="center">
                <Localize translate_text={header_text} />
            </Header>
            <FlexContainer tabletL={{ mt: '0', fd: 'column' }} mt="4rem">
                {out_of_scope_content.map(({ id, text }) => (
                    <Card key={id}>
                        <Flex height="auto" ai="flex-start" jc="flex-start">
                            <IconWrap src={TickIcon} />
                            <div>
                                <Header as="p" type="paragraph-2" weight="normal">
                                    <Localize translate_text={text} />
                                </Header>
                            </div>
                        </Flex>
                    </Card>
                ))}
            </FlexContainer>
        </Container>
    </SectionContainer>
)

export default OutOfScope
