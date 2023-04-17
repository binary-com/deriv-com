import { useContext } from 'react'
import { PopupContext } from 'store/popup-context'

const usePopup = () => {
    const popup = useContext(PopupContext)

    if (!popup) {
        throw new Error('usePopup must be used within PopupContext')
    }

    return popup
}

export default usePopup
