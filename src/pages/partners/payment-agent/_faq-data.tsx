import React from 'react'
import styled from 'styled-components'
import { LocalizedLinkText } from '../affiliate-ib/_faq-data'
import { Header, LinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'

const TextLink = styled(LinkText).attrs({ as: 'span' })``

const General = () => (
    <>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('What is the Deriv Payment Agent Programme?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'It is a partnership arrangement where a payment agent is authorised to process deposits and withdrawals for our clients.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Is the Deriv Payment Agent Programme the same as Deriv P2P (DP2P)?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'No, it isn’t. DP2P is a peer-to-peer service for our clients to make deposits and withdrawals using their local currency. As our payment agent, you can use the DP2P platform to offer your services to Deriv clients in your country.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Why do clients need a payment agent?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                "Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction.",
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Are there any fees I need to pay to become a payment agent on Deriv?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Not at all. Joining our payment agent programme is completely free.')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Who sets the commission rate per transaction?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'As a payment agent, you determine your commission per transaction, subject to our established thresholds.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'What happens if a payment agent charges more than the set commission threshold?',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'If we receive justified complaints, the payment agents involved will be banned immediately from our platform.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Are payment agents employees or affiliates of Deriv?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'No. Payment agents operate as independent exchangers and are not affiliates of Deriv.',
            )}
        </Header>
    </>
)
const AccountManagement = () => (
    <>
        <Header as="h5" type="main-paragraph">
            {localize('How can I add, remove or change my accepted payment methods?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="To change your payment method, please contact us via <0>livechat</0>."
                components={[
                    <TextLink
                        key={0}
                        color="red"
                        onClick={() => {
                            // eslint-disable-next-line no-undef
                            LC_API.open_chat_window()
                        }}
                    />,
                ]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('As a payment agent, will I receive commissions from Deriv?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'We do not pay commissions to payment agents. You set your own commission rate per transaction and our clients will bear the necessary fees.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Can I advertise my services to Deriv clients?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our <0>Terms and conditions</0> page)."
                components={[<LocalizedLinkText to="/terms-and-conditions/#clients" key={0} />]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Will I still be able to trade with my account after registering as a payment agent?',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Yes. As a payment agent, you will still be able to trade with your account.',
            )}
        </Header>
    </>
)
export { General, AccountManagement }
