import React, { useContext } from 'react'
import { Features } from '@deriv-com/blocks'
import { SectionMessage } from '@deriv/quill-design'
import { cards } from './data'
import { LocaleContext, Localize, is_rtl, localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'
import { CustomLink } from '@deriv-com/components'
import { getDerivAppLocalizedURL, replaceLocale } from 'common/utility'

interface SwiperOption {
    spaceBetween: number
    slidesPerView: number | 'auto'
    reverseDirection: true
    freeMode: true
}
const swiperOption: SwiperOption = {
    spaceBetween: 16,
    slidesPerView: 'auto',
    reverseDirection: true,
    freeMode: true,
}

const TradingResponsibly = () => {
    const { region } = useBuildVariant()
    const app_link = 'https://app.deriv.com/account/two-factor-authentication'
    const { locale } = useContext(LocaleContext)
    const localizedRedirectLink = replaceLocale(getDerivAppLocalizedURL(app_link, locale))
    return (
        <>
            <Features.ContentSlider
                className="!bg-background-secondary-container"
                title={<Localize translate_text="_t_Trading responsibly_t_" />}
                cardSliderProps={{
                    swiperData: swiperOption,
                    slideClasses: 'max-w-[296px] !h-auto !mr-gap-none !ml-gap-none',
                    className: 'w-screen lg:w-full [&>*:nth-child(1)]:!gap-gap-lg ',
                    variant: 'ContentBottom',
                    cards: cards,
                    dir: is_rtl() ? 'rtl' : 'ltr',
                }}
                bottomContent={
                    region === 'eu' && (
                        <SectionMessage.Information
                            size="sm"
                            colorStyle="information"
                            description={
                                <Localize
                                    translate_text="_t_For more details on our products and the risks involved in online trading, read our <0>key information documents (KIDs)</0> on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies._t_"
                                    components={[
                                        <CustomLink
                                            key={0}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={localizedRedirectLink}
                                            size="md"
                                            className="text-typography-default inline underline"
                                        />,
                                    ]}
                                />
                            }
                        />
                    )
                }
            />
        </>
    )
}

export default TradingResponsibly
