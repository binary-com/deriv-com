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

const selling_points: SellingPointsType[] = [
    {
        title: '100+',
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        title: '24/7',
        subtitle: <Localize translate_text="trading" />,
    },
    {
        title: <Localize translate_text="Zero" />,
        subtitle: <Localize translate_text="commission" />,
    },
]

const SellingPoints = () => {
    return (
        <SectionContainer padding="40px 0" background="grey-25">
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
        </SectionContainer>
    )
}

export default SellingPoints
