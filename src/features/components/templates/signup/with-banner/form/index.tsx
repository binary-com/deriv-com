import React from 'react'
import PublicSignupSocial from '../social'
import { signup_public_form_container } from './form.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Link from 'features/components/atoms/link'

const SignupPublicForm = () => {
    return (
        <Flex.Box
            direction="col"
            justify="between"
            align="stretch"
            gap={'10x'}
            className={signup_public_form_container}
            bgcolor="primary"
            padding={'10x'}
        >
            <Flex.Box direction={'col'} grow={'1'} justify="around" align={'stretch'} as="form">
                <Typography.Heading size="xs" textcolor="black">
                    <Localize translate_text="_t_Join over 2.5 million traders worldwide_t_" />
                </Typography.Heading>
                <Typography.Paragraph textcolor="black">
                    <Localize translate_text="_t_Sign up for your demo account now._t_" />
                </Typography.Paragraph>
                <Flex.Box justify="between" align="center" gap={'10x'}>
                    <Flex.Item grow={'1'}>
                        <input type={'text'} placeholder="Email address" />
                    </Flex.Item>
                    <Flex.Item shrink="0">
                        <Button.Primary>Sign up</Button.Primary>
                    </Flex.Item>
                </Flex.Box>
                <Flex.Box justify="start" align="baseline" gap={'5x'}>
                    <Typography.Paragraph as="label">
                        <input type={'checkbox'} />
                        <Localize
                            translate_text="_t_I agree to the <0>terms and conditions.</0>_t_"
                            components={[
                                <Link
                                    textcolor="brand"
                                    key={0}
                                    url={{ type: 'company', url_name: 'tnd_clients' }}
                                />,
                            ]}
                        />
                    </Typography.Paragraph>
                </Flex.Box>
                <Typography.Paragraph>
                    <Localize translate_text="Or sign up with" />
                </Typography.Paragraph>
                <PublicSignupSocial />
            </Flex.Box>
        </Flex.Box>
    )
}

export default SignupPublicForm
