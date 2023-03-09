import React from 'react'
import { LocalizedLinkText } from '../affiliate-ib/_faq-data'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { useLivechat } from 'components/hooks/use-livechat'
import useRegion from 'components/hooks/use-region'

const General = () => {
    const { is_p2p_allowed_country } = useRegion()
    return (
        <>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_What is the Deriv Payment Agent Programme?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_It’s a partnership programme where we authorise third-party payment agents to process deposits and withdrawals for Deriv clients._t_" />
            </Header>
            {is_p2p_allowed_country && (
                <>
                    <Header as="p" type="paragraph-1" mt="16px">
                        <Localize translate_text="_t_Is the Deriv Payment Agent Programme the same as Deriv P2P?_t_" />
                    </Header>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize
                            translate_text="_t_No, it isn’t. <0>Deriv P2P</0> is a peer-to-peer service for our clients to make deposits and withdrawals using their local currency. As our payment agent, you can use Deriv P2P to offer your services to Deriv clients in your country._t_"
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
                <Localize translate_text="_t_Why do clients need a payment agent?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Do I need a Deriv account to become a payment agent?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_Yes, you’ll need a Deriv real account to process deposits and withdrawals for our clients._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Do I have to pay any fees to become a payment agent for Deriv?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_Not at all. Our payment agent programme is completely free. You’ll just need to have a minimum balance in your Deriv account when signing up. The minimum amount depends on your country of residence._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Do I get commission as a payment agent?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_We don’t pay commission, but you can set your own commission rate per transaction within reasonable thresholds. When you sign up, our team will be in touch to work out the details with you._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_What happens if a payment agent charges more than the set commission threshold?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_If we receive justified complaints, the payment agents involved will be banned immediately from our platform._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Are payment agents employees or affiliates of Deriv?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_No. Payment agents operate as independent exchangers and are not affiliates of Deriv._t_" />
            </Header>
        </>
    )
}

const AccountManagement = () => {
    const [_, LC_API] = useLivechat()

    return (
        <>
            <Header as="p" mt="24px" type="paragraph-1">
                <Localize translate_text="_t_How can I add, remove or change my accepted payment methods?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize
                    translate_text="_t_To change your payment method, please contact us via <0>live chat</0>._t_"
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
                <Localize translate_text="_t_Can I advertise my services to Deriv clients?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize
                    translate_text="_t_Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our <0>Terms and conditions</0> page)._t_"
                    components={[<LocalizedLinkText to="/terms-and-conditions/#clients" key={0} />]}
                />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Will I still be able to trade with my account after registering as a payment agent?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_No. You can only use your account as a payment agent to perform clients’ deposits and withdrawal requests. For trading purposes, you will need to open a separate account._t_" />
            </Header>
        </>
    )
}

export { General, AccountManagement }
