import React, { useEffect, useState } from 'react'
import { Footer } from '@deriv-com/blocks'
import { qtJoin } from '@deriv/quill-design'
import {
    EuFooterNavData,
    RowFooterNavData,
    socialButtonsCareers,
    socialButtonsEU,
    socialButtonsROW,
    warnText,
} from './data'
import { DerivGoBanner } from './deriv-go-banner'
import { IIPAward } from './iip-award'
import { DescriptionContent } from './description'
import useRegion from 'components/hooks/use-region'
import { getLocationPathname } from 'common/utility'

export const MainFooter = () => {
    const { is_eu, is_cpa_plan } = useRegion()
    const [is_career, setIsCareer] = useState(false)
    const [social_buttons, setSocialButtons] = useState(socialButtonsROW)
    const [warn_text, setWarnText] = useState(warnText)
    const [nav_data, setNavData] = useState(RowFooterNavData)

    useEffect(() => {
        const current_path = getLocationPathname()
        const splitted_path = current_path.split('/')
        const is_career_page = splitted_path.includes('careers')
        setIsCareer(is_career_page)
    }, [])

    useEffect(() => {
        const eu_buttons = is_eu && socialButtonsEU
        setSocialButtons(is_career ? socialButtonsCareers : eu_buttons)
        if (is_eu && is_cpa_plan) setWarnText(null)
        if (is_eu) setNavData(EuFooterNavData)
    }, [is_eu, is_cpa_plan, is_career])

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
