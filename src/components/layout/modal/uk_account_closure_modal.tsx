import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { CookieStorage } from 'common/storage'

const UKAccountClosureModal = () => {
    const modalRef = React.useRef<ModalRefType>()
    const { is_uk } = useCountryRule()
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
            title={<Localize translate_text="_t_Your account is scheduled to be closed_t_" />}
            positive={<Localize translate_text="_t_OK, I understand_t_" />}
            onPositive={handlePositive}
            is_dismissible={false}
        >
            <Header type="paragraph-2" weight="regular">
                <Localize translate_text="_t_As part of the changes in our market offerings, we will be closing our UK clients’ accounts._t_" />
            </Header>
            <Header type="paragraph-2" mt="1.6rem">
                <Localize translate_text="_t_What this means for you_t_" />
            </Header>
            <Header type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="_t_You can no longer trade on Deriv or deposit funds into your account._t_" />
            </Header>
            <Header type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="_t_If you had any open positions, we have closed them and refunded you._t_" />
            </Header>
            <Header type="paragraph-2" mt="1.6rem">
                <Localize translate_text="_t_What you need to do now_t_" />
            </Header>
            <Header type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="_t_Please proceed to withdraw all your funds from your account._t_" />
            </Header>
            <Header type="paragraph-2" weight="regular" mt="0.8rem">
                <Localize translate_text="_t_You will lose access to your account when it gets closed, so be sure to withdraw all your funds._t_" />
            </Header>
        </Modal>
    )
}

export default UKAccountClosureModal
