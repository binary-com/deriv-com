import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'components/containers'
import { Header } from 'components/elements'
import Email1 from 'images/svg/academy/email1.svg'
import Email2 from 'images/svg/academy/email2.svg'
import device from 'themes/device'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

const Icon = styled.img`
    width: 64px;
    height: 64px;

    @media ${device.tabletL} {
        width: 48px;
        height: 48px;
    }
`
const thanks_for_subscription_text: TString = '_t_Thanks for subscribing to Deriv Academy_t_'
const thanks_for_confirming_text: TString =
    '_t_Thank you for confirming your email address, you will receive a confirmation email shortly._t_'
const check_junk_folder_text: TString = `_t_If you don't receive an email, please check your junk folder._t_`
const refresh_inbox_text: TString = `_t_If the email still hasn't arrived after a few minutes, please refresh this
page, and check your inbox again._t_`

const Subscribe = () => {
    return (
        <>
            <Box p="12px 0">
                <Header align="center" as="h1" type="heading-3" mb="8px">
                    <Localize translate_text={thanks_for_subscription_text} />
                </Header>
                <Header align="center" as="p" type="subtitle-2" weight="regular" mb="8px">
                    <Localize translate_text={thanks_for_confirming_text} />
                </Header>
            </Box>
            <Flex
                m="auto"
                max_width="1120px"
                desktop={{ max_width: '996px' }}
                tabletL={{
                    fd: 'column',
                    ai: 'center',
                    width: 'calc(100% - 32px)',
                    max_width: '90%',
                }}
            >
                <Flex m="auto" ai="center" tabletL={{ m: '0 0 24px 0', max_width: '450px' }}>
                    <Icon src={Email1} />
                    <Header as="p" type="paragraph-1" weight="regular" m="0 16px">
                        <Localize translate_text={check_junk_folder_text} />
                    </Header>
                </Flex>
                <Flex m="auto" ai="center" tabletL={{ m: '0 0 24px 0', max_width: '450px' }}>
                    <Icon src={Email2} />
                    <Header as="p" type="paragraph-1" weight="regular" m="0 16px">
                        <Localize translate_text={refresh_inbox_text} />
                    </Header>
                </Flex>
            </Flex>
        </>
    )
}

export default Subscribe
