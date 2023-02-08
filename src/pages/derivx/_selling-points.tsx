import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Text } from 'components/elements/typography'
import { SectionContainer, Container, Flex } from 'components/containers'
import device from 'themes/device'
import { TString } from 'types/generics'

type SellingPointsType = {
    title: string | TString
    subtitle: TString
}

const HeadingText = styled(Text)`
    font-weight: bold;
    font-size: 48px;
    border-right: 1px solid var(--color-grey-21);
    padding-right: 24px;

    @media ${device.tablet} {
        border-right: unset;
        padding-right: unset;
        text-align: center;
        font-size: 24px;
    }
`

const SubText = styled(Text)`
    padding-left: 24px;
    margin: auto 0;
    @media ${device.tablet} {
        padding-left: unset;
        text-align: center;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tablet} {
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: unset;
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    direction: ltr;
`

const selling_points: SellingPointsType[] = [
    { title: '100+', subtitle: '_t_tradable assets_t_' },
    { title: '24/7', subtitle: '_t_trading_t_' },
    { title: '_t_Zero_t_', subtitle: '_t_commission_t_' },
]

const SellingPoints = () => {
    return (
        <StyledSectionContainer padding="40px 0" background="grey-25">
            <Container>
                <Flex tablet_direction="column">
                    {selling_points.map(({ title, subtitle }, index) => {
                        return (
                            <StyledFlex tablet_direction="column" key={index}>
                                <HeadingText>
                                    {typeof title == 'string' ? (
                                        title
                                    ) : (
                                        <Localize translate_text={title} />
                                    )}
                                </HeadingText>
                                <SubText>
                                    <Localize translate_text={subtitle} />
                                </SubText>
                            </StyledFlex>
                        )
                    })}
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default SellingPoints
