import { TSmartContent, TString } from 'types/generics'

export interface TestimonialItem {
    name: string
    quote: TString
}

interface TestimonialConfig {
    is_eu: boolean
}

export type SmartTestimonialItem = TSmartContent<TestimonialItem, TestimonialConfig>
