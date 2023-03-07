import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
import './typography.scss'

type TTypographyAlign = 'end' | 'start' | 'center'

type TTypographyTypes =
    | 'main-landing-title'
    | 'display-title'
    | 'page-title'
    | 'section-title'
    | 'sub-section-title'
    | 'main-paragraph'
    | 'sub-paragraph'
    | 'hero'
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'subtitle-1'
    | 'subtitle-2'
    | 'paragraph-1'
    | 'paragraph-2'
    | 'small'

interface ITypographyProps<T extends React.ElementType = 'p'> extends HTMLAttributes<T> {
    as: T
    type?: TTypographyTypes
    align?: TTypographyAlign
    semibold?: boolean
    italic?: boolean
}

const Typography = <T extends React.ElementType>({
    as,
    className,
    align,
    semibold,
    italic,
    type,
    ...rest
}: ITypographyProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ITypographyProps<T>>) => {
    const headingTags =
        as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' || as === 'h5' || as === 'h6'

    const Component = as || 'p'

    const _className = clsx(
        'typography',
        {
            semibold: semibold || as === 'strong',
            italic: italic || as === 'em',
            bodyText: as === 'p' || as === 'em' || as === 'strong',
            [align]: align && (headingTags || as === 'p'),
            [type]: type !== undefined,
        },
        className,
    )

    return <Component className={_className} {...rest} />
}

export default Typography
