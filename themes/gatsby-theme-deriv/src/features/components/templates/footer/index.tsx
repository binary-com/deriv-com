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
import useBuildVariant from 'features/hooks/use-build-variant'
import { getLocationPathname } from 'common/utility'
import useRegion from 'components/hooks/use-region'

const MainFooter = () => {
    const {region} = useBuildVariant();
    const { is_cpa_plan } = useRegion()
    const [is_career, setIsCareer] = useState(false)
    const [social_buttons, setSocialButtons] = useState(socialButtonsROW)
    const [warn_text, setWarnText] = useState(warnText)
    const region_buttons = region === "eu" ? socialButtonsEU : socialButtonsROW

    useEffect(() => {
        const current_path = getLocationPathname()
        const splitted_path = current_path.split('/')
        const is_career_page = splitted_path.includes('careers')
        setIsCareer(is_career_page)
    }, [])

    useEffect(() => {
        setSocialButtons(is_career ? socialButtonsCareers : region_buttons)
        setWarnText(region !== "eu" && !is_cpa_plan ? warnText : null)
    }, [region_buttons, region, is_cpa_plan, is_career])

    return (
        <Footer.FooterBlock
            warningText={warn_text}
            socialButtons={social_buttons}
            banner={DerivGoBanner}
            awards={IIPAward}
            descriptionContent={DescriptionContent}
            className={qtJoin((region === "eu" || is_cpa_plan) && 'mb-[120px] lg:mb-[80px]')}
        >
            <Footer.MainNavContent items={region === "eu" ? EuFooterNavData : RowFooterNavData} cols="six" />
        </Footer.FooterBlock>
    )
}

export default MainFooter
