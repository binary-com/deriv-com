import React, { forwardRef, InputHTMLAttributes } from 'react'
import Typography from '../../typography'
import { localize, Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'
import './text-input.styles.scss'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: TString
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ error, className, label, ...rest }, ref) => {
        return (
            <div className={dclsx(className, 'text_input_container')}>
                <input placeholder={localize(label)} {...rest} ref={ref} />
                {label && (
                    <Typography.Paragraph
                        as="label"
                        size="small"
                        className="text_input_label"
                        padding_inline="2x"
                        bgcolor="primary"
                    >
                        <Localize translate_text={label} />
                    </Typography.Paragraph>
                )}
                {error && (
                    <Typography.Paragraph
                        as="span"
                        size="small"
                        className="text_input_error"
                        padding_inline="2x"
                        textcolor="brand"
                    >
                        {error}
                    </Typography.Paragraph>
                )}
            </div>
        )
    },
)

TextInput.displayName = 'TextInput'

export default TextInput
