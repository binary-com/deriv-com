import React, { PropsWithChildren, ReactNode } from 'react'
import { qtMerge } from '@deriv/quill-design'
import { CustomLink, CustomLinkProps } from '@deriv-com/components'

export const FaqBox = ({ children }: PropsWithChildren) => (
    <div className="mb-1200 flex flex-col gap-800">{children}</div>
)

export const FaqLink = ({ children, href }: CustomLinkProps) => (
    <CustomLink className="m-200 inline w-fit underline" size="md" href={href}>
        {children}
    </CustomLink>
)
export const FaqList = ({
    data,
    variant = 'bullet',
}: {
    data: ReactNode[]
    variant?: 'decimal' | 'bullet' | 'none'
}) => (
    <ul
        className={qtMerge(
            'list-outside',
            variant === 'bullet' && 'list-disc',
            variant === 'decimal' && 'list-decimal',
            variant === 'none' && 'list-none',
            'flex flex-col gap-general-sm pl-general-md text-opacity-black-800',
        )}
    >
        {data.map((d, k) => (
            <li key={`${d}-${k}`}>{d}</li>
        ))}
    </ul>
)
