import React from 'react'
import { IconGrid } from './_icon-grid'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { Text } from 'components/elements'
import { GridContainer, SectionContainer, SEO } from 'components/containers'
import { Localize, WithIntl } from 'components/localization'

const CheckEmail = () => {
    return (
        <Layout>
            <SEO
                title="_t_Check your email_t_"
                description="_t_Didn't receive an email from us? Here's what could've happened._t_"
                no_index
            />
            <SectionContainer>
                <GridContainer align="center">
                    <Text size="var(--text-size-sm)" color="var(--color-black-2)" align="start">
                        <Localize translate_text="_t_If you don't see an email from us within a few minutes, a few things could have happened:_t_" />
                    </Text>
                    <IconGrid />
                    <LinkButton id="dm-reenter-email-signup" secondary to="/signup/">
                        <Localize translate_text="_t_Re-enter your email and try again_t_" />
                    </LinkButton>
                </GridContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(CheckEmail)
