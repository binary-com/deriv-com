import React, { Component } from 'react'

import Image from '../components/elements/image'
import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Test from '../components/test'
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
                <SEO title="Home" />
                <LanguageSwitcher />
                <Test />
                <Image
                    width="300px"
                    img_name="practice.png"
                    alt="gatsby astronaut"
                />
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
