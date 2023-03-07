import React from 'react'
import styled from 'styled-components'
import { THero } from '../_types'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const FirstSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 16px 24px;

    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`
const StyledHeader = styled(Header)`
    max-width: 742px;
    padding: 0;

    @media ${device.laptop} {
        font-size: 48px;
        line-height: 60px;
        text-align: center;
    }
`

const StyledFirstSectionText = styled(Header)`
    max-width: 792px;
    padding: 0 0 40px 0;
    line-height: 36px;
    font-weight: 400;

    @media ${device.laptop} {
        padding: 0 0 24px 0;
    }
`
type TFirstSectionTexts = {
    text: string
}
const MakeTrading = ({ hero }: THero) => {
    const first_section_texts: TFirstSectionTexts[] = [
        { text: hero?.first_paragraph },
        { text: hero?.second_paragraph },
        { text: hero?.third_paragraph },
    ]
    return (
        <FirstSectionContainer padding="120px 0 80px" background="var(--color-white)">
            {first_section_texts?.map(({ text }) => (
                <StyledFirstSectionText as="p" type="unset" key={text} size="24px">
                    {text}
                </StyledFirstSectionText>
            ))}
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {hero?.sub_header}
            </StyledHeader>
        </FirstSectionContainer>
    )
}

export default MakeTrading
