import React from 'react'
import { OptionsTopTabData } from './data'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { localize, Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import { isActiveLink } from 'features/components/atoms/link/internal'

const OptionsTopTab = () => {
    return (
        <Flex.Box
            container="fluid"
            justify="center"
            align="start"
            pt={'40x'}
            gap={'10x'}
            padding_inline="10x"
        >
            {OptionsTopTabData.map((item) => (
                <Link url={item.url} key={item.title} no_hover>
                    <Flex.Box
                        justify="center"
                        align="center"
                        direction="col"
                        className="options_top_tab_item"
                        pt={'20x'}
                    >
                        <Image
                            src={isActiveLink(item.url.to) ? item.active_icon : item.icon}
                            alt={localize(item.alt)}
                            width={64}
                            height={64}
                        />
                        <Typography.Paragraph
                            align="center"
                            textcolor={isActiveLink(item.url.to) ? 'brand' : 'secondary'}
                        >
                            <Localize translate_text={item.title} />
                        </Typography.Paragraph>
                    </Flex.Box>
                </Link>
            ))}
        </Flex.Box>
    )
}

export default OptionsTopTab
