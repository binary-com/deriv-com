import React from 'react'
import { Trans } from 'react-i18next'
import { TString } from 'types/generics'

type LocalizeProps = {
    translate_text: string | TString
    values?: { [key: string]: string | number }
    components?: React.ReactElement[]
}

export const Localize = ({ translate_text, values, components }: LocalizeProps) => {
    if (typeof translate_text === 'string' && translate_text?.includes('_t_')) {
        // Since I know the indices I wanna remove, substring is used instead of regex
        const actual_key = translate_text.substring(3, translate_text.length - 3)
        return <Trans defaults={actual_key} values={values} components={components} />
    }
    return <Trans defaults={translate_text} values={values} components={components} />
}
