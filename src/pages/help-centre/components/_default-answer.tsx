import React from 'react'
import styled from 'styled-components'
import { AnswerType } from './_data'
import TranslationComponents from './_translation-components'
import device from 'themes/device'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type TWrapper = {
    margin_left?: string
}

type DefaultAnswerType = TWrapper & {
    question: TString
    label: string
    answer?: AnswerType
}

const Wrapper = styled.div<TWrapper>`
    max-width: 71.2rem;
    margin-left: 12.6rem;
    margin-top: 1.6rem;
    height: 100%;

    @media ${device.laptopL} {
        margin-left: ${({ margin_left }) => margin_left ?? '12.6rem'};
    }

    @media ${device.tabletL} {
        margin-left: 0;
    }
`

const DefaultAnswer = ({ question, answer }: DefaultAnswerType) => {
    return (
        <Wrapper>
            <Header size="2.4rem" mb="2.4rem">
                <Localize translate_text={question} />
            </Header>

            {answer &&
                answer.map(({ translation_text, translation_components, has_margin_top }) => (
                    <Header
                        key={translation_text}
                        size="1.6rem"
                        weight="normal"
                        mt={has_margin_top ? '1.7rem' : '0'}
                    >
                        <Localize
                            translate_text={translation_text}
                            components={
                                translation_components &&
                                TranslationComponents(translation_components)
                            }
                        />
                    </Header>
                ))}
        </Wrapper>
    )
}

export default DefaultAnswer
