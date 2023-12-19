import React, { useEffect, useState } from 'react'
import { Footer } from '@deriv-com/blocks'
import { qtMerge } from '@deriv/quill-design'
import {
    EuFooterNavData,
    RowFooterNavData,
    socialButtonsCareers,
    socialButtonsEU,
    socialButtonsROW,
    warnText,
} from './data'
import { DerivGoBannerAndAwards } from './banner-and-awards'
import { DescriptionContent, DescriptionContentEU } from './description'
import useRegion from 'components/hooks/use-region'
import { getLocationPathname } from 'common/utility'

export const MainFooter = () => {
    const [is_career, setIsCareer] = useState(false)
    const { is_eu } = useRegion()

    useEffect(() => {
        const current_path = getLocationPathname()
        const splitted_path = current_path.split('/')
        const is_career_page = splitted_path.includes('careers')
        setIsCareer(is_career_page)
    }, [])

    const socialButtons = is_career
        ? socialButtonsCareers
        : is_eu
        ? socialButtonsEU
        : socialButtonsROW

    return (
        <Footer.FooterBlock
            warningText={!is_eu ? warnText : null}
            socialButtons={socialButtons}
            bannerAndAwards={DerivGoBannerAndAwards}
            descriptionContent={is_eu ? DescriptionContentEU : DescriptionContent}
            className={qtMerge(is_eu && 'mb-[80px]')}
        >
            <Footer.MainNavContent items={is_eu ? EuFooterNavData : RowFooterNavData} cols="six" />
        </Footer.FooterBlock>
    )
}

export default MainFooter
