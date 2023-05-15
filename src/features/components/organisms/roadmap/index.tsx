import React from 'react'
import { iframe } from './styles.module.scss'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { TString } from 'types/generics'

export type RoadmapType = {
    paragraph: TString
    frame: string
    link: string
}

interface RoadmapProps {
    data: RoadmapType
}

const Roadmap = ({ data }: RoadmapProps) => {
    const { is_mobile } = useBreakpoints()
    return (
        <Container.Fixed as="section" padding_block="20x" md={{ padding_block: '40x' }}>
            <Container.Fluid>
                <Typography.Heading as="h2" size="large" align="center" mb="4x" md={{ mb: '20x' }}>
                    <Localize translate_text="_t_What’s next?_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" size={is_mobile ? 'xlarge' : 'xxl'} mb="20x">
                    <Localize translate_text={data.paragraph} />
                </Typography.Paragraph>
                <Flex.Box direction="col" align="center">
                    <iframe
                        src={data.frame}
                        frameBorder="0"
                        height="100%"
                        width="100%"
                        className={iframe}
                    ></iframe>
                    <LinkButton.Secondary
                        url={{ type: 'non-company', href: data.link }}
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
