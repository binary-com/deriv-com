// import React, { useState } from 'react'
// import type { Swiper } from 'swiper'
// import { SmartPlatformItem } from '../types'
// import PlatformsMainSlider from './platform-main'
// import PlatformImageSlider from './platform-images'
// import Flex from 'features/components/atoms/flex-box'

// interface PlatformSlidersProps {
//     items: SmartPlatformItem[]
// }
// const PlatformSliders = ({ items }: PlatformSlidersProps) => {
//     const [firstSwiper, setFirstSwiper] = useState<Swiper>(null)
//     const [secondSwiper, setSecondSwiper] = useState<Swiper>(null)

//     return (
//         <Flex.Box
//             container="fluid"
//             justify="start"
//             align="center"
//             gap="5x"
//             mt="20x"
//             direction="col-reverse"
//             md={{
//                 direction: 'row',
//                 gap: '10x',
//             }}
//         >
//             <PlatformsMainSlider
//                 items={items}
//                 setSwiper={setFirstSwiper}
//                 connectedSwiper={secondSwiper}
//             />
//             <PlatformImageSlider
//                 items={items}
//                 setSwiper={setSecondSwiper}
//                 connectedSwiper={firstSwiper}
//             />
//         </Flex.Box>
//     )
// }

// export default PlatformSliders

import React from 'react'
import { Flex, SectionContainer } from 'components/containers'
// import PlatformCarousel from 'pages/home/platform-carousel/_platform-carousel'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import PlatformCarousel from 'features/components/templates/our-platform-carousel/platform-carousel'
import Box from 'features/components/atoms/box'

const OurPlatforms = () => {
    const { is_row } = useRegion()

    return (
        <Box
            padding_block="40x"
            // background="#f9fbff"
            // height="fit-content"
            // tabletL={{ height: 'fit-content', pb: 'unset' }}
            // padding="8rem 0 0 0"
        >
            {/* <Flex fd="column" tabletL={{ width: '90%' }}> */}
            <PlatformCarousel />
            {/* </Flex> */}
        </Box>
    )
}

export default OurPlatforms
