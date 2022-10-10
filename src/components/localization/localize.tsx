import React from 'react'
import { Trans } from 'react-i18next'

type LocalizeProps = {
    translate_text: string
    values?: { [key: string]: string | number }
    components?: React.ReactElement[]
}

export const Localize = ({ translate_text, values, components }: LocalizeProps) => (
    <Trans defaults={translate_text} values={values} components={components} />
)
