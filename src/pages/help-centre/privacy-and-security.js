import React from 'react'
// import styled from 'styled-components'
// import { Header, Text } from '../../components/elements/typography'
// import { getLanguage } from '../../common/utility'
import { Article } from './_article'
import { WithIntl } from 'components/localization'

const SafeguardChangePassword = () => <></>

const SafeguardWithdrawFunds = () => <></>

const PrivacyAndSecurityArticle = () => {
    return (
        <Article header="Account">
            <SafeguardChangePassword></SafeguardChangePassword>
            <SafeguardWithdrawFunds></SafeguardWithdrawFunds>
        </Article>
    )
}

export default WithIntl()(PrivacyAndSecurityArticle)
