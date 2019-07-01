import React from 'react'
import { useTranslation } from 'react-i18next'

function Test() {
    const { t } = useTranslation()

    return <h1>{t('Greeting')}</h1>
}

export default Test
