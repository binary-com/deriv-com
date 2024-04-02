import React from 'react'
import { box_shadow, styled_heading } from './style.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import { Localize, localize } from 'components/localization'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'
import dclsx from 'features/utils/dclsx'

export type BoxData = {
    heading: TString
    icon_alt: TString
    icon_URL: string
}

type ShadowBoxProps = BoxData & FlexBoxProps<'div'>

const ShadowBox = ({ icon_URL, heading, icon_alt, ...rest }: ShadowBoxProps) => {
    return (
        <Flex.Box grow="1" padding="12x" className={dclsx(box_shadow)} direction="col" {...rest}>
            <Image width={48} height={48} src={icon_URL} alt={localize(icon_alt)} />
            <Typography.Heading size="xs" as="h3" className={dclsx(styled_heading)} mt="12x">
                <Localize translate_text={heading} />
            </Typography.Heading>
        </Flex.Box>
    )
}

export default ShadowBox
