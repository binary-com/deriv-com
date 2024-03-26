import React, { useState } from 'react'
import Layout from 'features/components/templates/layout'
import { form_style, paragraph_style } from './ctrader-form.module.scss'
import CtraderCredentialsForm from './ctrader-credentials-form'
import { Localize } from 'components/localization'
import EmailIcon from 'images/svg/check-email/email.svg'
import { isBrowser } from 'common/utility'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'
import { useResidenceList } from 'features/hooks/use-residence-list'
import Image from 'features/components/atoms/image'
import { BuildVariantType } from 'features/types'

const CtraderSignupCredentials = ({region}: BuildVariantType) => {
    const [show_check_email, setShowCheckEmail] = useState(true)
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const email = url_params.get('email')?.replaceAll(' ', '+')
    const [residence_list] = useResidenceList()

    return (
        <Layout hide_layout_overlay region={region}>
            <CtraderWrapper>
                <Flex.Box
                    as="div"
                    justify="center"
                    align="center"
                    direction="col"
                    gap="7x"
                    className={form_style}
                >
                    <Typography.Heading as="h3" size="small" align="center">
                        <Localize translate_text="_t_Check your email_t_" />
                    </Typography.Heading>
                    <Image src={EmailIcon} alt="email" width="128px" height="128px" />
                    {show_check_email ? (
                        <>
                            <Typography.Paragraph className={paragraph_style} align="center">
                                <Localize
                                    translate_text="_t_Verification code was sent to {{email}}. If you have received the code please continue. If you didn't receive the code please make sure you didn't have any account already._t_"
                                    values={{ email }}
                                />
                            </Typography.Paragraph>
                            <Button.Primary onClick={() => setShowCheckEmail(false)}>
                                <Localize translate_text="_t_Continue_t_" />
                            </Button.Primary>
                        </>
                    ) : (
                        <CtraderCredentialsForm residence_list={residence_list} email={email} />
                    )}
                    <Link
                        url={{ type: 'internal', to: '/ctrader-check-email/' }}
                        textcolor="brand"
                        size="medium"
                    >
                        <Localize translate_text="_t_Didn't receive your email?_t_" />
                    </Link>
                </Flex.Box>
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderSignupCredentials
