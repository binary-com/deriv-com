import React from 'react'
import PropTypes from 'prop-types'
import Signup, { Appearances } from 'components/custom/signup'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const NewSignup = () => (
    <Layout is_static>
        <Signup appearance={Appearances.newSignup} bgColor="var(--color-grey-8)" />
    </Layout>
)

NewSignup.propTypes = {
    autofocus: PropTypes.bool,
    closeModal: PropTypes.func,
}

export default WithIntl()(NewSignup)
