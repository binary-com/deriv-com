import React, { useEffect, useRef, useState } from 'react'
import { cookie_banner_wrapper, visible } from './cookie-banner.module.scss'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import FlexBox from 'features/components/atoms/flex-box'
import Button from 'features/components/atoms/button'
import Container from 'features/components/atoms/container'
import dclsx from 'features/utils/dclsx'

const CookieBanner = () => {
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

    if (is_visible) {
        return (
            <Container.Fixed
                padding="12x"
                bgcolor="primary"
                className={dclsx(cookie_banner_wrapper, {
                    [visible]: cookie.should_show,
                })}
            >
                <Typography.Paragraph pb="5x">
                    <Localize translate_text="Cookies help us to give you a better experience and personalised content on our site. " />
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <Localize
                        translate_text="If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>."
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
                <FlexBox justify="between" align="center" mt="10x">
                    <Button.Secondary onClick={cookie.decline} outlined>
                        <Localize translate_text="_t_Don't accept_t_" />
                    </Button.Secondary>
                    <Button.Primary onClick={cookie.accept}>
                        <Localize translate_text="_t_Accept_t_" />
                    </Button.Primary>
                </FlexBox>
            </Container.Fixed>
        )
    }

    return <></>
}

export default CookieBanner
