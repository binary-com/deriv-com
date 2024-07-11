import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Footer } from '@deriv-com/blocks'
import { qtJoin, Text } from '@deriv/quill-design'
import {
    EuFooterNavData,
    RowFooterNavData,
    socialButtonsCareers,
    socialButtonsEU,
    socialButtonsROW,
    socialButtonsCPA,
    specialLanguageUrls,
    warnText,
} from './data'
import { DerivGoBanner } from './deriv-go-banner'
import { IIPAward } from './iip-award'
import { DescriptionContent } from './description'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
import { getLocationPathname } from 'common/utility'
import useRegion from 'components/hooks/use-region'
import useBuildVariant from 'features/hooks/use-build-variant'
import { Localize } from 'components/localization'
// import { socialIconROW, socialIconEU, socialIconCareer } from './validate-social-icons-data'

const overrideWithLang = (buttons, lang) =>
    buttons.map((button) =>
        lang in specialLanguageUrls
            ? button['aria-label'] in specialLanguageUrls[lang]
                ? { ...button, href: specialLanguageUrls[lang][button['aria-label']] }
                : button
            : button,
    )

export const MainFooter = () => {
    const { region } = useBuildVariant()
    const [is_career, setIsCareer] = useState(false)
    const { is_cpa_plan } = useRegion()
    const [social_buttons, setSocialButtons] = useState(socialButtonsROW)
    const [warn_text, setWarnText] = useState(warnText)
    const lang = Cookies.get('user_language') || 'en'

    useEffect(() => {
        const current_path = getLocationPathname()
        const splitted_path = current_path.split('/')
        const is_career_page = splitted_path.includes('careers')
        setIsCareer(is_career_page)
    }, [])

    const filterSocialIcons = (flagsData, mainData) => {
        return mainData.filter((item) => flagsData?.[item['aria-label']])
    }

    const career_social_media_icons = useThirdPartyFlags('career_social_media_icons')
    const row_social_media_icons = useThirdPartyFlags('row_social_media_icons')
    const eu_social_media_icons = useThirdPartyFlags('eu_social_media_icons')
    const cpa_social_media_icons = useThirdPartyFlags('cpa_social_media_icons')

    useEffect(() => {
        const socialIconROW = filterSocialIcons(row_social_media_icons, socialButtonsROW)
        const socialIconEU = filterSocialIcons(eu_social_media_icons, socialButtonsEU)
        const socialIconCareer = filterSocialIcons(career_social_media_icons, socialButtonsCareers)
        const socialIconCPA = filterSocialIcons(cpa_social_media_icons, socialButtonsCPA)

        const region_buttons = region === 'eu' ? socialIconEU : is_cpa_plan ? socialIconCPA : socialIconROW
        const buttons = is_career ? socialIconCareer : region_buttons
        setSocialButtons(overrideWithLang(buttons, lang))
        setWarnText(region !== 'eu' && !is_cpa_plan ? warnText : null)
    }, [
        lang,
        region,
        is_cpa_plan,
        is_career,
        career_social_media_icons,
        row_social_media_icons,
        eu_social_media_icons,
        cpa_social_media_icons,
    ])

    const[is_mounted] = usePageLoaded();
    if(!is_mounted) return null

    return (
        <Footer.FooterBlock
            warningText={warn_text && (
                <Text className={`text-solid-slate-600 ${region !== 'eu' && !is_cpa_plan ? 'additional-warning-classname' : ''}`} size="sm">
                    <Localize
                        translate_text={warn_text}
                    />
                </Text>
            )}
            socialButtons={social_buttons}
            banner={DerivGoBanner}
            awards={IIPAward}
            descriptionContent={DescriptionContent}
            className={qtJoin((region === 'eu' || is_cpa_plan) && 'mb-[120px] lg:mb-[80px]')}
        >
            <Footer.MainNavContent items={region === 'eu' ? EuFooterNavData : RowFooterNavData} cols='six' />
        </Footer.FooterBlock>
    )
}

export default MainFooter
