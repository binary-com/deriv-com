import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { footerNavData, socialButtons, warnText } from './data'
import { DerivGoBannerAndAwards } from './banner-and-awards'
import { DescriptionContent } from './description'

export const ROWFooter = () => {
    return (
        <Footer.FooterBlock
            warningText={warnText}
            socialButtons={socialButtons}
            bannerAndAwards={DerivGoBannerAndAwards}
            descriptionContent={DescriptionContent}
        >
            <Footer.MainNavContent items={footerNavData} cols="six" />
        </Footer.FooterBlock>
    )
}

export default ROWFooter
