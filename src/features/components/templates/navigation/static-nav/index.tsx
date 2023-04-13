import React from 'react'
import NavTemplate from '../template'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/rebranding_logo.png'
import useBreakpoints from 'components/hooks/use-breakpoints'

const StaticNav = () => {
    const { is_mobile_or_tablet } = useBreakpoints()
    return (
        <NavTemplate
            has_centered_items
            has_centered_logo
            renderLogo={() => (
                <Link url={{ type: 'internal', to: '/' }}>
                    <Image
                        src={LogoImage}
                        width={is_mobile_or_tablet ? 48 : 96}
                        height={is_mobile_or_tablet ? 16 : 36}
                    />
                </Link>
            )}
        />
    )
}

export default StaticNav
