import React from 'react'
const ClientSideOnlyLazy = React.lazy(() => import('./_ticker'))

export const TickerLazy = () => {
    const isSSR = typeof window === 'undefined'
    return (
        <>
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <ClientSideOnlyLazy />
                </React.Suspense>
            )}
        </>
    )
}
