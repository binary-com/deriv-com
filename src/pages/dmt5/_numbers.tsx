import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

type NumbersContentType = {
    title: TString
    subtitle: TString
}

const NumberSection = styled(SectionContainer)`
    direction: ltr;
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
    { title: '_t_330K+_t_', subtitle: '_t_clients on Deriv MT5_t_' },
    { title: '_t_100+_t_', subtitle: '_t_tradable assets_t_' },
    { title: '_t_24/7_t_', subtitle: '_t_trading_t_' },
]

const numbers_content_eu: NumbersContentType[] = [
    { title: '_t_475K+_t_', subtitle: '_t_active traders_t_' },
    { title: '_t_150+_t_', subtitle: '_t_tradable assets_t_' },
    { title: '_t_24/7_t_', subtitle: '_t_trading_t_' },
]

const Numbers = () => {
    const { is_eu } = useRegion()
    const contents = is_eu ? numbers_content_eu : numbers_content

    return (
        <NumberSection>
            <Flex tablet_direction="column" max_width="1200px" jc="space-between">
                {contents.map(({ title, subtitle }) => (
                    <Number key={title}>
                        <StyledHeader as="p" type="page-title">
                            <Localize translate_text={title} />
                        </StyledHeader>
                        <Splitter />
                        <StyledText>
                            <Localize translate_text={subtitle} />
                        </StyledText>
                    </Number>
                ))}
            </Flex>
        </NumberSection>
    )
}

export default Numbers
