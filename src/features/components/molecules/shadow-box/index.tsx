import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Icon from 'features/components/atoms/icon'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import { Localize, localize } from 'components/localization'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

export type BoxData = {
    heading: TString
    icon_alt: TString
    icon_URL: string
}

type ShadowBoxProps = BoxData & FlexBoxProps<'div'>

const ShadowBox = ({ icon_URL, heading, icon_alt, ...rest }: ShadowBoxProps) => {
    return (
        <Flex.Box padding="4x" className="box_shadow" radius="2x" direction="column" {...rest}>
            <Icon size="large" src={icon_URL} alt={localize(icon_alt)} />
            <Typography.Heading>
                <Localize translate_text={heading} />
            </Typography.Heading>
        </Flex.Box>
    )
}

export default ShadowBox
