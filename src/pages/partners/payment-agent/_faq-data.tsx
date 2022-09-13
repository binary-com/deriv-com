import React from 'react'
import { LocalizedLinkText } from '../affiliate-ib/_faq-data'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { DerivStore } from 'store'

const General = () => {
    const { is_p2p_allowed_country } = React.useContext(DerivStore)
    return (
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
                    'It’s a partnership programme where we authorise third-party payment agents to process deposits and withdrawals for Deriv clients.',
                )}
            </Header>
            {is_p2p_allowed_country && (
                <>
                    <Header
                        as="p"
                        type="paragraph-1"
                        mt="16px"
                        tabletL={{
                            type: 'paragraph-2',
                        }}
                    >
                        {localize('Is the Deriv Payment Agent Programme the same as Deriv P2P?')}
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
                            translate_text="No, it isn’t. <0>Deriv P2P</0> is a peer-to-peer service for our clients to make deposits and withdrawals using their local currency. As our payment agent, you can use Deriv P2P to offer your services to Deriv clients in your country."
                            components={[
                                <LocalizedLinkText
                                    to="/p2p"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={0}
                                />,
                            ]}
                        />
                    </Header>
                </>
            )}
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
                {localize('Do I need a Deriv account to become a payment agent?')}
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
                    'Yes, you’ll need a Deriv real account to process deposits and withdrawals for our clients.',
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
                {localize('Do I have to pay any fees to become a payment agent for Deriv?')}
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
                    'Not at all. Our payment agent programme is completely free. You’ll just need to have a minimum balance in your Deriv account when signing up. The minimum amount depends on your country of residence.',
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
                {localize('Do I get commission as a payment agent?')}
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
                    'We don’t pay commission, but you can set your own commission rate per transaction within reasonable thresholds. When you sign up, our team will be in touch to work out the details with you.',
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
}

const AccountManagement = () => (
    <>
        <Header
            as="p"
            mt="24px"
            type="paragraph-1"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
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
                translate_text="To change your payment method, please contact us via <0>live chat</0>."
                components={[
                    <LocalizedLinkText
                        as={'span'}
                        onClick={() => {
                            // eslint-disable-next-line no-undef
                            LC_API.open_chat_window()
                        }}
                        key={0}
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
                'No. You can only use your account as a payment agent to perform clients’ deposits and withdrawal requests. For trading purposes, you will need to open a separate account.',
            )}
        </Header>
    </>
)
export { General, AccountManagement }
