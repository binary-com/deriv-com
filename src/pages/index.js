import React, { Component } from 'react'

import Image from '../components/elements/image'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'
import Button from '../components/form/button'
import Test from '../components/test'
import LanguageSwitcher from '../components/language-switcher'
import withIntl from '../components/withIntl'

class Home extends Component {
    state = {
        is_modal_open: false,
    }

    render() {
        return (
            <>
                <SEO title="Home" />
                <LanguageSwitcher />
                <Test />
                <Localize />
                <Image
                    width="300px"
                    img_name="practice.png"
                    alt="gatsby astronaut"
                />
                <div>
                    <Button type="secondary">secondary button example</Button>
                </div>
            </>
        )
    }
}

export default withIntl()(Home)
