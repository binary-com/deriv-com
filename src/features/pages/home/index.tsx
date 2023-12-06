import React, { useCallback } from 'react'
import { PageLayout } from '@deriv-com/components'
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design'
import { LanguageProvider } from '@deriv-com/providers'
import Layout from 'features/components/templates/layout'
import ROWFooter from './footer'
import LiveMarketSection from './live-pricing-migration'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import UserFriendlyPlatforms from './user-platfroms'
import TradeTypeSection from './trade-type'
import MainRowNavigation from './navigation'
import HomeHero from './hero'
import FastPaymentSection from './fast-payment'
import CTA from './cta'
import StartTradingSteps from './start-trading-steps'
import TrustpilotSection from './trustpilot'
import { langItemsROW } from './data'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import useLangSwitcher from 'features/components/molecules/language-switcher/useLangSwitcher'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { LocaleContext } from 'components/localization'

const HomePage = () => {
    useOpenLiveChat(true)
    const lang_direction = useLangDirection()
    const { locale } = React.useContext(LocaleContext)
    const formatted_lang = locale.replace('_', '-')

    React.useEffect(() => {
        document.body.dir = lang_direction
        document.documentElement.lang = formatted_lang
    }, [lang_direction, formatted_lang])

    //need to update the language data and type
    //here using langauge data from `i18n-config.js`
    const { onSwitchLanguage, currentLang } = useLangSwitcher()
    const activeLang = langItemsROW[currentLang.path.replace('-', '')]

    const onLanguageChange = useCallback(
        (event) => {
            onSwitchLanguage(`/${event.path}/`)
        },
        [onSwitchLanguage],
    )
    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <LanguageProvider
                    langItems={langItemsROW}
                    onLangSelect={onLanguageChange}
                    activeLanguage={activeLang}
                >
                    <Layout>
                        <MainRowNavigation />
                        <PageLayout>
                            <HomeHero />
                            <TrustpilotSection />
                            <StatSection />
                            <TwentyYearsStrong />
                            <LiveMarketSection />
                            <UserFriendlyPlatforms />
                            <TradeTypeSection />
                            <StartTradingSteps />
                            <FastPaymentSection />
                            <CTA />
                            <ROWFooter />
                        </PageLayout>
                    </Layout>
                </LanguageProvider>
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default HomePage
