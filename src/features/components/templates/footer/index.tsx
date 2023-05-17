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
import useRegion from 'components/hooks/use-region'

interface FooterProps {
    no_footer_links?: boolean
}

const Footer = ({ no_footer_links = false }: FooterProps) => {
    const { is_ppc } = usePpc()
    const { is_eu, is_cpa_plan } = useRegion()

    const content = useVisibleContent({ content: footerLinks, config: { is_ppc } })

    return (
        <Container.Fixed
            as={'footer'}
            bgcolor="primary"
            className={footer}
            mb={is_eu || is_cpa_plan ? '40x' : undefined}
            pb={is_eu || is_cpa_plan ? '20x' : undefined}
            md={{
                mb: is_eu || is_cpa_plan ? '15x' : undefined,
                pb: is_eu || is_cpa_plan ? '5x' : undefined,
            }}
        >
            <Container.Fluid pt={'20x'}>
                <FooterIcons />
                <Container.Fixed
                    className={footer_grid}
                    padding_block={'5x'}
                    md={{ padding_block: '20x' }}
                >
                    {!no_footer_links && (
                        <Flex.Box justify="between" visible="larger-than-tablet">
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
