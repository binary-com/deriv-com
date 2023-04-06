import React from 'react'
import { footer_grid, footer } from './footer.module.scss'
import { footerLinks } from './data'
import FooterLinksColumn from './links-column'
import Disclaimer from './disclaimer'
import FooterIcons from './footer-icons'
import usePpc from 'features/hooks/use-ppc'
import Flex from 'features/components/atoms/flex-box'
import useVisibleContent from 'components/hooks/use-visible-content'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'

interface FooterProps {
    no_footer_links?: boolean
}

const Footer = ({ no_footer_links = false }: FooterProps) => {
    const { is_ppc } = usePpc()
    const { is_mobile_or_tablet } = useBreakpoints()

    const content = useVisibleContent({ content: footerLinks, config: { is_ppc } })

    const show_links = !is_mobile_or_tablet && !no_footer_links

    return (
        <Container.Fixed as={'footer'} bgcolor="primary" className={footer}>
            <Container.Fluid pt={'20x'}>
                <FooterIcons />
                <Container.Fixed className={footer_grid} padding_block={'40x'}>
                    {show_links && (
                        <Flex.Box justify="between">
                            {content.map((contentItem) => (
                                <FooterLinksColumn key={contentItem.id} item={contentItem} />
                            ))}
                        </Flex.Box>
                    )}
                    <Disclaimer />
                </Container.Fixed>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default Footer
