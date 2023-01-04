import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { TAnswer } from '../data/_data-types'
import ImageCard from './_image-card'
import TranslationComponents from './_translation-components'
import List from './_list'
import device from 'themes/device'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { RegionContext } from 'store/region-context'
import { TString } from 'types/generics'

type AnswerCardType = {
    label: string
    question: TString
    answer?: TAnswer
    renderProp?: () => ReactNode
}

export const Wrapper = styled.div`
    max-width: 71.2rem;
    margin-left: 12.6rem;
    margin-top: 1.6rem;
    height: 100%;

    @media ${device.laptopL} {
        margin-left: 2rem;
    }

    @media ${device.tabletL} {
        margin-left: 0;
    }
`

const AnswerCard = ({ question, answer, renderProp }: AnswerCardType) => {
    const { is_eu } = React.useContext(RegionContext)

    return (
        <Wrapper>
            <Header size="2.4rem" mb="2.4rem">
                <Localize translate_text={question} />
            </Header>
            {renderProp?.()}
            {answer?.map(
                ({
                    translation_text,
                    eu_translation_text,
                    translation_components,
                    has_margin_top,
                    margin_top,
                    list,
                    img,
                }) => {
                    const text =
                        is_eu && eu_translation_text ? eu_translation_text : translation_text
                    const component =
                        translation_components && TranslationComponents(translation_components)

                    return (
                        <>
                            <Header
                                key={translation_text}
                                size="16px"
                                weight="normal"
                                mt={has_margin_top ? '1.7rem' : margin_top}
                            >
                                {translation_text && (
                                    <Localize translate_text={text} components={component} />
                                )}
                            </Header>
                            {img && <ImageCard {...img} />}
                            {list && <List {...list} />}
                        </>
                    )
                },
            )}
        </Wrapper>
    )
}

export default AnswerCard
