import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Flex } from 'components/containers'
import { useLivechat } from 'components/hooks/use-livechat'
import { Header, LinkText, Text } from 'components/elements'
import { Localize } from 'components/localization'

const LoveTrading = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()

    const content = {
        left: {
            header: <Localize translate_text="Got more questions?" />,
            button_url: '/',
            custom_content: (
                <>
                    <Header as="h3" type="section-title" m="2.4rem 0" align="center">
                        <Localize translate_text="Got more questions?" />
                    </Header>
                    <Text>
                        <LinkText
                            color="red"
                            mt="1rem"
                            size="var(--text-size-s)"
                            onClick={() => {
                                is_livechat_interactive && LC_API.open_chat_window()
                            }}
                        >
                            <Localize translate_text="Contact us via live chat" />
                        </LinkText>
                    </Text>
                </>
            ),
            hide_cta: true,
        },
        image: 'affiliate',
        right: {
            header: <Localize translate_text="New affiliate login URL" />,
            custom_content: (
                <Flex width="auto" fd="column" ai="flex-start" max_width="38.4rem" ml="0">
                    <Header as="h3" type="section-title" color="white" m="0.8rem 0" align="left">
                        <Localize translate_text="New affiliate login URL" />
                    </Header>
                    <Text color="white" size="var(--text-size-m)">
                        <Localize translate_text="Your Deriv affiliate dashboard," />
                    </Text>
                    <Text color="white" size="var(--text-size-m)">
                        <Localize
                            translate_text="live on <0>3 June 2020</0>"
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
