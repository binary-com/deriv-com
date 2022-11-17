import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

type NumbersContentType = {
    title: React.ReactElement
    subtitle: React.ReactElement
}

const NumberSection = styled(SectionContainer)`
    display: Flex;
    background-color: var(--color-grey-25);
    padding: 4rem 12rem;
    align-items: center;
    justify-content: center;

    @media ${device.laptopM} {
        padding: 4rem 4rem;
    }
    @media ${device.tablet} {
        flex-direction: column;
        padding: 4rem 4rem;
        justify-content: center;
    }
    @media ${device.mobileL} {
        padding: 24px 124px;

        * {
            width: 140px;
        }
    }
`
const Splitter = styled.div`
    height: 6rem;
    width: 0.1rem;
    background-color: var(--color-grey-26);
    margin-left: 2.4rem;
    margin-right: 2.4rem;

    @media ${device.tablet} {
        display: none;
    }
`
const StyledHeader = styled(Header)`
    width: auto;
    line-height: 1.5;

    @media ${device.tablet} {
        margin-bottom: 8px;
        font-size: 32px;
    }
    @media ${device.mobileL} {
        text-align: center;
    }
`
const StyledText = styled(Text)`
    @media ${device.tablet} {
        font-size: 16px;
    }
    @media ${device.mobileL} {
        text-align: center;
    }
`
const Number = styled(Flex)`
    align-items: center;
    width: unset;

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 16px;
    }
`

const numbers_content: NumbersContentType[] = [
    {
        title: <Localize translate_text="330K+" />,
        subtitle: <Localize translate_text="clients on Deriv MT5" />,
    },
    {
        title: <Localize translate_text="100+" />,
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        title: <Localize translate_text="24/7" />,
        subtitle: <Localize translate_text="trading" />,
    },
]
const numbers_content_eu: NumbersContentType[] = [
    {
        title: <Localize translate_text="475K+" />,
        subtitle: <Localize translate_text="active traders" />,
    },
    {
        title: <Localize translate_text="150+" />,
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        title: <Localize translate_text="24/7" />,
        subtitle: <Localize translate_text="trading" />,
    },
]

const Numbers = () => {
    const { is_uk_eu } = useCountryRule()
    const contents = is_uk_eu ? numbers_content_eu : numbers_content

    return (
        <NumberSection>
            <Flex tablet_direction="column" max_width="1200px" jc="space-between">
                {contents.map((content, index) => (
                    <Number key={index}>
                        <StyledHeader as="p" type="page-title">
                            {content.title}
                        </StyledHeader>
                        <Splitter />
                        <StyledText>{content.subtitle}</StyledText>
                    </Number>
                ))}
            </Flex>
        </NumberSection>
    )
}

export default Numbers
