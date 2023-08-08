import React from 'react'
import PublicSignupBanner from './banner'
import SignupPublicForm from './form'
import { public_signup_container } from './with_banner.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const SignupPublic = () => {
    return (
        <Container.Fixed
            padding_block="25x"
            bgcolor="primary"
            md={{ padding_block: '30x', margin_block: '30x' }}
        >
            <Container.Fluid>
                <Flex.Box
                    direction={'col-reverse'}
                    className={public_signup_container}
                    bgcolor="brand"
                    align="stretch"
                    md={{
                        direction: 'row',
                    }}
                >
                    <SignupPublicForm />
                    <PublicSignupBanner />
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default SignupPublic
