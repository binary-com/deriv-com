import React, { ReactNode, Suspense } from 'react'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type SuspenseHelperProps = {
    fallback?: ReactNode
    children: ReactNode
}

const SuspenseHelper = ({ fallback, children }: SuspenseHelperProps) => {
    const [is_mounted] = usePageLoaded()

    return <Suspense fallback={fallback}>{!is_mounted ? fallback : children}</Suspense>
}

export default SuspenseHelper
