import { TSmartContent } from 'types/generics'
import type { NumberItem } from 'features/components/molecules/number-box'

type NumberItemConfig = {
    is_eu: boolean
}

export type SmartNumberItem = TSmartContent<NumberItem, NumberItemConfig>
