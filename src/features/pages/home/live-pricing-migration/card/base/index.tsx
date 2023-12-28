import React from 'react'
import { Heading, Text, qtMerge } from '@deriv/quill-design'
import clsx from 'clsx'
// import CustomLink from '@deriv-com/components';
import { CardContent } from '../types'

export interface BaseCardProps extends Omit<CardContent, 'id'> {
    contentPosition: 'bottom' | 'top' | 'start' | 'end'
}

const contentVariantClass = {
    bottom: 'flex-col',
    top: 'flex-col-reverse',
    start: 'flex-col lg:flex-row-reverse',
    end: 'flex-col lg:flex-row',
}

const bgColorVariantClass = {
    light: 'bg-background-primary-container',
    gray: 'bg-solid-slate-75',
}

const textColorVariantClass = {
    light: 'text-typography-prominent',
    gray: 'text-solid-slate-1400',
}

const sizeVariantComponents = {
    xs: Heading.H4,
    sm: Heading.H4,
    md: Heading.H3,
    lg: Heading.H2,
}

const sizeVariantContainerGap = {
    xs: 'gap-gap-lg p-general-md',
    sm: 'gap-gap-lg p-general-lg',
    md: 'gap-gap-xl p-general-2xl',
    lg: 'gap-gap-2xl p-general-2xl',
}

const sizeVariantTextGap = {
    xs: 'gap-gap-md',
    sm: 'gap-gap-md',
    md: 'gap-gap-md',
    lg: 'gap-gap-lg',
}

export const BaseCard: React.FC<BaseCardProps> = ({
    header,
    description,
    children,
    content,
    icon,
    link,
    className,
    contentPosition,
    align,
    color,
    size = 'md',
    contentClassName,
    nonContentClassName,
}) => {
    const HeadingComponent = sizeVariantComponents[size]

    return (
        <div
            className={clsx(
                'flex overflow-hidden rounded-xl',
                contentVariantClass[contentPosition],
                bgColorVariantClass[color],
                className,
            )}
        >
            <div
                className={qtMerge(
                    'flex max-h-max  basis-1/2 flex-col justify-center',
                    align === 'start'
                        ? 'items-start md:items-start'
                        : 'items-center md:items-center',
                    sizeVariantContainerGap[size],
                    nonContentClassName,
                    !content && 'flex-1',
                )}
            >
                {icon && icon}
                {(header || description) && (
                    <div
                        className={qtMerge(
                            'flex flex-col',
                            textColorVariantClass[color],
                            sizeVariantTextGap[size],
                            !content && description && 'flex-1',
                            align === 'center' && 'text-center',
                        )}
                    >
                        {header && <HeadingComponent>{header}</HeadingComponent>}
                        {description && (
                            <Text size="md" className="text-typography-default">
                                {description}
                            </Text>
                        )}
                    </div>
                )}
                {/* {link && (
          <CustomLink href={link.href} size="md" hasIcon>
            {link.content}
          </CustomLink>
        )} */}
                {children}
            </div>
            {content && <div className={qtMerge('basis-1/2', contentClassName)}>{content}</div>}
        </div>
    )
}

export default BaseCard
