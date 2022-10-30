import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import { AnswerType } from '../data/_data-types'
import TranslationComponents from './_translation-components'
import List from './_list'
import device from 'themes/device'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import { DerivStore } from 'store'

type TWrapper = {
    margin_left?: string
}

type AnswerCardType = TWrapper & {
    question: TString
    label: string
    answer?: AnswerType
    RenderProp?: FunctionComponent
}

export const Wrapper = styled.div<TWrapper>`
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

const AnswerCard = ({ question, answer, RenderProp }: AnswerCardType) => {
    const { is_eu_country } = useContext(DerivStore)

    return (
        <Wrapper>
            <Header size="2.4rem" mb="2.4rem">
                <Localize translate_text={question} />
            </Header>
            {RenderProp && <RenderProp />}
            {answer &&
                answer.map(
                    ({
                        translation_text,
                        translation_components,
                        has_margin_top,
                        list,
                        margin_top,
                        eu_translation_text,
                    }) => (
                        <>
                            <Header
                                key={translation_text}
                                size="1.6rem"
                                weight="normal"
                                mt={has_margin_top ? '1.7rem' : margin_top}
                            >
                                <Localize
                                    translate_text={
                                        is_eu_country && eu_translation_text
                                            ? eu_translation_text
                                            : translation_text
                                    }
                                    components={
                                        translation_components &&
                                        TranslationComponents(translation_components)
                                    }
                                />
                            </Header>

                            {list && <List {...list} />}
                        </>
                    ),
                )}
        </Wrapper>
    )
}

export default AnswerCard
