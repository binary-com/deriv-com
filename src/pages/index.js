import React, { Component } from 'react'

import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import LanguageSwitcher from '../components/localization/language-switcher'
import withIntl from '../components/localization/withIntl'
import { localize } from '../components/localization/config'
import Layout from '../components/layout/layout'
class Home extends Component {
    state = {
        is_modal_open: false,
    }

    render() {
        return (
            <Layout>
                <SEO title={localize('Home')} />
                <LanguageSwitcher />
                <div>
                    <Button type="secondary">
                        {localize('secondary button example')}
                    </Button>
                </div>
            </Layout>
        )
    }
}

export default withIntl()(Home)
