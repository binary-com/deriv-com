import React from 'react'
import { description_section, number_box } from './description.module.scss'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import Container from 'features/components/atoms/container'

interface TradingPlatformDescriptionProps {
    title: TString
    subtitle: TString
}
const TradeDescription = ({ title, subtitle }: TradingPlatformDescriptionProps) => {
    return (
        <Container.Fluid margin_block={'20x'} margin_inline={'8x'} md={{ margin_block: '40x' }}>
            <FlexBox.Box direction={'col'} className={description_section}>
                <Typography.Heading align={'center'}>
                    <Localize translate_text={title} />
                </Typography.Heading>
                <Typography.Paragraph align={'center'} mt="8x">
                    <Localize translate_text={subtitle} />
                </Typography.Paragraph>
            </FlexBox.Box>
        </Container.Fluid>
    )
}
export default TradeDescription
