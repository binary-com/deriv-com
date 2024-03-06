import React from 'react'
import Layout from 'features/components/templates/layout'
import { form_style } from './ctrader-form.module.scss'
import SignUpCtraderForm from './ctrader-email-form'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import { ctrader_login, brand_name } from 'common/constants'
import { getLanguage } from 'common/utility'
import { BuildVariantType } from 'features/types'

const CtraderSignup = ({region}: BuildVariantType) => {
    const security_pdf_link = `/tnc${region === "eu" ? '/eu' : ''}/security-and-privacy.pdf`
    getLanguage()

    return (
        <Layout hide_layout_overlay region={region}>
            <CtraderWrapper>
                <Flex.Box className={form_style} direction="col" gap="8x">
                    <Typography.Heading size="small" pt="25x">
                        <Localize translate_text="_t_Let's start_t_" />
                    </Typography.Heading>
                    <Typography.Paragraph size="medium">
                        <Localize translate_text="_t_Enter your email address to begin_t_" />
                    </Typography.Paragraph>
                    <SignUpCtraderForm />
                    <Typography.Paragraph textcolor="secondary" size="xs">
                        <Localize
                            translate_text="_t_By pressing “Create demo account”, you confirm that you are 18 or older. You understand that we may use your email address to send you information about Deriv products and services as well as market news. You can always unsubscribe from these emails in your account settings. For more information, please take a look at Deriv’s <0>Security and privacy</0>._t_"
                            components={[
                                <Link
                                    textcolor="brand"
                                    key={0}
                                    url={{
                                        target: '_blank',
                                        type: 'non-company',
                                        href: security_pdf_link,
                                    }}
                                />,
                            ]}
                        />
                    </Typography.Paragraph>
                    <Typography.Paragraph textcolor="secondary" align="center">
                        <Localize
                            translate_text="_t_Already have an account? <0>Log in</0>_t_"
                            components={[
                                <Link
                                    textcolor="brand"
                                    key={0}
                                    url={{
                                        type: 'non-company',
                                        href: `${ctrader_login}&brand=${brand_name.toLowerCase()}&source=web&lang=${getLanguage()}`,
                                    }}
                                />,
                            ]}
                        />
                    </Typography.Paragraph>
                </Flex.Box>
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderSignup
