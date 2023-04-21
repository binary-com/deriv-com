import React from 'react'
import PublicSignupBanner from './banner'
import SignupPublicForm from './form'
import { public_signup_container } from './with_banner.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const SignupPublic = () => {
    return (
        <Container.Fixed padding_block="10x" md={{ padding_block: '40x' }}>
            <Flex.Box
                direction={'col-reverse'}
                container="fluid"
                className={public_signup_container}
                bgcolor="brand"
                justify="between"
                align="stretch"
                margin_block={'40x'}
                md={{
                    direction: 'row',
                    gap: '40x',
                }}
            >
                <SignupPublicForm />
                <PublicSignupBanner />
            </Flex.Box>
        </Container.Fixed>
    )
}

export default SignupPublic
