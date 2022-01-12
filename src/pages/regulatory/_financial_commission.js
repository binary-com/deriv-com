import React, { useContext } from 'react'
import styled from 'styled-components'
import { DerivStore } from '../../store'
import { Text, LinkText } from 'components/elements'
import { deriv_app_url } from 'common/constants'
import { Show } from 'components/containers'
import { Localize } from 'components/localization'

const TextLink = styled(LinkText).attrs({ as: 'span' })``

const FinancialCommission = () => {
    const { is_livechat_interactive, LC_API, setFirstLoadOpenLc } = useContext(DerivStore)

    return (
        <>
            <div>
                <Show.Eu>
                    <Text mt="2rem" max_width="58.8rem">
                        <Localize
                            translate_text="For fair resolution of any complaints, please <0>chat</0> with us. To learn more, see our <1>complaint policy</1>."
                            components={[
                                <TextLink
                                    key={0}
                                    color="red"
                                    className="gtm-deriv-livechat"
                                    onClick={() => {
                                        if (is_livechat_interactive) {
                                            LC_API.open_chat_window()
                                        } else {
                                            setFirstLoadOpenLc(true)
                                        }
                                    }}
                                />,
                                <LinkText
                                    key={0}
                                    color="red"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`${deriv_app_url}/complaints-policy`}
                                />,
                            ]}
                        />
                    </Text>
                </Show.Eu>
                <Show.NonEU>
                    <Text mt="2rem" max_width="58.8rem">
                        <Localize
                            translate_text="For fair resolution of any complaints, please <0>chat</0> with us."
                            components={[
                                <TextLink
                                    key={0}
                                    color="red"
                                    onClick={() => {
                                        if (is_livechat_interactive) {
                                            LC_API.open_chat_window()
                                        } else {
                                            setFirstLoadOpenLc(true)
                                        }
                                    }}
                                />,
                            ]}
                        />
                    </Text>
                </Show.NonEU>
            </div>
        </>
    )
}

export default FinancialCommission
