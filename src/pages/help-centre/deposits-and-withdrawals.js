import React from 'react'
// import styled from 'styled-components'
// import { Header, Text } from '../../components/elements/typography'
// import { getLanguage } from '../../common/utility'
import { Article } from './_article'
import { WithIntl } from 'components/localization'

const MakingADeposit = () => <></>

const ExpiredVerificationLink = () => <></>

const WithdrawalProcessingTime = () => <></>

const HowDoIWithdrawFundsFromMyDerivAccount = () => <></>
const DepositsAndWithdrawalArticle = () => {
    return (
        <Article header="Deposits and withdrawals">
            <MakingADeposit></MakingADeposit>
            <ExpiredVerificationLink></ExpiredVerificationLink>
            <WithdrawalProcessingTime></WithdrawalProcessingTime>
            <HowDoIWithdrawFundsFromMyDerivAccount></HowDoIWithdrawFundsFromMyDerivAccount>
        </Article>
    )
}

export default WithIntl()(DepositsAndWithdrawalArticle)
