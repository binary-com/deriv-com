import { useEffect, useState } from 'react'

function getNetworkConnection() {
    return navigator.connection || navigator.mozConnection || navigator.webkitConnection || null
}
function getNetworkConnectionInfo() {
    const connection = getNetworkConnection()
    if (!connection) {
        return {}
    }
    return {
        effectiveType: connection.effectiveType,
    }
}
function useNetwork() {
    const [state, setState] = useState(() => {
        return {
            online: navigator.onLine,
            ...getNetworkConnectionInfo(),
        }
    })
    useEffect(() => {
        const handleOnline = () => {
            setState((prevState) => ({
                ...prevState,
                online: true,
                since: new Date().toString(),
            }))
        }
        const handleOffline = () => {
            setState((prevState) => ({
                ...prevState,
                online: false,
                since: new Date().toString(),
            }))
        }
        const handleConnectionChange = () => {
            setState((prevState) => ({
                ...prevState,
                ...getNetworkConnectionInfo(),
            }))
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        const connection = getNetworkConnection()
        connection?.addEventListener('change', handleConnectionChange)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
            connection?.removeEventListener('change', handleConnectionChange)
        }
    }, [])
    return state
}
export default useNetwork
