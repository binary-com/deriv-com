import React from 'react'
import styled from 'styled-components'
import { our_values } from './_data'
import { localize } from 'components/localization'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
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
const Card = styled(Flex)`
    max-width: 384px;
    padding: 32px 44px 32px 32px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    margin: 0 24px 24px 0;
    margin-top: ${(props) => (props.index === 1 ? '80px' : props.index === 2 ? '-80px' : 0)};
    border-radius: 8px;

    @media (max-width: 930px) {
        order: ${(props) => (props.index === 2 ? 1 : props.index === 1 ? 2 : props.index)};
        margin: 0 0 19px;
    }
`

const OurValues = () => {
    return (
        <OurValuesSection>
            <StyledHeader as="h2" align="left" type="page-title" width="338px">
                {localize('Our values are the fabric of our culture')}
            </StyledHeader>
            <StyledFlex width="820px" wrap="wrap">
                {our_values.map(({ title, icon, text }, index) => (
                    <Card key={index} index={index} direction="column" ai="start" jc="start">
                        <img src={icon} alt="icon" />
                        <Header as="h4" padding="24px 0 8px" size="32px" align="left" type="unset">
                            {title}
                        </Header>
                        <Text size="16px">{text}</Text>
                    </Card>
                ))}
            </StyledFlex>
        </OurValuesSection>
    )
}

export default OurValues
