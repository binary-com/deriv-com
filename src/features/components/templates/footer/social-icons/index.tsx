import React from 'react'
import { socialMediaAccounts } from './data'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import useVisibleContent from 'components/hooks/use-visible-content'
import useRegion from 'components/hooks/use-region'

const FooterSocialIcons = () => {
    const current_path = getLocationPathname()
    const is_career_page = current_path === '/careers/'
    const { is_eu } = useRegion()
    const icons = useVisibleContent({
        content: socialMediaAccounts,
        config: { is_career_page, is_eu },
    })

    return (
        <Flex.Box justify="center" align="center" gap="12x">
            {icons.map(({ data, id }) => {
                return (
                    <Link key={id} url={data.url}>
                        <Image src={data.icon} alt={data.image_alt} width={32} height={32} />
                    </Link>
                )
            })}
        </Flex.Box>
    )
}

export default FooterSocialIcons
