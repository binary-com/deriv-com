import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useLangDirection = () => {
    const { i18n } = useTranslation()

    const check_lang_direction = useCallback(() => {
        return i18n.dir(i18n.language)
    }, [i18n])

    const [lang_direction, setLangDirection] = useState<'ltr' | 'rtl'>(() => {
        return check_lang_direction()
    })

    useEffect(() => {
        setLangDirection(check_lang_direction())
    }, [check_lang_direction])

    return lang_direction
}
