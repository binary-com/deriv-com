import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckboxInput from '../index'

describe('Test name', () => {
    test('should be true', () => {
        render(
            <CheckboxInput>
                {' '}
                <div>shayan</div>
            </CheckboxInput>,
        )
        expect(screen.getByText('shayan')).toBeInTheDocument()
    })
})
