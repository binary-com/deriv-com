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
    getWindowWidth: jest.fn(() => '1920'),
    getLocalizedUrl: jest.fn(() => 'https://binary.sx/en/signup'),
    replaceLocale: jest.fn(() => 'https://binary.sx/en/signup?lang=zh-cn'),
    getLanguage: jest.fn(() => null),
    isNullUndefined: jest.fn(() => true),
}))
