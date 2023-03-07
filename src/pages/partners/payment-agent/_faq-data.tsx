import React from 'react'
import { LocalizedLinkText } from '../affiliate-ib/_faq-data'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { useLivechat } from 'components/hooks/use-livechat'
import useRegion from 'components/hooks/use-region'

const General = () => {
    const { is_p2p_allowed_country } = useRegion()
    return (
        <>
            <Header as="p" type="paragraph-1" mt="16px">
                {localize('What is the Deriv Payment Agent Programme?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'It’s a partnership programme where we authorise third-party payment agents to process deposits and withdrawals for Deriv clients.',
                )}
            </Header>
            {is_p2p_allowed_country && (
                <>
                    <Header as="p" type="paragraph-1" mt="16px">
                        {localize('Is the Deriv Payment Agent Programme the same as Deriv P2P?')}
                    </Header>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
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
            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Why do clients need a payment agent?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    "Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction.",
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Do I need a Deriv account to become a payment agent?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'Yes, you’ll need a Deriv real account to process deposits and withdrawals for our clients.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Do I have to pay any fees to become a payment agent for Deriv?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'Not at all. Our payment agent programme is completely free. You’ll just need to have a minimum balance in your Deriv account when signing up. The minimum amount depends on your country of residence.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Do I get commission as a payment agent?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'We don’t pay commission, but you can set your own commission rate per transaction within reasonable thresholds. When you sign up, our team will be in touch to work out the details with you.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize(
                    'What happens if a payment agent charges more than the set commission threshold?',
                )}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'If we receive justified complaints, the payment agents involved will be banned immediately from our platform.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Are payment agents employees or affiliates of Deriv?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'No. Payment agents operate as independent exchangers and are not affiliates of Deriv.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize(
                    'What is the difference between a payment agent and a premium payment agent?',
                )}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'Payment agents (PA) and premium payment agents (PPA) help clients with their transactions. However, a premium payment agent (PPA) can conduct transactions with both clients and other payment agents, whereas a payment agent can only conduct transactions with clients.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Who can become a premium payment agent?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    `An approved payment agent can become a premium payment agent upon meeting our Compliance team's criteria.`,
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Will I be required to pay a fee to become a premium payment agent?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(`No, you don't need to pay a fee to become a premium payment agent.`)}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('What is the cost of using the premium payment agent’s services?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'Clients or payment agents can discuss and negotiate fees with the premium payment agent.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize(
                    'Can a premium payment agent provide their services to another premium payment agent?',
                )}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'Yes, a premium payment agent can conduct transactions with other premium payment agents.',
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Can payment agent offer their services to a premium payment agent?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(`No, payment agents can only perform transactions with clients.`)}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Can a payment agent offer their service to other payment agents?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    `No, payment agents cannot conduct transactions with other payment agents. They can only accept clients' transaction requests.`,
                )}
            </Header>

            <Header as="p" type="paragraph-1" mt="16px">
                {localize(
                    'Can all Deriv clients use premium payment agents to process transactions?',
                )}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'Yes, any Deriv client can use transaction services from a premium payment agent.',
                )}
            </Header>
        </>
    )
}

const AccountManagement = () => {
    const [_, LC_API] = useLivechat()

    return (
        <>
            <Header as="p" mt="24px" type="paragraph-1">
                {localize('How can I add, remove or change my accepted payment methods?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize
                    translate_text="To change your payment method, please contact us via <0>live chat</0>."
                    components={[
                        <LocalizedLinkText
                            as="span"
                            onClick={() => LC_API.open_chat_window()}
                            key={0}
                        />,
                    ]}
                />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                {localize('Can I advertise my services to Deriv clients?')}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize
                    translate_text="Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our <0>Terms and conditions</0> page)."
                    components={[<LocalizedLinkText to="/terms-and-conditions/#clients" key={0} />]}
                />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                {localize(
                    'Will I still be able to trade with my account after registering as a payment agent?',
                )}
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                {localize(
                    'No. You can only use your account as a payment agent to perform clients’ deposits and withdrawal requests. For trading purposes, you will need to open a separate account.',
                )}
            </Header>
        </>
    )
}

export { General, AccountManagement }
