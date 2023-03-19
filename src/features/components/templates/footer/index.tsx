import React from 'react'
import { footer_grid } from './footer.module.scss'
import { footerLinks } from './data'
import FooterLinksColumn from './links-column'
import Disclaimer from './disclaimer'
import FooterIcons from './footer-icons'
import usePpc from 'features/hooks/use-ppc'
import FlexBox from 'features/components/atoms/flex-box'
import useVisibleContent from 'components/hooks/use-visible-content'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useRegion from 'components/hooks/use-region'

interface FooterProps {
    no_footer_links?: boolean
}

const Footer = ({ no_footer_links = false }: FooterProps) => {
    const { is_ppc } = usePpc()
    const { is_mobile_or_tablet } = useBreakpoints()
    const { is_eu, is_cpa_plan } = useRegion()

    const content = useVisibleContent({ content: footerLinks, config: { is_ppc } })

    const show_links = !is_mobile_or_tablet && !no_footer_links

    const has_margin_for_cfd_warning = is_eu || is_cpa_plan

    return (
        <Container.Fixed
            as={'footer'}
            bgcolor="primary"
            mb={has_margin_for_cfd_warning ? '25x' : undefined}
        >
            <Container.Fluid>
                <FooterIcons />
                <Container.Fixed className={footer_grid}>
                    {show_links && (
                        <Container.Fixed padding_block="15x">
                            <FlexBox justify="space-between" padding_block="10x">
                                {content.map((contentItem) => (
                                    <FooterLinksColumn key={contentItem.id} item={contentItem} />
                                ))}
                            </FlexBox>
                        </Container.Fixed>
                    )}
                    <Disclaimer />
                </Container.Fixed>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default Footer
