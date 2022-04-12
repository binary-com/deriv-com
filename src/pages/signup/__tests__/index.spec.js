import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import { getPropertyValue, isEmptyObject, isBrowser } from 'common/utility'
import NewSignup from '../index.tsx'

// const { isBrowser } = jest.requireActual('common/utility')
// jest.mock('common/utility', () => ({
//     __esModule: true,
//     isBrowser: jest.fn(() => true),
//     getDateFromToday: jest.fn(() => '2020-01-01'),
//     getDomain: jest.fn(() => 'binary.sx'),
//     getClientInformation: jest.fn(() => {}),
// }))

describe('NewSignUp', () => {
    it('it should contain ddd', () => {
        render(<NewSignup />)
        const Element = screen.getByText(/ddd/i)
        expect(Element).toBeInTheDocument()
    })
})
