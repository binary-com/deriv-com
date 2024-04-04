import React, { forwardRef, InputHTMLAttributes } from 'react'
import Typography from '../../typography'
import dclsx from 'features/utils/dclsx'

const CheckboxInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ children, className, ...rest }, ref) => {
        return (
            <Typography.Paragraph
                as="label"
                className={dclsx(className, 'at-checkbox_input_container')}
            >
                <input type={'checkbox'} {...rest} ref={ref} />
                {children}
            </Typography.Paragraph>
        )
    },
)

CheckboxInput.displayName = 'CheckboxInput'

export default CheckboxInput
