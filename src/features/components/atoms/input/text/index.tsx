import React, { forwardRef, InputHTMLAttributes } from 'react'
import Typography from '../../typography'
import Image from '../../image'
import CrossIcon from 'images/svg/help/cross.svg'
import { localize, Localize } from 'components/localization'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: TString
    clearErrors?: VoidFunction
    setValue?: (key: string, value: string) => void
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ error, className, label, clearErrors, setValue, ...rest }, ref) => {
        const notValid = error && error.length ? 'error' : 'valid'
        return (
            <div className={dclsx(className, 'text_input_container', notValid)}>
                <input placeholder={localize(label)} {...rest} ref={ref} />
                {error && (
                    <Image
                        src={CrossIcon}
                        alt="error icon"
                        className="cross_icon"
                        onClick={() => {
                            setValue('email', '')
                            clearErrors()
                        }}
                    />
                )}

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
