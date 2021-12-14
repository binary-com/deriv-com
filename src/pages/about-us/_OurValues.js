import React from 'react'
import styled from 'styled-components'
import { our_values } from './_data'
import { localize } from 'components/localization'
import { SectionContainer, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

const OurValuesSection = styled(SectionContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 16px 56px;
    background-color: var(--color-grey-30);

    h2 {
        width: 338px;
        margin: 0 70px 0 0;
        padding: 0;
        @media ${device.laptop} {
            font-size: 48px;
        }
    }

    @media (max-width: 1255px) {
        align-items: center;
        flex-direction: column;

        h2 {
            margin: 0 0 40px 0;
            width: unset;
            text-align: center;
            max-width: 602px;
        }
    }

    @media ${device.tablet} {
        padding: 40px 16px 16px;
    }
`

const StyledBox = styled(Box)`
    width: 820px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`

const Card = styled(Box)`
    max-width: 384px;
    height: 272px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 32px 44px 32px 32px;
    background-color: var(--color-white);
    margin: 0 24px 24px 0;
    margin-top: ${(props) => (props.index === 1 ? '80px' : props.index === 2 ? '-80px' : 0)};

    ${Header} {
        padding: 24px 0 8px;
    }
    @media (max-width: 930px) {
        margin: 0 0 19px;
        height: unset;
    }

    border-radius: 8px;
`

const OurValues = () => {
    return (
        <OurValuesSection>
            <Header as="h2" size="48px" align="left" type="page-title">
                {localize('Our values are the fabric of our culture')}
            </Header>
            <StyledBox>
                {our_values.map((card, index) => (
                    <Card key={card.title} index={index}>
                        <img src={card.icon} alt="" />
                        <Header as="h4" size="32px" align="left">
                            {card.title}
                        </Header>
                        <Text size="16px">{card.text} </Text>
                    </Card>
                ))}
            </StyledBox>
        </OurValuesSection>
    )
}

export default OurValues
