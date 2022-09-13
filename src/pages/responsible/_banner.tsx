import React from 'react'
import PropTypes from 'prop-types'
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

const Banner = ({ header, p1, button_text }) => {
    const handleSignup = useHandleSignup()

    return (
        <Section>
            <Flex direction="column" ai="center">
                <Header pb="0.8rem" align="center" as="h3" type="section-title" color="white">
                    {header}
                </Header>
                <Text max_width="62rem" align="center" color="white" pb="3rem" pr="3rem" pl="3rem">
                    {p1}
                </Text>
                <Button onClick={handleSignup} secondary>
                    {button_text}
                </Button>
            </Flex>
        </Section>
    )
}

export const RoleBanner = () => (
    <Banner
        header={<Localize translate_text="New to trading?" />}
        p1={
            <Localize translate_text="Use our demo account and learn how to trade by using risk-free virtual funds." />
        }
        button_text={<Localize translate_text="Create free demo account" />}
    />
)

Banner.propTypes = {
    button_text: PropTypes.object,
    header: PropTypes.object,
    p1: PropTypes.object,
}

export default RoleBanner
