import React from 'react'
import { banner_content } from './data'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction, Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'

const DP2HeroContent = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <Flex.Box
            justify="start"
            direction="col"
            align="start"
            gap="4x"
            basis="6-12"
            dir={get_lang_direction()}
        >
            <div className="at-visible-phone-and-tablet">{banner_content.logo_mobile}</div>
            <div className="at-visible-larger-than-tablet">{banner_content.logo_desktop}</div>
            <Typography.Heading as="h1" size={is_mobile ? 'large' : 'xxxl'}>
                <Localize translate_text={banner_content.heading} />
            </Typography.Heading>
            <Typography.Paragraph size="xlarge">
                <Localize translate_text={banner_content.description} />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default DP2HeroContent
