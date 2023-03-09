import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Flex } from 'components/containers'
import { Header, Text, LiveChatLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type LeftCTASectionProps = {
    header: TString
    button_url?: string
    button_text?: TString
    hide_cta?: boolean
    cta_props?: { is_white?: boolean }
    custom_content?: React.ReactElement
}
type RightCTASectionProps = LeftCTASectionProps & {
    button_props?: { type: 'dbot' | 'smart_trader' | 'mt5' }
}

type LoveTradingComponentProps = {
    left: LeftCTASectionProps
    right: RightCTASectionProps
    image: string
    bg_image?: string
    bg_image_mobile?: string
}

const LoveTrading = () => {
    const content: LoveTradingComponentProps = {
        left: {
            header: '_t_Got more questions?_t_',
            button_url: '/',
            custom_content: (
                <>
                    <Header as="h3" type="section-title" m="2.4rem 0" align="center">
                        <Localize translate_text="_t_Got more questions?_t_" />
                    </Header>
                    <Text>
                        <LiveChatLinkText text="_t_Contact us via live chat_t_" />
                    </Text>
                </>
            ),
            hide_cta: true,
        },
        image: 'affiliate',
        right: {
            header: '_t_New affiliate login URL_t_',
            custom_content: (
                <Flex width="auto" fd="column" ai="flex-start" max_width="38.4rem" ml="0">
                    <Header as="h3" type="section-title" color="white" m="0.8rem 0" align="left">
                        <Localize translate_text="_t_New affiliate login URL_t_" />
                    </Header>
                    <Text color="white" size="var(--text-size-m)">
                        <Localize translate_text="_t_Your Deriv affiliate dashboard,_t_" />
                    </Text>
                    <Text color="white" size="var(--text-size-m)">
                        <Localize
                            translate_text="_t_live on <0>3 June 2020</0>_t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                </Flex>
            ),
            hide_cta: true,
        },
    }

    return <LoveTradingComponent {...content} />
}
export default LoveTrading
