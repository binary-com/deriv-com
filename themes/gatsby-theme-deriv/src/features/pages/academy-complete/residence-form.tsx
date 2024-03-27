import React, { useState } from 'react'
import styled from 'styled-components'
import { next_btn } from './signup-academy-complete.module.scss'
import { DropdownSearch } from 'components/elements'
import device from 'themes/device'
import { localize, Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import { Button } from 'components/form'
import Flex from 'features/components/atoms/flex-box'
import { SelectedType } from 'components/hooks/use-dropdown'

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const InputWrapper = styled.ul`
    width: 100%;
    line-height: 10px;
`
export const NextButton = styled(Button)`
    border-radius: 4px;
    font-family: 'Ubuntu';
    text-align: center;
    height: 40px;

    @media ${device.tablet} {
        width: 100%;
    }
`
type CountryType = {
    name: string
    display_name: string
    value: string
    disabled: string
}
type HandleNextType = () => void

type ResidenceFormProps = {
    residence_list?: CountryType[]
    handleNext?: HandleNextType
    selected_value?: {
        country: SelectedType
        citizenship: SelectedType
    }
    setSelectedValue: (e) => void
}

const ResidenceForm = ({
    residence_list,
    handleNext,
    selected_value,
    setSelectedValue,
}: ResidenceFormProps) => {
    const { country, citizenship } = selected_value
    const [errors, setErrors] = useState(false)

    const handleSelection = (country) => {
        const is_country_disabled = residence_list.filter((item) => country.name === item.name)?.[0]
            ?.disabled
        setSelectedValue((prevState) => ({
            ...prevState,
            country: country,
        }))

        if (is_country_disabled) {
            setErrors(true)
        } else {
            setErrors(false)
        }
    }

    const form_inputs = [
        {
            id: 'dm-country-select',
            name: 'country',
            type: 'select',
            label: localize('_t_Country of residence_t_'),
            list: residence_list,
            placeholder_message: localize(
                '_t_Country of residence is where you currently live._t_',
            ),
            error_message: '_t_Unfortunately, Deriv is not available in this country._t_',
        },
        {
            id: 'dm-citizenship-select',
            name: 'citizenship',
            type: 'select',
            label: localize('_t_Citizenship_t_'),
            list: residence_list,
            placeholder_message: localize(
                '_t_Select your citizenship/nationality as it appears on your passport or other government-issued ID._t_',
            ),
        },
    ]

    return (
        <Flex.Box direction="col" align="start" padding="8x" md={{ padding: '12x' }}>
            <Typography.Paragraph weight="bold">
                <Localize translate_text="_t_Select your country and citizenship:_t_" />
            </Typography.Paragraph>

            <InputGroup>
                <InputWrapper>
                    {form_inputs.map((item) => {
                        if (item.name === 'country') {
                            return (
                                <>
                                    <DropdownSearch
                                        key={item.id}
                                        id={item.id}
                                        label={item.label}
                                        items={item.list}
                                        selected_item={country}
                                        mb="5px"
                                        onChange={(country) => handleSelection(country)}
                                        style={{ marginTop: '16px' }}
                                        onClearInput={() =>
                                            setSelectedValue({ ...selected_value, country: '' })
                                        }
                                    />
                                    {errors && (
                                        <Typography.Paragraph
                                            size="small"
                                            padding_inline="8x"
                                            textcolor="brand"
                                        >
                                            <Localize translate_text={item.error_message} />
                                        </Typography.Paragraph>
                                    )}
                                    {!errors && (
                                        <Typography.Paragraph
                                            size="small"
                                            padding_inline="8x"
                                            textcolor="gray-shade"
                                        >
                                            <Localize translate_text={item.placeholder_message} />
                                        </Typography.Paragraph>
                                    )}
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <DropdownSearch
                                        key={item.id}
                                        id={item.id}
                                        label={item.label}
                                        items={item.list}
                                        selected_item={citizenship}
                                        mb="5px"
                                        onChange={(citizenship) => {
                                            setSelectedValue((prevState) => ({
                                                ...prevState,
                                                citizenship: citizenship,
                                            }))
                                        }}
                                        style={{ marginTop: '16px' }}
                                        onClearInput={() =>
                                            setSelectedValue({ ...selected_value, citizenship: '' })
                                        }
                                    />
                                    <Typography.Paragraph
                                        size="small"
                                        padding_inline="8x"
                                        textcolor="gray-shade"
                                    >
                                        <Localize translate_text={item.placeholder_message} />
                                    </Typography.Paragraph>
                                </>
                            )
                        }
                    })}
                    <div className={next_btn}>
                        <NextButton
                            secondary
                            disabled={!citizenship || !country || errors || !selected_value}
                            onClick={handleNext}
                        >
                            <Localize translate_text="_t_Next_t_" />
                        </NextButton>
                    </div>
                </InputWrapper>
            </InputGroup>
        </Flex.Box>
    )
}
export default ResidenceForm
