import React from 'react'
import { LoveTradingComponent } from '../_love-trading'
import { Flex } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { Localize } from 'components/localization'

const content = {
    left: {
        header: <Localize translate_text="_t_Got more questions?_t_" />,
        button_url: '/',
        custom_content: (
            <>
                <Header as="h3" type="section-title" m="2.4rem 0" align="center">
                    <Localize translate_text="_t_Got more questions?_t_" />
                </Header>
                <Text>
                    <Localize translate_text="_t_Email us at_t_" />
                </Text>
                <Text>
                    <LocalizedLinkText
                        color="red"
                        weight="bold"
                        external="true"
                        to="mailto:partners@deriv.com"
                    >
                        partners@deriv.com
                    </LocalizedLinkText>
                </Text>
            </>
        ),
        hide_cta: true,
    },
    image: 'affiliate',
    right: {
        header: <Localize translate_text="_t_New affiliate login URL_t_" />,
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

const LoveTrading = () => <LoveTradingComponent {...content} />

export default LoveTrading
