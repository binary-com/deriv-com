import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Text } from 'components/elements/typography'
import { SectionContainer, Container, Flex } from 'components/containers'
import device from 'themes/device'

type SellingPointsType = {
    title: string | ReactElement
    subtitle: ReactElement
}

const HeadingText = styled(Text)`
    font-weight: bold;
    font-size: 48px;
    padding-right: 24px;

    @media ${device.tablet} {
        padding-right: unset;
        text-align: center;
        font-size: 24px;
    }
`

const SubText = styled(Text)`
    margin: auto 0;

    @media ${device.tablet} {
        padding-left: unset;
        text-align: center;
    }
`

const StyledFlex = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    {
        title: '100+',
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        title: <Localize translate_text="Zero" />,
        subtitle: <Localize translate_text="commission" />,
    },
    {
        title: '24/7',
        subtitle: <Localize translate_text="trading" />,
    },
]

const SellingPoints = () => {
    return (
        <StyledSectionContainer padding="40px 0">
            <Container>
                <Flex tablet_direction="column">
                    {selling_points.map((selling_point, index) => {
                        return (
                            <StyledFlex tablet_direction="column" key={index}>
                                <HeadingText>{selling_point.title}</HeadingText>
                                <SubText>{selling_point.subtitle}</SubText>
                            </StyledFlex>
                        )
                    })}
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default SellingPoints
