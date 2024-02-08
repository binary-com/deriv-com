import React, { useEffect, useState } from 'react'
import { Footer } from '@deriv-com/blocks'
import { qtMerge } from '@deriv/quill-design'
import {
    EuFooterNavData,
    RowFooterNavData,
    socialButtonsCareers,
    socialButtonsEU,
    socialButtonsROW,
    specialLanguageUrls,
    warnText,
} from './data'
import { DerivGoBanner } from './deriv-go-banner'
import { IIPAward } from './iip-award'
import { DescriptionContent } from './description'
import useRegion from 'components/hooks/use-region'
import { getLanguage, getLocationPathname } from 'common/utility'

export const MainFooter = () => {
    const [is_career, setIsCareer] = useState(false)
    const { is_eu, is_cpa_plan } = useRegion()
    const language = getLanguage()
    console.log('lang', language)

    useEffect(() => {
        const current_path = getLocationPathname()
        const splitted_path = current_path.split('/')
        const is_career_page = splitted_path.includes('careers')
        setIsCareer(is_career_page)
    }, [])

    const getSocialButtons = () => {
        let socialIcons: any
        if (language in specialLanguageUrls) {
            socialIcons = is_eu
                ? socialButtonsEU.map((button) => {
                      if (button['aria-label'] in specialLanguageUrls[language]) {
                          return {
                              ...button,
                              href: specialLanguageUrls[language][button['aria-label']],
                          }
                      } else {
                          return button
                      }
                  })
                : socialButtonsROW.map((button) => {
                      if (button['aria-label'] in specialLanguageUrls[language]) {
                          return {
                              ...button,
                              href: specialLanguageUrls[language][button['aria-label']],
                          }
                      } else {
                          return button
                      }
                  })
        } else {
            socialIcons = is_career
                ? socialButtonsCareers
                : is_eu
                ? socialButtonsEU
                : socialButtonsROW
        }
        return socialIcons
    }

    const socialButtons = getSocialButtons()

    return (
        <Footer.FooterBlock
            warningText={!is_eu && !is_cpa_plan ? warnText : null}
            socialButtons={socialButtons}
            banner={DerivGoBanner}
            awards={IIPAward}
            descriptionContent={DescriptionContent}
            className={qtMerge((is_eu || is_cpa_plan) && 'mb-[120px] lg:mb-[80px]')}
        >
            <Footer.MainNavContent items={is_eu ? EuFooterNavData : RowFooterNavData} cols="six" />
        </Footer.FooterBlock>
    )
}

export default MainFooter
