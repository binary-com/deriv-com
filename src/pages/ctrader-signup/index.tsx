import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import useRegion from 'components/hooks/use-region'
import useBreakpoints from 'components/hooks/use-breakpoints'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import SignUpCtraderForm from 'components/custom/_signup-ctrader-form'

const SignUpFormContainer = () => {
    const { is_eu } = useRegion()

    const { is_mobile_or_tablet } = useBreakpoints()

    const security_pdf_link = `/tnc${is_eu ? '/eu' : ''}/security-and-privacy.pdf`

    return (
        <CtraderWrapper>
            <Flex.Box
                basis="full"
                padding="5x"
                radius="4x"
                direction="col"
                gap="8x"
                md={{
                    basis: '6-12',
                    padding: '20x',
                }}
            >
                <Typography.Heading size={is_mobile_or_tablet ? 'small' : 'xs'}>
                    <Localize translate_text="_t_Sign up_t_" />
                </Typography.Heading>
                <Typography.Paragraph size={is_mobile_or_tablet ? 'large' : 'medium'}>
                    <Localize translate_text="_t_Enter your email address to begin_t_" />
                </Typography.Paragraph>
                <SignUpCtraderForm />
                <Typography.Paragraph
                    textcolor="secondary"
                    size={is_mobile_or_tablet ? 'small' : 'xs'}
                >
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
            </Flex.Box>
        </CtraderWrapper>
    )
}

export default SignUpFormContainer
