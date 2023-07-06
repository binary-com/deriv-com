import { OptionNavigationType } from '../../../features/components/templates/navigation/tab-nav-without-border/types'
import {
    AccumulatorslActive,
    DigitalActive,
    VanillaActive,
    AccumulatorslInActive,
    DigitalnActive,
    VanillaInActive,
} from 'images/svg/trade-types/options-images'

export const tab_data: OptionNavigationType[] = [
    {
        src: DigitalnActive,
        selected_src: DigitalActive,
        button_text: '_t_Digital options_t_',
        option_name: 'digital',
        to: '/trade-types/options/digital-options',
    },
    {
        src: AccumulatorslInActive,
        selected_src: AccumulatorslActive,
        button_text: '_t_Accumulator options_t_',
        option_name: 'accumulator',
        to: '/trade-types/options/accumulator-options',
    },
    {
        src: VanillaInActive,
        selected_src: VanillaActive,
        button_text: '_t_Vanilla options_t_',
        option_name: 'vanilla',
        to: '/trade-types/options/vanilla-options',
    },
]
