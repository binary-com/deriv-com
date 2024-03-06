import React from 'react'
import Layout from 'features/components/templates/layout'
import { check_email_container } from './check-email.module.scss'
import CheckEmailSteps from './check-email.steps'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import MainFooter from 'features/components/templates/footer'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { BuildVariantType } from 'features/types'

const CheckEmailContainer = ({region}: BuildVariantType) => {
    return (
        <Layout region={region}>
            <MainRowNavigation />
            <Flex.Box
                justify="center"
                align="center"
                container="fluid"
                direction="col"
                pt="40x"
                gap="20x"
                md={{
                    gap: '30x',
                }}
                className={check_email_container}
            >
                <Flex.Item align_self="start">
                    <Typography.Paragraph size="large">
                        <Localize translate_text="_t_If you don't see an email from us within a few minutes, a few things could have happened:_t_" />
                    </Typography.Paragraph>
                </Flex.Item>
                <CheckEmailSteps />
                <LinkButton.Primary
                    id="dm-reenter-email-signup"
                    url={{ type: 'internal', to: '/signup' }}
                >
                    <Localize translate_text="_t_Re-enter your email and try again_t_" />
                </LinkButton.Primary>
            </Flex.Box>
            <MainFooter />
        </Layout>
    )
}

export default CheckEmailContainer
