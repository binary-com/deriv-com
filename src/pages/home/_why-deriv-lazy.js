import React from 'react'
const ClientSideOnlyLazy = React.lazy(() => import('./_why-deriv'))

export const WhyDerivLazy = () => {
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
