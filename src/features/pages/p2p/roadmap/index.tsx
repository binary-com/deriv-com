import React from 'react'
import { iframe } from './styles.module.scss'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import useBreakpoints from 'components/hooks/use-breakpoints'

const derivP2PPortalData = {
    paragraph: (
        <Localize translate_text="_t_Take a look at Deriv P2P’s product roadmap, give us your feedback on what we’re building and suggestions on what to build next._t_" />
    ),
    frame: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m?hide_header=1',
    link: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m',
}
const Roadmap = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <Container.Fixed as="section" padding_block="20x" md={{ padding_block: '40x' }}>
            <Container.Fluid>
                <Typography.Heading as="h2" size="large" align="center" mb="4x" md={{ mb: '20x' }}>
                    <Localize translate_text="_t_What’s next?_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" size={is_mobile ? 'xlarge' : 'xxl'} mb="20x">
                    {derivP2PPortalData.paragraph}
                </Typography.Paragraph>
                <Flex.Box direction="col" align="center">
                    <iframe
                        src={derivP2PPortalData.frame}
                        frameBorder="0"
                        height="100%"
                        width="100%"
                        className={iframe}
                    ></iframe>
                    <LinkButton.Secondary
                        url={{ type: 'non-company', href: derivP2PPortalData.link }}
                        outlined
                        mt="20x"
                    >
                        <Localize translate_text="_t_Go to portal_t_" />
                    </LinkButton.Secondary>
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default Roadmap
