import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CheckboxInput from '../index'

describe('CheckboxInput', () => {
    it('should be rendered with checked attribute set to false ', () => {
        render(
            <CheckboxInput>
                <div>label name</div>
            </CheckboxInput>,
        )

        const input_label = screen.getByText(/label name/)
        const checkbox = screen.getByRole('checkbox')

        expect(input_label).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
    })

    it('should be rendered with checked attribute set to true ', () => {
        const onChange = jest.fn()
        render(
            <CheckboxInput onChange={onChange} checked>
                <div>input title</div>
            </CheckboxInput>,
        )
        const input_label = screen.getByText('input title')
        const checkbox = screen.getByRole('checkbox')

        expect(input_label).toBeInTheDocument()
        expect(checkbox).toBeChecked()
    })

    it('should be rendered and checked attribute should be toggled when clicking on the checkbox  ', async () => {
        const checked = false
        const onChange = jest.fn(() => !checked)

        render(
            <CheckboxInput onChange={onChange}>
                <div>input title</div>
            </CheckboxInput>,
        )

        const input_label = screen.getByText('input title')
        const checkbox = screen.getByRole('checkbox')

        expect(input_label).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()

        await userEvent.click(checkbox)
        expect(checkbox).toBeChecked()

        await userEvent.click(checkbox)
        expect(checkbox).not.toBeChecked()
    })
})
