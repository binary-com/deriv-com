import React from 'react'
import { useSwiperSlide } from 'swiper/react'
import { PlatformItem } from '../../types'
import { main_item_active, main_item, description_grid_item } from './platforms-main.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import Image from 'features/components/atoms/image'

interface MainSliderItemProps {
    item: PlatformItem
}
const MainSliderItem = ({ item }: MainSliderItemProps) => {
    const swiperSlide = useSwiperSlide()

    return (
        <div
            className={dclsx(main_item, {
                [main_item_active]: swiperSlide.isActive,
            })}
        >
            <Image src={item.icon} width={40} height={40} />
            <Typography.Heading as="h3" size="xxs">
                <Localize translate_text={item.title} />
            </Typography.Heading>
            {swiperSlide.isActive && (
                <Flex.Box
                    direction="col"
                    justify="start"
                    align="start"
                    gap={'5x'}
                    className={description_grid_item}
                >
                    <Typography.Paragraph>
                        <Localize translate_text={item.description} />
                    </Typography.Paragraph>
                    <Link url={item.url} size="large" textcolor="brand">
                        <Localize translate_text="_t_Learn more >_t_" />
                    </Link>
                </Flex.Box>
            )}
        </div>
    )
}

export default MainSliderItem
