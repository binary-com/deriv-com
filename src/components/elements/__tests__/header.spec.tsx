import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '../typography'

describe('Header', () => {
    it('Should return a string', () => {
        const test_string = 'foo'

        render(<Header>{test_string}</Header>)

        expect(screen.getByText('foo')).toBeInTheDocument()
    })
})
