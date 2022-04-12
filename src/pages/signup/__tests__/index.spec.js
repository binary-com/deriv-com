import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewSignup from '../index.tsx'

it('yyy', () => {
    render(<NewSignup />)
    const Element = screen.getByText(/ddd/i)
    expect(Element).toBeInTheDocument()
})
