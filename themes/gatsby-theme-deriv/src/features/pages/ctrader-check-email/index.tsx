import React from 'react'
import { check_email_container } from '../check-email/check-email.module.scss'
import CheckEmailSteps from '../check-email/check-email.steps'
import Layout from 'features/components/templates/layout'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import { BuildVariantType } from 'features/types'

const CtraderCheckEmail = ({region}: BuildVariantType) => {
    return (
        <Layout hide_layout_overlay region={region}>
            <CtraderWrapper>
                <Flex.Box
                    justify="center"
                    align="center"
                    container="fluid"
                    direction="col"
                    mt="20x"
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
                        url={{ type: 'internal', to: '/ctrader-signup' }}
                    >
                        <Localize translate_text="_t_Re-enter your email and try again_t_" />
                    </LinkButton.Primary>
                </Flex.Box>
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderCheckEmail
