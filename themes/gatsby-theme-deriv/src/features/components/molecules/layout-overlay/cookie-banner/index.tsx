import React, { useEffect, useRef, useState } from 'react'
import { cookie_banner_wrapper, visible } from './cookie-banner.module.scss'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import Flex from 'features/components/atoms/flex-box'
import Button from 'features/components/atoms/button'
import dclsx from 'features/utils/dclsx'
import Box from 'features/components/atoms/box'

interface CookieBannerProps {
    onCookieBannerClose: () => void
}

const CookieBanner = ({ onCookieBannerClose }: CookieBannerProps) => {
    const cookie = useCookieBanner()
    const [is_visible, setIsVisible] = useState(false)
    const timer_ref = useRef<NodeJS.Timeout>()

    // Todo: Should simplify this useEffect and get rid of the duplicated state and find another solution
    // for removing the element from the DOM after the animation completes.
    useEffect(() => {
        if (is_visible !== cookie.should_show) {
            if (cookie.should_show) {
                setIsVisible(cookie.should_show)
            } else {
                timer_ref.current = setTimeout(() => setIsVisible(cookie.should_show), 200)
            }
        }

        return () => {
            clearTimeout(timer_ref.current)
        }
    }, [cookie.should_show, is_visible])

    const handleAccept = () => {
        onCookieBannerClose()
        cookie.accept()
    }

    const handleDecline = () => {
        onCookieBannerClose()
        cookie.decline()
    }

    if (is_visible) {
        return (
            <Box
                padding="12x"
                mb={'2x'}
                md={{
                    margin: '10x',
                }}
                bgcolor="primary"
                className={dclsx(cookie_banner_wrapper, {
                    [visible]: cookie.should_show,
                })}
            >
                <Typography.Paragraph pb="5x">
                    <Localize translate_text="_t_Cookies help us to give you a better experience and personalised content on our site. _t_" />
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <Localize
                        translate_text="_t_If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>._t_"
                        components={[
                            <Link
                                key={0}
                                url={{
                                    type: 'internal',
                                    to: '/terms-and-conditions/#clients',
                                }}
                                textcolor="brand"
                            />,
                        ]}
                    />
                </Typography.Paragraph>
                <Flex.Box justify="center" gap={'10x'} align="center" mt="10x">
                    <Flex.Item>
                        <Button.Secondary onClick={handleDecline} outlined>
                            <Localize translate_text="_t_Don't accept_t_" />
                        </Button.Secondary>
                    </Flex.Item>
                    <Flex.Item>
                        <Button.Primary onClick={handleAccept}>
                            <Localize translate_text="_t_Accept_t_" />
                        </Button.Primary>
                    </Flex.Item>
                </Flex.Box>
            </Box>
        )
    }

    return <></>
}

export default CookieBanner
