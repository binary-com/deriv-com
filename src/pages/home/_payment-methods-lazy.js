import React from 'react'
const ClientSideOnlyLazy = React.lazy(() => import('./_payment-methods'))

export const PaymentMethodsLazy = () => {
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
