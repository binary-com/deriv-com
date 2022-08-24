import React, { useState } from 'react'
import { Input } from 'components/form'
import { WithIntl } from 'components/localization'
import { SectionContainer } from 'components/containers'

const Test = () => {
    const [value, setValue] = useState('')
    return (
        <SectionContainer>
            <Input
                name="email"
                type="text"
                border="solid 1px var(--color-grey-7)"
                label_color="grey-5"
                label_hover_color="grey-5"
                background="white"
                error={''}
                value={value}
                label="Email"
                placeholder="Email"
                handleError={() => {
                    console.log('handleError')
                }}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                onBlur={() => {
                    console.log('handleValidation')
                }}
                // autoFocus={true}
                autoComplete="off"
                // required
            />
        </SectionContainer>
    )
}

export default WithIntl()(Test)
