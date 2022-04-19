import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { getCountryRule } from 'components/containers/visibility'
import { Flex } from 'components/containers'
import { CookieStorage } from 'common/storage'

type BulletPropType = {
    bullet: string
    children: React.ReactNode
}

const Bullet = ({ bullet, children }: BulletPropType) => (
    <Flex>
        <Header type="paragraph-2" width="unset" mr="0.4rem" mt="0.8rem">
            <Localize translate_text={bullet} />
        </Header>
        <div>{children}</div>
    </Flex>
)

const UKAccountClosureModal = () => {
    const modalRef = React.useRef<ModalRefType>()
    const { is_uk } = getCountryRule()
    const cookie_key = 'uk_account_closure_modal_shown'
    const cookie = new CookieStorage(cookie_key)

    useEffect(() => is_uk && !cookie.get(cookie_key) && modalRef.current.show(), [is_uk])

    const handlePositive = () => {
        cookie.set(cookie_key, true)
        modalRef.current.hide()
    }

    return (
        <Modal
            ref={modalRef}
            title={<Localize translate_text="Your account is scheduled to be closed" />}
            positive={<Localize translate_text="OK, I understand" />}
            onPositive={handlePositive}
            is_dismissible={false}
        >
            <Header type="paragraph-2" weight="regular">
                <Localize translate_text="As part of the changes in our market offerings, we will be closing our UK clients’ accounts." />
            </Header>
            <Header type="paragraph-2" mt="1.6rem">
                <Localize translate_text="What this means for you" />
            </Header>
            <Header type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="From {25 Apr} 2022 onwards, you won’t be able to trade on Deriv. Also, you won’t be able to make deposits into your Deriv account. You need to withdraw any funds from your account as soon as possible." />
            </Header>
            <Header type="paragraph-2" mt="1.6rem">
                <Localize translate_text="What you need to do now" />
            </Header>
            <Bullet bullet="1.">
                <Header type="paragraph-2" mt="0.8rem">
                    <Localize translate_text="Close all your positions before {25 Apr}, 12:00 am GMT" />
                </Header>
                <Header type="paragraph-2" weight="regular">
                    <Localize translate_text="If you still have open positions on 25 Apr 2022, 12:00 am GMT, we shall close them and refund you." />
                </Header>
            </Bullet>
            <Bullet bullet="2.">
                <Header type="paragraph-2" mt="0.8rem">
                    <Localize translate_text="Withdraw your funds from your Deriv account" />
                </Header>
                <Header type="paragraph-2" weight="regular">
                    <Localize translate_text="You will lose access to your account when it gets closed, so be sure to withdraw all your funds." />
                </Header>
            </Bullet>
        </Modal>
    )
}

export default UKAccountClosureModal
