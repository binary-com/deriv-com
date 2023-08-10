import React from 'react'
import { signup_success_wrapper, signup_success_description } from './signup-success.module.scss'
import { SEO } from 'components/containers'
import Layout from 'features/components/templates/layout'
import StaticNav from 'features/components/templates/navigation/static-nav'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import SignupImage from 'images/common/sign-up/response-email.png'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import { TGatsbyHead } from 'features/types'

type SignupProps = {
    email?: string
}

const SignUpSuccessContainer = ({ email }: SignupProps) => {
    return (
        <Layout>
            <StaticNav />
            <Flex.Box
                container="fluid"
                direction="col"
                justify="center"
                align="center"
                mt={'30x'}
                className={signup_success_wrapper}
                gap="8x"
            >
                <Typography.Heading size="small" align="center">
                    <Localize translate_text="_t_Check your email_t_" />
                </Typography.Heading>
                <Image src={SignupImage} width={128} height={128} />
                <Typography.Paragraph
                    size="large"
                    align="center"
                    className={signup_success_description}
                >
                    <Localize
                        translate_text="_t_We've sent a message to {{email}} with a link to activate your account._t_"
                        values={{ email }}
                    />
                </Typography.Paragraph>
                <Link
                    url={{ type: 'internal', to: '/check-email/' }}
                    textcolor="brand"
                    size="medium"
                >
                    <Localize translate_text="_t_Didn't receive your email?_t_" />
                </Link>
            </Flex.Box>
        </Layout>
    )
}

export default SignUpSuccessContainer

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_"
        description="_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_"
        pageContext={pageContext}
    />
)
