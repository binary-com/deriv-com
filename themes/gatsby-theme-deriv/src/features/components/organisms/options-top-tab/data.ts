import { OptionNavigationType } from 'features/components/templates/navigation/tab-nav-without-border/types'
import {
    AccumulatorslActive,
    DigitalActive,
    VanillaActive,
    TurboActive,
    AccumulatorslInActive,
    DigitalnActive,
    VanillaInActive,
    TurboInActive,
} from 'images/svg/trade-types/options/options-images'
export const tab_data: OptionNavigationType[] = [
    {
        src: DigitalnActive,
        selected_src: DigitalActive,
        button_text: '_t_Digital options_t_',
        active_path: '/trade-types/options/digital-options/',
        option_name: 'digital',
        to: '/trade-types/options/digital-options/up-and-down/',
    },
    {
        src: AccumulatorslInActive,
        selected_src: AccumulatorslActive,
        button_text: '_t_Accumulator options_t_',
        active_path: '/trade-types/options/accumulator-options/',
        option_name: 'accumulator',
        to: '/trade-types/options/accumulator-options/',
    },
    {
        src: VanillaInActive,
        selected_src: VanillaActive,
        button_text: '_t_Vanilla options_t_',
        active_path: '/trade-types/options/vanilla-options/',
        option_name: 'vanilla',
        to: '/trade-types/options/vanilla-options/',
    },
    {
        src: TurboInActive,
        selected_src: TurboActive,
        button_text: '_t_Turbo options_t_',
        active_path: '/trade-types/options/turbo-options',
        option_name: 'turbo',
        to: '/trade-types/options/turbo-options',
    },
]
