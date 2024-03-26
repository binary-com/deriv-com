import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { TAnswer } from '../data/_data-types'
import ImageCard from './_image-card'
import TranslationComponents from './_translation-components'
import List from './_list'
import device from 'themes/device'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useBuildVariant from 'features/hooks/use-build-variant'

type AnswerCardType = {
    label: string
    question: TString
    answer?: TAnswer
    renderProp?: () => ReactNode
    margin?: string
    flex?: boolean
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

const AnswerCard = ({ question, answer, renderProp, margin, flex }: AnswerCardType) => {
    const { region } = useBuildVariant()
    const { is_mobile } = useBreakpoints()

    return (
        <Wrapper>
            <Header size="2.4rem" as="p" mb="2.4rem">
                <Localize translate_text={question} />
            </Header>
            {answer?.map(
                ({
                    translation_text,
                    eu_translation_text,
                    translation_components,
                    has_margin_top,
                    margin_top,
                    list,
                    img,
                    color,
                    size,
                }) => {
                    const text =
                    region === "eu" && eu_translation_text ? eu_translation_text : translation_text
                    const component =
                        translation_components && TranslationComponents(translation_components)

                    return (
                        <React.Fragment key={translation_text}>
                            <Header
                                as="p"
                                size={size ? size : '16px'}
                                weight="normal"
                                mt={has_margin_top ? '1.7rem' : margin_top}
                                color={color ? color : 'var(--color-black-3)'}
                            >
                                {translation_text && (
                                    <Localize translate_text={text} components={component} />
                                )}
                            </Header>
                            {img && <ImageCard {...img} />}
                            {list && <List {...list} />}
                        </React.Fragment>
                    )
                },
            )}
            <div
                style={{
                    margin: `${margin}`,
                    display: `${flex ? 'flex' : 'block'}`,
                    justifyContent: `${is_mobile ? 'center' : 'start'}`,
                }}
            >
                {renderProp?.()}
            </div>
        </Wrapper>
    )
}

export default AnswerCard
