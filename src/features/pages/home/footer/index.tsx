import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { EuFooterNavData, RowFooterNavData, socialButtons, warnText } from './data'
import { DerivGoBannerAndAwards } from './banner-and-awards'
import { DescriptionContent } from './description'
import useRegion from 'components/hooks/use-region'

export const ROWFooter = () => {
    const { is_eu } = useRegion()
    return (
        <Footer.FooterBlock
            warningText={warnText}
            socialButtons={socialButtons}
            bannerAndAwards={DerivGoBannerAndAwards}
            descriptionContent={DescriptionContent}
        >
            <Footer.MainNavContent items={is_eu ? EuFooterNavData : RowFooterNavData} cols="six" />
        </Footer.FooterBlock>
    )
}

export default ROWFooter
