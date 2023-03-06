import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
import './typography.scss'

type TTypographyAlign = 'end' | 'start' | 'center'

interface ITypographyProps<T extends React.ElementType = 'p'>
    extends HTMLAttributes<HTMLHeadingElement> {
    as: T
    align?: TTypographyAlign
    semibold?: boolean
    italic?: boolean
    small?: boolean
}

const Typography = <T extends React.ElementType>({
    as,
    className,
    align,
    semibold,
    italic,
    small,
    ...rest
}: ITypographyProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ITypographyProps<T>>) => {
    const headingTags =
        as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' || as === 'h5' || as === 'h6'

    const Component = as || 'p'

    const _className = clsx(
        {
            [align]: align && (headingTags || as === 'p'),
            semibold: semibold || as === 'strong',
            italic: italic || as === 'em',
            small: small || as === 'small',
            bodyText: as === 'p' || as === 'em' || as === 'strong',
            h1: as === 'h1',
            h2: as === 'h2',
            h3: as === 'h3',
            h4: as === 'h4',
            h5: as === 'h5',
            h6: as === 'h6',
            heading: headingTags,
            paragraph: as === 'p',
        },
        className,
    )

    return <Component className={_className} {...rest} />
}

export default Typography
