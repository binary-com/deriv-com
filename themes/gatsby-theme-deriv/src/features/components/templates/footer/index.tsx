import React, { useState } from 'react'
import { Footer } from '@deriv-com/blocks'
import { qtJoin } from '@deriv/quill-design'
import { EuFooterNavData, RowFooterNavData, socialButtonsROW, warnText } from './data'
import { DerivGoBanner } from './deriv-go-banner'
import { IIPAward } from './iip-award'
import { DescriptionContent } from './description'
import useRegion from 'components/hooks/use-region'
import useBuildVariant from 'features/hooks/use-build-variant'

export const MainFooter = () => {
    const { region } = useBuildVariant()
    const { is_cpa_plan } = useRegion()
    const [social_buttons] = useState(socialButtonsROW)
    const [warn_text] = useState(warnText)

    return (
        <Footer.FooterBlock
            warningText={warn_text}
            socialButtons={social_buttons}
            banner={DerivGoBanner}
            awards={IIPAward}
            descriptionContent={DescriptionContent}
            className={qtJoin((region === 'eu' || is_cpa_plan) && 'mb-[120px] lg:mb-[80px]')}
        >
            <Footer.MainNavContent
                items={region === 'eu' ? EuFooterNavData : RowFooterNavData}
                cols="six"
            />
        </Footer.FooterBlock>
    )
}

export default MainFooter
