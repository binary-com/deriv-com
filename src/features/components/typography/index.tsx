import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
import * as styles from './typography.module.scss'

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

    // const inlineTags = as === 'span' || as === 'small' || as === 'em' || as === 'strong'

    const Component = as || 'p'

    const _className = clsx(
        styles.typography,
        {
            // only set text alignment of block level elements
            [styles[align]]: align && (headingTags || as === 'p'),
            [styles.semibold]: semibold || as === 'strong',
            [styles.italic]: italic || as === 'em',
            [styles.small]: small || as === 'small',
            [styles.bodyText]: as === 'p' || as === 'em' || as === 'strong',
            [styles.h1]: as === 'h1',
            [styles.h2]: as === 'h2',
            [styles.h3]: as === 'h3',
            [styles.h4]: as === 'h4',
            [styles.h5]: as === 'h5',
            [styles.h6]: as === 'h6',
            [styles.heading]: headingTags,
            [styles.paragraph]: as === 'p',
        },
        className,
    )

    return <Component className={_className} {...rest} />
}

export default Typography
