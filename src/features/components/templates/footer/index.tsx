import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { qtMerge } from '@deriv/quill-design'
import { EuFooterNavData, RowFooterNavData, socialButtons, warnText } from './data'
import { DerivGoBannerAndAwards } from './banner-and-awards'
import { DescriptionContent, DescriptionContentEU } from './description'
import useRegion from 'components/hooks/use-region'

export const MainFooter = () => {
    const { is_eu } = useRegion()
    return (
        <Footer.FooterBlock
            warningText={!is_eu ? warnText : null}
            socialButtons={socialButtons}
            bannerAndAwards={DerivGoBannerAndAwards}
            descriptionContent={is_eu ? DescriptionContentEU : DescriptionContent}
            className={qtMerge('mb-[80px]')}
        >
            <Footer.MainNavContent items={is_eu ? EuFooterNavData : RowFooterNavData} cols="six" />
        </Footer.FooterBlock>
    )
}

export default MainFooter
