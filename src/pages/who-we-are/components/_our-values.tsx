import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { TOurValues } from '../_types'
import { Localize } from 'components/localization'
import { Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const OurValuesSection = styled(SectionContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 16px 56px;
    background-color: var(--color-grey-30);

    @media (max-width: 1255px) {
        align-items: center;
        flex-direction: column;
    }
    @media ${device.tablet} {
        padding: 40px 16px 16px;
    }
`
const StyledHeader = styled(Header)`
    margin: 235px 70px 0 0;
    padding: 0;

    @media ${device.laptop} {
        font-size: 48px;
        line-height: 60px;
    }
    @media (max-width: 1255px) {
        margin: 0 0 40px 0;
        width: unset;
        max-width: 602px;
    }
`
const StyledFlex = styled(Flex)`
    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`
const Card = styled(Flex)<{ index: number }>`
    max-width: 384px;
    padding: 32px 44px 32px 32px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    margin: 0 24px 24px 0;
    margin-top: ${({ index }) => (index === 1 ? '80px' : index === 2 ? '-80px' : 0)};
    border-radius: 8px;

    @media (max-width: 930px) {
        order: ${({ index }) => (index === 2 ? 1 : index === 1 ? 2 : index)};
        margin: 0 0 19px;
    }
`

const OurValues = ({ our_values }: TOurValues) => {
    return (
        <OurValuesSection>
            <StyledHeader as="h2" align="start" type="page-title" width="338px">
                <Localize translate_text={our_values?.header} cms />
            </StyledHeader>
            <StyledFlex width="820px" wrap="wrap">
                {our_values?.values.map(({ header, image, sub_header }, index) => (
                    <Card key={index} index={index} direction="column" ai="start" jc="start">
                        <GatsbyImage image={getImage(image.localFile)} alt="icon" loading="eager" />
                        <Header as="h4" padding="24px 0 8px" size="32px" align="start" type="unset">
                            <Localize translate_text={header} cms />
                        </Header>
                        <Header as="div" weight="normal" size="16px">
                            <Localize translate_text={sub_header} cms />
                        </Header>
                    </Card>
                ))}
            </StyledFlex>
        </OurValuesSection>
    )
}

export default OurValues
