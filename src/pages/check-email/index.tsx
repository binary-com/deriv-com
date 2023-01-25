import React from 'react'
import { IconGrid } from './_icon-grid'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { Text } from 'components/elements'
import { GridContainer, SectionContainer, SEO } from 'components/containers'
import { Localize, localize, WithIntl } from 'components/localization'
import { TString } from 'types/generics'

const check_email_text: TString = '_t_Check your email_t_'
const receive_email_text: TString =
    "_t_Didn't receive an email from us? Here's what could've happened._t_"
const see_email_text: TString =
    "_t_If you don't see an email from us within a few minutes, a few things could have happened:_t_"
const reenter_email_text: TString = '_t_Re-enter your email and try again_t_'
const CheckEmail = () => {
    return (
        <Layout>
            <SEO
                title={localize(check_email_text)}
                description={localize(receive_email_text)}
                no_index
            />
            <SectionContainer>
                <GridContainer align="center">
                    <Text size="var(--text-size-sm)" color="var(--color-black-2)" align="start">
                        <Localize translate_text={see_email_text} />
                    </Text>
                    <IconGrid />
                    <LinkButton id="dm-reenter-email-signup" secondary to="/signup/">
                        <Localize translate_text={reenter_email_text} />
                    </LinkButton>
                </GridContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(CheckEmail)
