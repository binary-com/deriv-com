import React from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { Localize } from 'components/localization'
import useHandleSignup from 'components/hooks/use-handle-signup'

const Section = styled.section`
    background-color: var(--color-black-3);
    padding: 3.2rem 0;
`

export const RoleBanner = () => {
    const handleSignup = useHandleSignup()

    return (
        <Section>
            <Flex direction="column" ai="center">
                <Header pb="0.8rem" align="center" as="h3" type="section-title" color="white">
                    <Localize translate_text="_t_New to trading?_t_" />
                </Header>
                <Text max_width="62rem" align="center" color="white" pb="3rem" pr="3rem" pl="3rem">
                    <Localize translate_text="_t_Use our demo account and learn how to trade by using risk-free virtual funds._t_" />
                </Text>
                <Button onClick={handleSignup} secondary>
                    <Localize translate_text="_t_Create free demo account_t_" />
                </Button>
            </Flex>
        </Section>
    )
}

export default RoleBanner
