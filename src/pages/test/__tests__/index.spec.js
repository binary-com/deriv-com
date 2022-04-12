import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Test from '../index'

it('xxx', () => {
    render(<Test />)
    const Element = screen.getByText(/Test/i)
    expect(Element).toBeInTheDocument()
})
