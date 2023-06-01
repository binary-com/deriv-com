import React, { ReactElement } from 'react'
import BannerText from './banner-text'
import { image_container } from './styles.module.scss'
import { HomepageBannerType } from './types'
import Flex from 'features/components/atoms/flex-box'

const DesktopWrapper = ({ item }: { item: HomepageBannerType }) => {
    return (
        <>
            <Flex.Box container="fluid" direction="row" justify="start" align="start">
                <BannerText item={item} />
                <div className={image_container}>{item.image_tablet}</div>
            </Flex.Box>
        </>
    )
}

export default DesktopWrapper
