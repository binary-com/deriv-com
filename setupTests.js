// // add all jest-extended matchers
// import * as matchers from 'jest-extended'
// expect.extend(matchers)

// // or just add specific matchers
// import { toBeArray, toBeSealed } from 'jest-extended'
// expect.extend({ toBeArray, toBeSealed })
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-extended'
import 'jest-chain'

jest.mock('common/utility', () => ({
    __esModule: true,
    isBrowser: jest.fn(() => true),
    getDateFromToday: jest.fn(() => '2020-01-01'),
    getDomain: jest.fn(() => 'binary.sx'),
    getClientInformation: jest.fn(() => {}),
    queryParamData: jest.fn(() => ''),
}))
