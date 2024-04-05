import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Text, Button } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import { cookie_banner, desktop_text } from './styles.module.scss'
import { useCookieBanner } from 'components/hooks/use-cookie-banner'
import { Localize } from 'components/localization'

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
            <div
                className={clsx(
                    'animate-fade-out pointer-events-auto p-1200 mb-200 bg-background-primary-base w-screen shadow-[0_0_12px_0_rgba(14,_14,_14,_0.16)] ease-in-out duration-200 [transition:opacity,translate]',
                    {
                        ['animate-fade-in']: cookie.should_show,
                    },
                    cookie_banner,
                )}
            >
                <Text className={clsx('pb-500 text-75', desktop_text)}>
                    <Localize translate_text="_t_Cookies help us to give you a better experience and personalised content on our site. _t_" />
                </Text>
                <Text className={clsx('text-75', desktop_text)}>
                    <Localize
                        translate_text="_t_If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>._t_"
                        components={[
                            <CustomLink
                                key={0}
                                href="/terms-and-conditions/#clients"
                                className="text-solid-coral-700 inline"
                            />,
                        ]}
                    />
                </Text>
                <div className="flex justify-center gap-1000 items-center mt-1000">
                    <div>
                        <Button variant="secondary" colorStyle="black" onClick={handleDecline}>
                            <Localize translate_text="_t_Don't accept_t_" />
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleAccept}>
                            <Localize translate_text="_t_Accept_t_" />
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return <></>
}

export default CookieBanner
