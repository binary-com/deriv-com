import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { getCountryRule } from 'components/containers/visibility'
import { CookieStorage } from 'common/storage'

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
            <Header as="h1" type="paragraph-2" weight="regular">
                <Localize translate_text="As part of the changes in our market offerings, we will be closing our UK clients’ accounts." />
            </Header>
            <Header as="h1" type="paragraph-2" mt="1.6rem">
                <Localize translate_text="What this means for you" />
            </Header>
            <Header as="h1" type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="You can no longer trade on Deriv or deposit funds into your account." />
            </Header>
            <Header as="h1" type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="If you had any open positions, we have closed them and refunded you." />
            </Header>
            <Header as="h1" type="paragraph-2" mt="1.6rem">
                <Localize translate_text="What you need to do now" />
            </Header>
            <Header as="h1" type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="Please proceed to withdraw all your funds from your account." />
            </Header>
            <Header as="h1" type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="You will lose access to your account when it gets closed, so be sure to withdraw all your funds." />
            </Header>
        </Modal>
    )
}

export default UKAccountClosureModal
