import React from 'react'
import { IconGrid } from './_icon-grid'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { Text } from 'components/elements'
import { GridContainer, SectionContainer, SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const CheckEmail = () => {
    return (
        <Layout>
            <SEO
                title={localize('Check your email')}
                description={localize(
                    "Didn't receive an email from us? Here's what could've happened.",
                )}
                no_index
            />
            <SectionContainer>
                <GridContainer align="center">
                    <Text size="var(--text-size-sm)" color="var(--color-black-2)" align="left">
                        {localize(
                            "If you don't see an email from us within a few minutes, a few things could have happened:",
                        )}
                    </Text>
                    <IconGrid />
                    <LinkButton id="dm-reenter-email-signup" secondary to="/signup/">
                        {localize('Re-enter your email and try again')}
                    </LinkButton>
                </GridContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(CheckEmail)
