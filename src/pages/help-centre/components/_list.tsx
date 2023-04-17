import React from 'react'
import styled from 'styled-components'
import { TListStyle, TList } from '../data/_data-types'
import ImageCard from './_image-card'
import TranslationComponents from './_translation-components'
import { Localize } from 'components/localization'

type TStyledList = {
    list_style: TListStyle
    padding_left: string
}

type TListItem = {
    margin_top: string
    first_child_margin_top?: string
    size?: string
}

const StyledList = styled.ul<TStyledList>`
    list-style: ${({ list_style }) => list_style};
    padding-left: ${({ padding_left }) => padding_left};
`

const ListItem = styled.li<TListItem>`
    color: var(--color-black-3);
    font-size: ${({ size }) => size};
    line-height: 1.5;
    margin-top: ${({ margin_top }) => margin_top};

    &:first-child {
        margin-top: ${({ first_child_margin_top }) => first_child_margin_top};
    }
`

const List = ({
    list_style,
    padding_left,
    margin_top,
    first_child_margin_top,
    items,
    size,
}: TList) => {
    return (
        <StyledList list_style={list_style} padding_left={padding_left || '5rem'}>
            {items.map(({ translation_text, translation_components, sub_items, img }) => (
                <>
                    <ListItem
                        key={translation_text}
                        margin_top={margin_top}
                        first_child_margin_top={first_child_margin_top}
                        size={size || '1.6rem'}
                    >
                        <Localize
                            translate_text={translation_text}
                            components={
                                translation_components &&
                                TranslationComponents(translation_components)
                            }
                        />
                        {img && <ImageCard {...img} />}
                    </ListItem>
                    {sub_items && (
                        <StyledList list_style={sub_items.list_style} padding_left="5rem">
                            {sub_items.items.map(({ translation_text, translation_components }) => (
                                <ListItem
                                    key={translation_text}
                                    margin_top={sub_items.margin_top}
                                    size={size || '1.6rem'}
                                >
                                    <Localize
                                        translate_text={translation_text}
                                        components={
                                            translation_components &&
                                            TranslationComponents(translation_components)
                                        }
                                    />
                                </ListItem>
                            ))}
                        </StyledList>
                    )}
                </>
            ))}
        </StyledList>
    )
}

export default List
