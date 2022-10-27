import { TCalculator } from './types'

export const calculators: TCalculator[] = [
    {
        index: 0,
        name: '_t_Margin calculator_t_',
        text: '_t_Calculate the margin you need to open and hold your positions with our margin calculator._t_',
        image_name: 'margin_calculator',
        image_alt_name: '_t_DMT5 margin trading calculator_t_',
        button_text: '_t_Try our margin calculator_t_',
        link: '/trader-tools/margin-calculator/',
    },
    {
        index: 1,
        name: '_t_Swap calculator_t_',
        text: '_t_Calculate your swap fee and know exactly what you are expected to pay or will earn for maintaining an overnight contract._t_',
        image_name: 'swap_calculator',
        image_alt_name: '_t_DMT5 swap trading calculator_t_',
        button_text: '_t_Try our swap calculator_t_',
        link: '/trader-tools/swap-calculator/',
    },
]
