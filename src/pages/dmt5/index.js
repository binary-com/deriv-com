import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Dmt5Logo from 'images/svg/dmt-5.svg'
import { Header, Text } from 'components/elements/typography.js'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import DHero from 'components/elements/dhero.js'

const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('DMT5')} />
            <DHero
                Logo={Dmt5Logo}
                title={localize('DMT5')}
                message={localize('The all-in-one FX and CFD trading platform')}
                img_name="mt5-platform.png"
                img_alt={localize('MT5 Platform')}
                button_text={localize('Try for free')}
                clickRedirect="signup modal"
            />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
