import React, { HTMLAttributes, ComponentPropsWithRef } from 'react'
import clsx from 'clsx'
import { SpacingSize } from 'features/types'
import './box.scss'

export interface SpaceProps<T extends React.ElementType = 'p'> {
    as?: T
    margin?: SpacingSize
    ml?: SpacingSize
    mr?: SpacingSize
    mt?: SpacingSize
    mb?: SpacingSize
    margin_inline?: SpacingSize
    margin_block?: SpacingSize
    padding?: SpacingSize
    pl?: SpacingSize
    pr?: SpacingSize
    pt?: SpacingSize
    pb?: SpacingSize
    padding_inline?: SpacingSize
    padding_block?: SpacingSize
    innerRef?: ComponentPropsWithRef<T>['ref']
}

export interface BoxProps<T extends React.ElementType = 'p'>
    extends HTMLAttributes<T>,
        SpaceProps<T> {}

const Box = <T extends React.ElementType>({
    as,
    margin,
    padding,
    className,
    ml,
    mr,
    mt,
    mb,
    margin_inline,
    margin_block,
    pl,
    pr,
    pt,
    pb,
    padding_block,
    padding_inline,
    innerRef,
    ...rest
}: BoxProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) => {
    const Component = as || 'div'

    const classnames = clsx({
        [className]: className,
        [`margin-${margin}`]: margin,
        [`margin_inline-${margin_inline}`]: margin_inline,
        [`margin_block-${margin_block}`]: margin_block,
        [`ml-${ml}`]: ml,
        [`mr-${mr}`]: mr,
        [`mt-${mt}`]: mt,
        [`mb-${mb}`]: mb,
        [`padding-${padding}`]: padding,
        [`padding_inline-${padding_inline}`]: padding_inline,
        [`padding_block-${padding_block}`]: padding_block,
        [`pl-${pl}`]: pl,
        [`pr-${pr}`]: pr,
        [`pt-${pt}`]: pt,
        [`pb-${pb}`]: pb,
    })

    return <Component ref={innerRef} className={classnames === '' ? null : classnames} {...rest} />
}

export default Box
