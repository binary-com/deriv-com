import { useEffect } from 'react'

export const useDebouncedEffect = (effect: () => void, deps: [], delay: number): void => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay)

        return () => clearTimeout(handler)
    }, [...(deps || []), delay])
}
