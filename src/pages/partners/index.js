import React from 'react'
import { Header } from 'components/elements/typography'
import Layout from 'components/layout/layout'
import { SectionContainer, Container } from 'components/containers'
import DNumber from 'components/custom/_dnumbers.js'
import { localize, WithIntl } from 'components/localization'

const items = [
    { title: '47K+', subtitle: localize('members') },
    { title: '$14M+', subtitle: localize('paid out') },
    { title: '$150+', subtitle: localize('countries') },
    { title: '$1M+', subtitle: localize('clients') },
]

const Partners = () => {
    return (
        <Layout>
            <SectionContainer>
                <Container direction='column'>
                    <Header as='h4' weight='500' align='center'>
                        {localize('Earn up to 45% lifetime commission with an online trading provider that enables anyone to trade on any financial market with the utmost convenience. Binary Group –– the owner of Binary.com and Deriv –– has a proven track record of running successful referral programmes with prompt payouts.')}
                    </Header>
                    <DNumber items={items} justify="space-around" />
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Partners)