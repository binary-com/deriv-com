import React from 'react'
import styled from 'styled-components'
import { Text, LinkText } from 'components/elements'
//import { deriv_app_url } from 'common/utility'
import { Show } from 'components/containers'
import { LocationContext } from 'components/layout/location-context.js'
import { Localize } from 'components/localization'

const TextLink = styled(LinkText).attrs({ as: 'span' })``

const FinancialCommission = () => {
    const { is_livechat_interactive, LC_API } = React.useContext(LocationContext)

    return (
        <>
            {is_livechat_interactive && (
                <div>
                    <Show.Eu>
                        <Text mt="2rem" max_width="58.8rem">
                            <Localize
                                translate_text="For fair resolution of any complaints, please <0>chat</0> with us."
                                components={[
                                    <TextLink
                                        key={0}
                                        color="red"
                                        className="gtm-deriv-livechat"
                                        onClick={() => {
                                            LC_API.open_chat_window()
                                        }}
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
                                            LC_API.open_chat_window()
                                        }}
                                    />,
                                ]}
                            />
                        </Text>
                    </Show.NonEU>
                </div>
            )}
        </>
    )
}

export default FinancialCommission
