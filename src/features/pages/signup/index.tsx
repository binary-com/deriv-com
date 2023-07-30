import React from 'react'
import { signup_wrapper } from './signup.module.scss'
import SignUpContent from './signup.content'
import SignUpFormContainer from './form-container'
import Layout from 'features/components/templates/layout'
import StaticNav from 'features/components/templates/navigation/static-nav'
import { PageDirection, SEO } from 'components/containers'
import Flex from 'features/components/atoms/flex-box'
import { TGatsbyHeadApi } from 'features/types'

const SignUp = () => {
    return (
        <Layout>
            <PageDirection />
            <StaticNav />
            <Flex.Box
                container="fluid"
                align="start"
                md={{
                    justify: 'around',
                    align: 'center',
                    gap: '16x',
                }}
                className={signup_wrapper}
                mt="30x"
            >
                <SignUpContent />
                <SignUpFormContainer />
            </Flex.Box>
        </Layout>
    )
}

export default SignUp

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_"
        description="_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_"
        pageContext={pageContext}
    />
)
