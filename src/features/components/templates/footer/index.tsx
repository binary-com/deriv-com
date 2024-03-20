import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Footer } from '@deriv-com/blocks'
import { qtJoin } from '@deriv/quill-design'
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
// import { socialIconROW, socialIconEU, socialIconCareer } from './validate-social-icons-data'
import { DerivGoBanner } from './deriv-go-banner'
import { IIPAward } from './iip-award'
import { DescriptionContent } from './description'
import useRegion from 'components/hooks/use-region'
import { getLocationPathname } from 'common/utility'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const overrideWithLang = (buttons, lang) =>
    buttons.map((button) =>
        lang in specialLanguageUrls
            ? button['aria-label'] in specialLanguageUrls[lang]
                ? { ...button, href: specialLanguageUrls[lang][button['aria-label']] }
                : button
            : button,
    )

export const MainFooter = () => {
    const [is_career, setIsCareer] = useState(false)
    const { is_eu, is_cpa_plan } = useRegion()
    const [social_buttons, setSocialButtons] = useState(socialButtonsROW)
    const [warn_text, setWarnText] = useState(warnText)
    const [nav_data, setNavData] = useState(RowFooterNavData)
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

        const region_buttons = is_eu ? socialIconEU : is_cpa_plan ? socialIconCPA : socialIconROW
        const buttons = is_career ? socialIconCareer : region_buttons
        setSocialButtons(overrideWithLang(buttons, lang))
        if (is_eu) setNavData(EuFooterNavData)
        setWarnText(!is_eu && !is_cpa_plan ? warnText : null)
    }, [
        is_eu,
        is_cpa_plan,
        is_career,
        career_social_media_icons,
        row_social_media_icons,
        eu_social_media_icons,
        cpa_social_media_icons,
    ])

    return (
        <Footer.FooterBlock
            warningText={warn_text}
            socialButtons={social_buttons}
            banner={DerivGoBanner}
            awards={IIPAward}
            descriptionContent={DescriptionContent}
            className={qtJoin((is_eu || is_cpa_plan) && 'mb-[120px] lg:mb-[80px]')}
        >
            <Footer.MainNavContent items={nav_data} cols="six" />
        </Footer.FooterBlock>
    )
}

export default MainFooter
