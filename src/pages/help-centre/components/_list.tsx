import React from 'react'
import styled from 'styled-components'
import { TListStyle, TList } from '../data/_data-types'
import ImageCard from './_image-card'
import TranslationComponents from './_translation-components'
import { Localize } from 'components/localization'

type UlType = {
    list_style: TListStyle
    padding_left: string
}

type LiType = {
    margin_top: string
    first_child_margin_top?: string
}

const Ul = styled.ul<UlType>`
    list-style: ${({ list_style }) => list_style};
    padding-left: ${({ padding_left }) => padding_left};
`

const Li = styled.li<LiType>`
    color: var(--color-black-3);
    font-size: 1.6rem;
    line-height: 1.5;
    margin-top: ${({ margin_top }) => margin_top};

    &:first-child {
        margin-top: ${({ first_child_margin_top }) => first_child_margin_top};
    }
`

const List = ({ list_style, padding_left, margin_top, first_child_margin_top, items }: TList) => {
    return (
        <Ul list_style={list_style} padding_left={padding_left || '5rem'}>
            {items.map(({ translation_text, translation_components, sub_items, img }) => (
                <>
                    <Li
                        key={translation_text}
                        margin_top={margin_top}
                        first_child_margin_top={first_child_margin_top}
                    >
                        <Localize
                            translate_text={translation_text}
                            components={
                                translation_components &&
                                TranslationComponents(translation_components)
                            }
                        />
                        {img && <ImageCard {...img} />}
                    </Li>
                    {sub_items && (
                        <Ul list_style={sub_items.list_style} padding_left="5rem">
                            {sub_items.items.map(({ translation_text, translation_components }) => (
                                <Li key={translation_text} margin_top={sub_items.margin_top}>
                                    <Localize
                                        translate_text={translation_text}
                                        components={
                                            translation_components &&
                                            TranslationComponents(translation_components)
                                        }
                                    />
                                </Li>
                            ))}
                        </Ul>
                    )}
                </>
            ))}
        </Ul>
    )
}

export default List
